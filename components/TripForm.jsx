import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '../hooks/use-toast';
import pb from '../lib/pocketbaseClient';

const TripForm = ({ open, onOpenChange, trip = null, onSuccess }) => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [drivers, setDrivers] = useState([]);
    const [formData, setFormData] = useState({
        driverId: '',
        route: '',
        destination: '',
        tripDate: '',
        tripTime: '',
        status: 'pending'
    });

    useEffect(() => {
        const fetchDrivers = async () => {
            try {
                const records = await pb.collection('drivers').getFullList({ sort: 'name', $autoCancel: false });
                setDrivers(records);
            } catch (error) {
                console.error("Failed to fetch drivers", error);
            }
        };
        if (open) fetchDrivers();
    }, [open]);

    useEffect(() => {
        if (trip) {
            setFormData({
                driverId: trip.driverId || '',
                route: trip.route || '',
                destination: trip.destination || '',
                tripDate: trip.tripDate ? trip.tripDate.split('T')[0] : '',
                tripTime: trip.tripTime || '',
                status: trip.status || 'pending'
            });
        } else {
            setFormData({
                driverId: '', route: '', destination: '', tripDate: '', tripTime: '', status: 'pending'
            });
        }
    }, [trip, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let dataToSubmit = { ...formData };
            if (dataToSubmit.tripDate) {
                dataToSubmit.tripDate = new Date(dataToSubmit.tripDate).toISOString();
            }

            if (trip?.id) {
                await pb.collection('trips').update(trip.id, dataToSubmit, { $autoCancel: false });
                toast({ title: "Success", description: "Trip updated successfully." });
            } else {
                await pb.collection('trips').create(dataToSubmit, { $autoCancel: false });
                toast({ title: "Success", description: "Trip created successfully." });
            }
            onSuccess();
            onOpenChange(false);
        } catch (error) {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>{trip ? 'Edit Trip' : 'Create New Trip'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="driverId">Assign Driver</Label>
                        <Select value={formData.driverId} onValueChange={(v) => handleSelectChange('driverId', v)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a driver" />
                            </SelectTrigger>
                            <SelectContent>
                                {drivers.map(d => (
                                    <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="route">Route</Label>
                        <Input id="route" name="route" value={formData.route} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="destination">Destination</Label>
                        <Input id="destination" name="destination" value={formData.destination} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="tripDate">Date</Label>
                            <Input id="tripDate" name="tripDate" type="date" value={formData.tripDate} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tripTime">Time</Label>
                            <Input id="tripTime" name="tripTime" type="time" value={formData.tripTime} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select value={formData.status} onValueChange={(v) => handleSelectChange('status', v)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="in progress">In Progress</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
                        <Button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save Trip'}</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default TripForm;