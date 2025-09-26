import axios from 'axios';

// Helper function to read a cookie by name.
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:9092/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // Attach the Auth token for logged-in users
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // MODIFIED: Attach the CSRF token with the correct names for Spring Boot
    const csrfToken = getCookie('XSRF-TOKEN');
    if (csrfToken) {
      config.headers['X-XSRF-TOKEN'] = csrfToken;
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