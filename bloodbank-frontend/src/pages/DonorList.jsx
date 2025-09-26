import React, { useState, useEffect } from 'react';
import { getAllDonors, deleteDonor } from '../services/api';
import { useAuth } from '../context/AuthContext';

const DonorList = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isAuthenticated, role } = useAuth(); // Get login status and role from context

    useEffect(() => {
        const fetchDonors = async () => {
            try {
                const response = await getAllDonors();
                setDonors(response.data);
            } catch (err) {
                setError('Failed to fetch donors. Please log in to view this page.');
                console.error("Error fetching donors:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDonors();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this donor?')) {
            try {
                await deleteDonor(id);
                setDonors(donors.filter((donor) => donor.id !== id));
            } catch (err) {
                alert('Failed to delete donor.');
                console.error(err);
            }
        }
    };

    if (loading) return <div className="text-center p-10">Loading...</div>;
    if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Registered Donors</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Blood Group</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            {role === 'ROLE_ADMIN' && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {donors.map((donor) => (
                            <tr key={donor.id}>
                                <td className="px-6 py-4">{donor.name}</td>
                                <td className="px-6 py-4">{donor.age}</td>
                                <td className="px-6 py-4">{donor.bloodGroup}</td>
                                <td className="px-6 py-4">{donor.phone}</td>
                                <td className="px-6 py-4">{donor.email}</td>
                                {role === 'ROLE_ADMIN' && (
                                    <td className="px-6 py-4">
                                        <button onClick={() => handleDelete(donor.id)} className="text-red-600 hover:text-red-900">
                                            Delete
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DonorList;