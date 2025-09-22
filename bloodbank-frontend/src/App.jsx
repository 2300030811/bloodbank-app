import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonorRegistration from './pages/DonorRegistration';
import DonorList from './pages/DonorList';
import HospitalLogin from './pages/HospitalLogin';
import RegisterHospital from './pages/RegisterHospital';
import Inventory from './pages/Inventory';
import RequestBlood from './pages/RequestBlood';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donor-registration" element={<DonorRegistration />} />
            <Route path="/donors" element={<DonorList />} />
            <Route path="/request-blood" element={<RequestBlood />} />
            <Route path="/hospital-login" element={<HospitalLogin />} />
            <Route path="/register-hospital" element={<RegisterHospital />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;