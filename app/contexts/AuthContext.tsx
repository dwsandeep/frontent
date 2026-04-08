'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import pb from '@/lib/pocketbaseClient';
import { useToast } from '@/hooks/use-toast';

interface User {
  id?: string;
  email?: string;
  role?: string;
  [key: string]: unknown;
}

interface AuthContextType {
  currentUser: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ record: User }>;
  logout: () => void;
  register: (email: string, password: string) => Promise<{ record: User }>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User>({});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { toast } = useToast();

   

    useEffect(() => {
  const checkAuth = () => {
    if (typeof window === 'undefined') return;
    
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } else {
        setCurrentUser({} as User);
      }
    } catch (error) {
      console.error("Error parsing stored user:", error);
      localStorage.removeItem("user");
      setCurrentUser({} as User);
    }

    // Also check PocketBase auth
    // if (pb.authStore.isValid) {
    //   try {
    //     const pbUser = pb.authStore.model;
    //     setCurrentUser(pbUser);
    //     // Sync with localStorage
    //     localStorage.setItem("user", JSON.stringify(pbUser));
    //   } catch (error) {
    //     setCurrentUser(null);
    //   }
    // }
    setLoading(false);
  };

  checkAuth();

//   const unsubscribe = pb.authStore.onChange((token, model) => {
//     setCurrentUser(model);
//     // Sync with localStorage
//     if (model) {
//       localStorage.setItem("user", JSON.stringify(model));
//     } else {
//       localStorage.removeItem("user");
//     }
//   });
const unsubscribe = () => {};

  return () => unsubscribe();
}, []);

    const login = async (email: string, password: string) => {
        try {
            // const authData = await pb.collection('users').authWithPassword(email, password);
            const authData = {record: {email, password, role: 'driver'}};
            
            setCurrentUser(authData.record);
            
            // Store in localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem("user", JSON.stringify(authData.record));
            }
            
            toast({ title: "Login successful", description: "Welcome back!" });
            
            router.push('/driver-dashboard');
            return authData;
        } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
            throw err;
        }
    };

    const register = async (email: string, password: string) => {
        try {
            // const authData = await pb.collection('users').authWithPassword(email, password);
            const authData = {record: {email, password, role: 'driver'}};
            
            setCurrentUser(authData.record);
            
            // Store in localStorage
            if (typeof window !== 'undefined') {
                localStorage.setItem("user", JSON.stringify(authData.record));
            }
            
            toast({ title: "Login successful", description: "Welcome back!" });
            
            router.push('/driver-dashboard');
            return authData;
        } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
            throw err;
        }
    };

    const signup = async (data: { email: string; password: string }) => {
        // try {
        //     const record = await pb.collection('users').create({
        //         ...data,
        //         emailVisibility: true,
        //     });
        //     await login(data.email, data.password);
        //     return record;
        // } catch (error) {
        //     toast({ title: "Signup failed", description: error.message, variant: "destructive" });
        //     throw error;
        // }
    };

    const logout = () => {
        // pb.authStore.clear();
        // setCurrentUser(null);
        // if (typeof window !== 'undefined') {
        //     localStorage.removeItem("user");
        // }
        // router.push('/');
        // toast({ title: "Logged out", description: "You have been successfully logged out." });
    };

    const value = {
        currentUser,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!currentUser,
        isDriver: currentUser?.role === 'driver'
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};