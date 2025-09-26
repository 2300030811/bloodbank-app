// Form validation utilities
// This contains validation rules and helper functions

export class ValidationService {
  static validateField(value, rule) {
    if (rule.required && (!value || value.toString().trim() === '')) {
      return rule.message || 'This field is required';
    }

    if (rule.min && value && value.toString().length < rule.min) {
      return rule.message || `Minimum length is ${rule.min}`;
    }

    if (rule.max && value && value.toString().length > rule.max) {
      return rule.message || `Maximum length is ${rule.max}`;
    }

    if (rule.pattern && value && !rule.pattern.test(value.toString())) {
      return rule.message || 'Invalid format';
    }

    return null;
  }

  static validateForm(data, rules) {
    const errors = {};

    Object.keys(rules).forEach(field => {
      const error = this.validateField(data[field], rules[field]);
      if (error) {
        errors[field] = error;
      }
    });

    return errors;
  }

  // Common validation rules
  static DONOR_VALIDATION_RULES = {
    fullName: { required: true, min: 2, max: 50, message: 'Full name is required' },
    age: { required: true, min: 18, max: 65, message: 'Age must be between 18 and 65' },
    bloodGroup: { required: true, message: 'Blood group is required' },
    email: { 
      required: true, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: 'Valid email is required' 
    },
    contactNumber: { 
      required: true, 
      pattern: /^[\d\-\+\(\)\s]{10,}$/, 
      message: 'Valid phone number is required' 
    }
  };

  static BLOOD_REQUEST_VALIDATION_RULES = {
    bloodGroup: { required: true, message: 'Blood group is required' },
    units: { required: true, min: 1, message: 'At least 1 unit is required' },
    hospitalName: { required: true, min: 2, message: 'Hospital name is required' },
    contactPerson: { required: true, min: 2, message: 'Contact person is required' },
    reason: { required: true, min: 10, message: 'Reason must be at least 10 characters' }
  };
}