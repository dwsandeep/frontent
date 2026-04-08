'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import pb from '@/lib/pocketbaseClient';
import { useToast } from '@/hooks/use-toast';

// Define types for driver data
interface Driver {
    id: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    licenseNumber: string;
    status: 'active' | 'inactive' | 'pending';
    createdAt?: string;
    updatedAt?: string;
}

interface User {
    id: string;
    email: string;
    name: string;
    role: 'driver' | 'customer' | 'admin';
    emailVisibility: boolean;
    createdAt?: string;
    updatedAt?: string;
}

interface DriverAuthContextType {
    currentDriver: Driver | null;
    login: (email: string, password: string) => Promise<{ record: User; token: string }>;
    signup: (formData: DriverSignupFormData) => Promise<User>;
    logout: () => void;
    isAuthenticated: boolean;
}

interface DriverSignupFormData {
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
    phone: string;
    licenseNumber: string;
}

const DriverAuthContext = createContext<DriverAuthContextType | null>(null);

export const useDriverAuth = () => {
    const context = useContext(DriverAuthContext);
    if (!context) {
        throw new Error('useDriverAuth must be used within a DriverAuthProvider');
    }
    return context;
};

export const DriverAuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentDriver, setCurrentDriver] = useState<Driver | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
        const checkAuth = async () => {
            if (typeof window === 'undefined') {
                setLoading(false);
                return;
            }
            try {
                // Add timeout to prevent hanging
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Auth timeout')), 5000)
                );
                
                const authPromise = (async () => {
                    if (pb.authStore.isValid && pb.authStore.model?.role === 'driver') {
                        await pb.collection('users').authRefresh();
                        // Fetch associated driver profile
                        const driverRecord = await pb.collection('drivers').getFirstListItem<Driver>(`userId="${pb.authStore.model.id}"`, { $autoCancel: false });
                        setCurrentDriver(driverRecord);
                    }
                })();
                
                await Promise.race([authPromise, timeoutPromise]);
            } catch (error) {
                console.error("Auth check failed:", error);
                pb.authStore.clear();
                setCurrentDriver(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            // Authenticate via users collection
            const authData = await pb.collection('users').authWithPassword<User>(email, password);
            
            if (authData.record.role !== 'driver') {
                pb.authStore.clear();
                throw new Error("Unauthorized: Not a driver account.");
            }

            // Fetch driver profile
            const driverRecord = await pb.collection('drivers').getFirstListItem<Driver>(`userId="${authData.record.id}"`, { $autoCancel: false });
            setCurrentDriver(driverRecord);
            
            toast({ title: "Login successful", description: "Welcome to the Driver Dashboard!" });
            router.push('/driver-dashboard');
            return authData;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            toast({ title: "Login failed", description: errorMessage, variant: "destructive" });
            throw error;
        }
    };

    const signup = async (formData: DriverSignupFormData) => {
        try {
            // 1. Create user auth record
            const userRecord = await pb.collection('users').create<User>({
                email: formData.email,
                password: formData.password,
                passwordConfirm: formData.passwordConfirm,
                name: formData.name,
                role: 'driver',
                emailVisibility: true,
            }, { $autoCancel: false });

            // 2. Create driver profile record
            await pb.collection('drivers').create<Driver>({
                userId: userRecord.id,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                licenseNumber: formData.licenseNumber,
                status: 'active'
            }, { $autoCancel: false });

            toast({ title: "Signup successful", description: "You can now log in." });
            router.push('/driver-login');
            return userRecord;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            toast({ title: "Signup failed", description: errorMessage, variant: "destructive" });
            throw error;
        }
    };

    const logout = () => {
        pb.authStore.clear();
        setCurrentDriver(null);
        router.push('/');
        toast({ title: "Logged out", description: "You have been successfully logged out." });
    };

    const value = {
        currentDriver,
        login,
        signup,
        logout,
        isAuthenticated: !!currentDriver,
    };

    if (loading) {
        return <div className="min-h-screen bg-background text-foreground flex items-center justify-center">Loading...</div>;
    }

    return (
        <DriverAuthContext.Provider value={value}>
            {children}
        </DriverAuthContext.Provider>
    );
};