import React from 'react';
import { Heart, Users, Shield, Award, Target, Eye } from 'lucide-react';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Compassionate Care',
      description: 'Every life matters. We provide blood services with empathy and understanding.'
    },
    {
      icon: Award,
      title: 'Safety First',
      description: 'Rigorous testing and quality control ensure the highest safety standards.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building strong connections between donors and recipients in our community.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering exceptional blood banking services and support.'
    }
  ];

  const team = [
    { name: 'Dr. Sarah Johnson', role: 'Medical Director', experience: '15+ years' },
    { name: 'Michael Chen', role: 'Operations Manager', experience: '12+ years' },
    { name: 'Dr. Emily Rodriguez', role: 'Quality Assurance', experience: '10+ years' },
    { name: 'David Thompson', role: 'Donor Relations', experience: '8+ years' }
  ];

  const achievements = [
    { number: '500K+', label: 'Lives Touched' },
    { number: '25K+', label: 'Active Donors' },
    { number: '150+', label: 'Partner Hospitals' },
    { number: '99.9%', label: 'Safety Record' }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Heart className="h-20 w-20 text-red-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About BloodBank System</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been dedicated to connecting generous donors with those in critical need, 
            ensuring that safe, quality blood products are available when lives depend on it.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To save lives by connecting blood donors with patients in need through innovative technology, 
              compassionate service, and unwavering commitment to safety and quality.
            </p>
          </div>

          <div className="text-center">
            <Eye className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To create a world where safe blood is always available for those who need it. We envision 
              a robust network of donors and healthcare facilities working together seamlessly to eliminate 
              blood shortages and save more lives.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <div className="text-center">
                  <value.icon className="h-10 w-10 text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-red-600 text-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-red-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience} experience</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology & Innovation</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Our blood banking system leverages cutting-edge technology to streamline operations, 
            improve safety protocols, and enhance the donor experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
              <p className="text-gray-600 text-sm">Monitor blood inventory and expiration dates in real-time.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-sm">HIPAA-compliant system ensuring data privacy and security.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 text-sm">Access our services from any device, anywhere, anytime.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
