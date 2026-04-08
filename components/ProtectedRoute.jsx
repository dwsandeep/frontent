import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext.jsx';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const { currentUser, isAuthenticated } = useAuth();
    const router = useRouter();

    if (!isAuthenticated) {
        router.push('/login');
        return null;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser?.role)) {
        // Redirect to appropriate dashboard if they don't have access to this route
        router.push('/');
        return null;
    }

    return children;
};

export default ProtectedRoute;