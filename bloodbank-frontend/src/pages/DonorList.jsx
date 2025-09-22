import React, { useState, useEffect } from 'react';
import { getAllDonors, deleteDonor } from '../services/api';

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch donors on mount
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await getAllDonors();

        // Auto-detect response shape
        const data = Array.isArray(response.data)
          ? response.data
          : response.data?.donors || [];

        setDonors(data);
      } catch (err) {
        if (err.response) {
          console.error("Error Response:", err.response);
        } else if (err.request) {
          console.error("No Response from backend:", err.request);
        } else {
          console.error("Error:", err.message);
        }
        setError('Failed to fetch donors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchDonors();
  }, []);

  // Delete donor handler
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

  if (loading) {
    return <div className="text-center p-10">Loading donors...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Registered Donors
      </h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{donor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.age}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.bloodGroup}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donor.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(donor.id)}
                    className="text-red-600 hover:text-red-900 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonorList;
