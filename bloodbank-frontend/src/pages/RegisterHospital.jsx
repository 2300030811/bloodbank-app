import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerHospital } from '../services/api';

const RegisterHospital = () => {
    const [formData, setFormData] = useState({
        hospitalName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await registerHospital(formData);

            // Save the token from the successful registration
            localStorage.setItem('authToken', response.data.token);

            alert('Registration successful! You are now logged in.');
            // Redirect to a protected page
            navigate('/requests');

        } catch (err) {
            console.error("Registration failed:", err);
            setError('Registration failed. The email might already be in use.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Register Hospital</h1>
                    <p className="mt-2 text-gray-600">Create an account to manage your requests</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700">Hospital Name</label>
                        <input
                            id="hospitalName"
                            name="hospitalName"
                            type="text"
                            required
                            value={formData.hospitalName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {error && (
                        <p className="text-sm text-red-600 text-center">{error}</p>
                    )}

                    <div>
                        <button type="submit" className="w-full py-3 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
                            Register
                        </button>
                    </div>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Already have an account?{' '}
                    <Link to="/hospital-login" className="font-medium text-red-600 hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

// This is the critical line that was missing
export default RegisterHospital;