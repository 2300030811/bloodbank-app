import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login as apiLogin } from '../services/api';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await apiLogin(formData);
            login({ token: response.data.token, email: response.data.email, role: response.data.role });
            if (response.data.role !== 'ROLE_ADMIN') {
                setError('Not an admin account.');
                return;
            }
            navigate('/inventory');
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="max-w-md mx-auto bg-white p-8 shadow rounded">
                <h1 className="text-2xl font-semibold mb-6">Admin Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input name="email" type="email" className="w-full border px-3 py-2 rounded" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input name="password" type="password" className="w-full border px-3 py-2 rounded" value={formData.password} onChange={handleChange} required />
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" className="w-full py-3 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700">Login</button>
                </form>
                <p className="text-sm mt-4">Return to <Link to="/" className="text-red-600">Home</Link></p>
            </div>
        </div>
    );
};

export default AdminLogin;


