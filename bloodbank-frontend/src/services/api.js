import axios from 'axios';

// ✅ Use .env variable (from bloodbank-frontend/.env) or fallback to 9092
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9092/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Attach token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * =================================================================
 * Authentication Functions
 * =================================================================
 */
export const registerHospital = (registerData) => api.post('/auth/register', registerData);
export const login = (credentials) => api.post('/auth/login', credentials);

/**
 * =================================================================
 * Donor Functions
 * =================================================================
 */
export const registerDonor = (donorData) => api.post('/donors', donorData);
export const getAllDonors = () => api.get('/donors');
export const deleteDonor = (id) => api.delete(`/donors/${id}`);

/**
 * =================================================================
 * Blood Request Functions
 * =================================================================
 */
export const submitBloodRequest = (requestData) => api.post('/requests', requestData);

export default api;
