import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Activity, Award } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Active Donors', value: '15,847' },
    { icon: Heart, label: 'Lives Saved', value: '28,392' },
    { icon: Activity, label: 'Blood Units', value: '3,247' },
    { icon: Award, label: 'Years of Service', value: '12' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Save Lives with <span className="text-red-200">Blood Donation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Join our mission to ensure safe blood is available for those in critical need.
              Every donation can save up to three lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donor-registration">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Donate Blood Now
                </Button>
              </Link>
              <Link to="/request-blood">
                <Button size="lg" className="w-full sm:w-auto bg-red-800 hover:bg-red-900">
                  Request Blood
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center transition-transform duration-200 hover:scale-[1.02]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Blood Bank?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide a secure, efficient, and reliable blood banking system that connects donors with recipients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Safe & Secure" subtitle="Advanced safety protocols">
              <p className="text-gray-600">
                All blood donations undergo rigorous testing and screening to ensure the highest safety standards.
              </p>
            </Card>

            <Card title="24/7 Availability" subtitle="Round-the-clock service">
              <p className="text-gray-600">
                Emergency blood requests are handled immediately with our 24/7 emergency response system.
              </p>
            </Card>

            <Card title="Easy Management" subtitle="User-friendly platform">
              <p className="text-gray-600">
                Our intuitive platform makes it easy for donors to register and track requests seamlessly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-red-100">
            Join thousands of donors who have already made a difference in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donor-registration">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Become a Donor
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" className="w-full sm:w-auto bg-red-800 hover:bg-red-900">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
