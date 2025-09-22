import React, { useState } from 'react';
import { AlertCircle, Building, Droplet, Mail, User, Phone, Info } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import PopupModal from '../components/PopupModal';
import { submitBloodRequest } from '../services/api'; // <-- 1. IMPORT THE API FUNCTION

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    units: '',
    urgencyLevel: 'medium',
    hospitalName: '',
    contactPerson: '',
    contactNumber: '',
    email: '',
    reason: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ type: 'success', title: '', message: '' });

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'emergency', label: 'Emergency' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // <-- 2. UPDATED handleSubmit FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 3. MAP the frontend data to match the backend entity
    const requestDataForApi = {
      bloodGroup: formData.bloodGroup,
      unitsRequired: formData.units, // Map 'units' to 'unitsRequired'
      urgencyLevel: urgencyLevels.find(l => l.value === formData.urgencyLevel)?.label || formData.urgencyLevel,
      hospitalName: formData.hospitalName,
      contactPerson: formData.contactPerson,
      contactNumber: formData.contactNumber,
      email: formData.email,
      reason: formData.reason,
    };

    try {
      // 4. CALL the API
      await submitBloodRequest(requestDataForApi);

      // On success, configure and show the success modal
      setModalContent({
        type: 'success',
        title: 'Request Submitted!',
        message: 'Your blood request has been submitted. Our team will contact you shortly.'
      });
      setShowModal(true);

      // Reset the form
      setFormData({
        bloodGroup: '', units: '', urgencyLevel: 'medium', hospitalName: '',
        contactPerson: '', contactNumber: '', email: '', reason: '',
      });
    } catch (error) {
      console.error("Failed to submit request:", error);
      // On failure, configure and show the error modal
      setModalContent({
        type: 'error',
        title: 'Submission Failed!',
        message: 'There was a problem submitting your request. Please try again.'
      });
      setShowModal(true);
    }
  };

  // Your beautiful JSX remains largely the same, only the `handleSubmit` is changed.
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <div className="text-center mb-8">
            <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Request Blood</h1>
            <p className="text-lg text-gray-600">
              Submit a blood request for your hospital or medical facility
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Blood Group */}
              <div>
                <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700 mb-2">
                  <Droplet className="h-4 w-4 inline mr-2" />
                  Blood Group Required *
                </label>
                <select id="bloodGroup" name="bloodGroup" required value={formData.bloodGroup} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="">Select blood group</option>
                  {bloodGroups.map((group) => ( <option key={group} value={group}>{group}</option>))}
                </select>
              </div>

              {/* Units */}
              <div>
                <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-2">
                  Units Required *
                </label>
                <input type="number" id="units" name="units" required min="1" value={formData.units} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Number of units" />
              </div>

              {/* Urgency Level */}
              <div className="md:col-span-2">
                <label htmlFor="urgencyLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level *
                </label>
                <select id="urgencyLevel" name="urgencyLevel" required value={formData.urgencyLevel} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                  {urgencyLevels.map((level) => ( <option key={level.value} value={level.value}>{level.label}</option>))}
                </select>
              </div>

              {/* Hospital Name */}
              <div className="md:col-span-2">
                <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="h-4 w-4 inline mr-2" />
                  Hospital/Facility Name *
                </label>
                <input type="text" id="hospitalName" name="hospitalName" required value={formData.hospitalName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Name of requesting hospital" />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Contact Person *
                </label>
                <input type="text" id="contactPerson" name="contactPerson" required value={formData.contactPerson} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Dr. John Smith" />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Contact Number *
                </label>
                <input type="tel" id="contactNumber" name="contactNumber" required value={formData.contactNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Phone number" />
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address *
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="hospital@example.com" />
              </div>

              {/* Reason */}
              <div className="md:col-span-2">
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  <Info className="h-4 w-4 inline mr-2" />
                  Reason for Request *
                </label>
                <textarea id="reason" name="reason" required rows={4} value={formData.reason} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Brief description of why blood is needed (surgery, emergency, etc.)" />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Blood Request
            </Button>
          </form>
        </Card>
      </div>

      {/* Modal */}
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

export default RequestBlood;