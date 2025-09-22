import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Droplet } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import PopupModal from '../components/PopupModal';
import { registerDonor } from '../services/api'; // 1. IMPORT the API function

const DonorRegistration = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        bloodGroup: '',
        contactNumber: '',
        email: '',
        address: '',
        availability: 'available',
    });

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ type: 'success', title: '', message: '' });

    const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const genders = ['Male', 'Female', 'Other'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 2. UPDATED handleSubmit function to call the API
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 3. MAP frontend data to match the backend entity structure
        const donorDataForApi = {
            name: formData.fullName, // Map fullName to name
            age: formData.age,
            bloodGroup: formData.bloodGroup,
            phone: formData.contactNumber, // Map contactNumber to phone
            email: formData.email,
            address: formData.address,
        };
        // We are ignoring gender and availability for now, as the backend doesn't have fields for them yet.

        try {
            // 4. CALL the API to save the data
            await registerDonor(donorDataForApi);

            // On success, show the success modal
            setModalContent({
                type: 'success',
                title: 'Registration Successful!',
                message: 'Thank you for registering. Your details have been saved.'
            });
            setShowModal(true);

            // Reset form after successful submission
            setFormData({
                fullName: '',
                age: '',
                gender: '',
                bloodGroup: '',
                contactNumber: '',
                email: '',
                address: '',
                availability: 'available',
            });

        } catch (error) {
            console.error("Registration failed:", error);
            // On failure, show an error modal
            setModalContent({
                type: 'error',
                title: 'Registration Failed!',
                message: 'There was a problem submitting your registration. Please try again later.'
            });
            setShowModal(true);
        }
    };

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-8">
                    <Droplet className="h-16 w-16 text-red-600 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Become a Blood Donor</h1>
                    <p className="text-lg text-gray-600">
                        Your donation can save lives. Fill out the form below to register as a blood donor.
                    </p>
                </div>

                <Card>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                <User className="h-4 w-4 inline mr-2" />
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                required
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Age */}
                        <div>
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                                Age *
                            </label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                required
                                min="18"
                                max="65"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                placeholder="Your age"
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                                Gender *
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                required
                                value={formData.gender}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                            >
                                <option value="">Select gender</option>
                                {genders.map((gender) => (
                                    <option key={gender} value={gender}>
                                        {gender}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Blood Group */}
                        <div>
                            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-2">
                                <Droplet className="h-4 w-4 inline mr-2" />
                                Blood Group *
                            </label>
                            <select
                                id="bloodGroup"
                                name="bloodGroup"
                                required
                                value={formData.bloodGroup}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                            >
                                <option value="">Select blood group</option>
                                {bloodGroups.map((group) => (
                                    <option key={group} value={group}>
                                        {group}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                                <Phone className="h-4 w-4 inline mr-2" />
                                Contact Number *
                            </label>
                            <input
                                type="tel"
                                id="contactNumber"
                                name="contactNumber"
                                required
                                value={formData.contactNumber}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                placeholder="Your phone number"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                <Mail className="h-4 w-4 inline mr-2" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                <MapPin className="h-4 w-4 inline mr-2" />
                                Address *
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                required
                                rows="3"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                placeholder="Your complete address"
                            ></textarea>
                        </div>

                        {/* Availability */}
                        <div>
                            <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                                Availability Status
                            </label>
                            <select
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                            >
                                <option value="available">Available for donation</option>
                                <option value="not-available">Currently not available</option>
                                <option value="emergency-only">Emergency cases only</option>
                            </select>
                        </div>

                        {/* Notes */}
                        <div className="bg-red-50 p-4 rounded-md">
                            <h3 className="font-medium text-red-800 mb-2">Important Notes:</h3>
                            <ul className="text-sm text-red-700 space-y-1 list-disc list-inside">
                                <li>You must be between 18-65 years old</li>
                                <li>Minimum 56 days gap between donations</li>
                                <li>You should weigh at least 50kg (110 lbs)</li>
                                <li>Avoid alcohol 24 hours before donation</li>
                            </ul>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Register as Donor
                        </Button>
                    </form>
                </Card>
            </div>

            <PopupModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                type={modalContent.type}
                title={modalContent.title}
                message={modalContent.message}
            />
        </div>
    );
};

export default DonorRegistration;