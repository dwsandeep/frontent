'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import pb from '@/lib/pocketbaseClient';

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    duration: '',
    bookingDate: '',
    bookingTime: '',
    serviceType: '',
    passengerName: '',
    passengerPhone: '',
    specialRequirements: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.pickupLocation || !formData.dropoffLocation) {
      toast({ 
        title: "Validation Error", 
        description: "Both pickup and dropoff locations are required.", 
        variant: "destructive" 
      });
      return;
    }

    setLoading(true);
    try {
      // Append special requirements and duration to pickupLocation if provided, 
      // since they don't have dedicated fields in the DB schema
      const extraInfo = [];
      if (formData.duration) extraInfo.push(`Duration: ${formData.duration}`);
      if (formData.specialRequirements) extraInfo.push(`Notes: ${formData.specialRequirements}`);
      
      const finalPickup = extraInfo.length > 0 
        ? `${formData.pickupLocation} | ${extraInfo.join(' | ')}`
        : formData.pickupLocation;

      const dataToSubmit = {
        pickupLocation: finalPickup,
        dropoffLocation: formData.dropoffLocation,
        bookingDate: new Date(formData.bookingDate).toISOString(),
        bookingTime: formData.bookingTime,
        serviceType: formData.serviceType,
        passengerName: formData.passengerName,
        passengerPhone: formData.passengerPhone,
        status: 'pending'
      };

      await pb.collection('bookings').create(dataToSubmit, { $autoCancel: false });
      
      toast({ 
        title: "Driver Booked Successfully!", 
        description: `Driver will pick you up from ${formData.pickupLocation} and drop you at ${formData.dropoffLocation}.` 
      });
      
      setFormData({
        pickupLocation: '', dropoffLocation: '', duration: '', bookingDate: '', bookingTime: '', 
        serviceType: '', passengerName: '', passengerPhone: '', specialRequirements: ''
      });
      onOpenChange(false);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      toast({ 
        title: "Booking Failed", 
        description: errorMessage, 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white border-border text-slate-900 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">Book a Professional Driver</DialogTitle>
          <DialogDescription className="text-slate-500">
            Fill out the details below to schedule your driver rental.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Row 1: Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="pickupLocation" className="text-slate-700">Pickup Location <span className="text-red-500">*</span></Label>
              <Input 
                id="pickupLocation" name="pickupLocation" 
                placeholder="Enter pickup location" 
                value={formData.pickupLocation} onChange={handleChange} 
                required className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dropoffLocation" className="text-slate-700">Dropoff Location <span className="text-red-500">*</span></Label>
              <Input 
                id="dropoffLocation" name="dropoffLocation" 
                placeholder="Enter dropoff location" 
                value={formData.dropoffLocation} onChange={handleChange} 
                required className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
          </div>
          
          {/* Row 2: Duration & Service Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-slate-700">Duration</Label>
              <Input 
                id="duration" name="duration" 
                placeholder="e.g., 4 hours, 2 days" 
                value={formData.duration} onChange={handleChange} 
                className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceType" className="text-slate-700">Service Type <span className="text-red-500">*</span></Label>
              <Select value={formData.serviceType} onValueChange={handleSelectChange} required>
                <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-900">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-white border-slate-200">
                  <SelectItem value="Economy">Economy</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3: Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bookingDate" className="text-slate-700">Start Date <span className="text-red-500">*</span></Label>
              <Input 
                id="bookingDate" name="bookingDate" type="date" 
                value={formData.bookingDate} onChange={handleChange} 
                required className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bookingTime" className="text-slate-700">Start Time <span className="text-red-500">*</span></Label>
              <Input 
                id="bookingTime" name="bookingTime" type="time" 
                value={formData.bookingTime} onChange={handleChange} 
                required className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Passenger Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="passengerName" className="text-slate-700">Your Name</Label>
              <Input 
                id="passengerName" name="passengerName" 
                placeholder="John Doe" 
                value={formData.passengerName} onChange={handleChange} 
                required className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passengerPhone" className="text-slate-700">Phone Number</Label>
              <Input 
                id="passengerPhone" name="passengerPhone" 
                placeholder="+1 (555) 000-0000" 
                value={formData.passengerPhone} onChange={handleChange} 
                required className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary"
              />
            </div>
          </div>

          {/* Row 4: Special Requirements */}
          <div className="space-y-2">
            <Label htmlFor="specialRequirements" className="text-slate-700">Special Requirements (Optional)</Label>
            <Textarea 
              id="specialRequirements" name="specialRequirements" 
              placeholder="Any specific requests? (e.g., automatic transmission experience, bilingual driver)" 
              value={formData.specialRequirements} onChange={handleChange} 
              className="bg-slate-50 border-slate-200 text-slate-900 focus-visible:ring-primary resize-none"
              rows={3}
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-slate-200 text-slate-700 hover:bg-slate-100">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              {loading ? 'Confirming...' : 'Confirm Booking'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;