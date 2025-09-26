import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import PopupModal from '../components/PopupModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const emergencyNumbers = [
    { title: 'Emergency Blood Request', number: '+91-1800-11-2477', available: '24/7' },
    { title: 'Donor Support', number: '+91-1800-572-6545', available: '24/7' },
    { title: 'Coordination Desk', number: '+91-804-712-3456', available: '24/7' },
    { title: 'General Inquiries', number: '+91-806-123-4567', available: '9 AM - 7 PM' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <MessageCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any questions, support, or emergency blood requests. 
            We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card title="Send us a Message">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="e.g. +91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="donor">Donor Support</option>
                  <option value="technical">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="emergency">Emergency (Call instead)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Emergency Numbers */}
            <Card title="Emergency Helplines" subtitle="Available 24/7 for urgent requests">
              <div className="space-y-4">
                {emergencyNumbers.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-red-600 font-semibold">{item.number}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.available}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Details */}
            <Card title="Get in Touch">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Main Office</p>
                    <p className="text-gray-600">+91 80471 23456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email Support</p>
                    <p className="text-gray-600">support@bloodbank.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">
                      12 MG Road<br />
                      Bengaluru, Karnataka 560001
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">
                      Mon - Sat: 9 AM - 7 PM<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Response */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">Quick Response Guarantee</h3>
              <p className="text-sm text-green-700">
                We respond to all emergency blood requests within 2 hours and general inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <PopupModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type="success"
        title="Message Sent!"
        message="Thank you for contacting us. We'll get back to you within 24 hours."
      />
    </div>
  );
};

export default Contact;
