import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DonorRegistration from './pages/DonorRegistration';
import DonorList from './pages/DonorList';
import Inventory from './pages/Inventory';
import RequestBlood from './pages/RequestBlood';
import Contact from './pages/Contact';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';

function ProtectedRoute({ element, allowRoles }) {
  const { isAuthenticated, role } = useAuth();
  if (!isAuthenticated) return <Navigate to="/admin-login" replace />;
  if (allowRoles && !allowRoles.includes(role)) return <Navigate to="/" replace />;
  return element;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donor-registration" element={<DonorRegistration />} />
            <Route path="/donors" element={<ProtectedRoute element={<DonorList />} allowRoles={["ROLE_ADMIN"]} />} />
            <Route path="/request-blood" element={<RequestBlood />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/inventory" element={<ProtectedRoute element={<Inventory />} allowRoles={["ROLE_ADMIN"]} />} />
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