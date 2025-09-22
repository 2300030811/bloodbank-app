// Placeholder file for form validation utilities
// This will contain validation rules and helper functions

export 

export 

export 

export class ValidationService {
  static validateField(value, rule) | null {
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
  static readonly DONOR_VALIDATION_RULES = {
    fullName: { required, min, max, message: 'Full name is required' },
    age: { required, min, max, message: 'Age must be between 18 and 65' },
    bloodGroup: { required, message: 'Blood group is required' },
    email: { 
      required, 
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
      message: 'Valid email is required' 
    },
    contactNumber: { 
      required, 
      pattern: /^[\d\-\+\(\)\s]{10,}$/, 
      message: 'Valid phone number is required' 
    }
  };

  static readonly BLOOD_REQUEST_VALIDATION_RULES = {
    bloodGroup: { required, message: 'Blood group is required' },
    units: { required, min, message: 'At least 1 unit is required' },
    hospitalName: { required, min, message: 'Hospital name is required' },
    contactPerson: { required, min, message: 'Contact person is required' },
    reason: { required, min, message: 'Reason must be at least 10 characters' }
  };
}