import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api'; // Import the default axios instance from api.js

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('authUser');
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        if (authToken) {
            localStorage.setItem('authToken', authToken);
            // Apply token to axios default headers
            api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        } else {
            localStorage.removeItem('authToken');
            delete api.defaults.headers.common['Authorization'];
        }
    }, [authToken]);

    const login = (payload) => {
        // payload may be { token, email, role }
        const token = typeof payload === 'string' ? payload : payload?.token;
        const nextUser = typeof payload === 'string' ? null : { email: payload?.email, role: payload?.role };
        setAuthToken(token);
        if (nextUser) {
            setUser(nextUser);
            localStorage.setItem('authUser', JSON.stringify(nextUser));
        }
    };

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authUser');
    };

    const value = {
        authToken,
        isAuthenticated: !!authToken,
        user,
        role: user?.role ?? null,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};