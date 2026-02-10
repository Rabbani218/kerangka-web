/* ============================================
   KERANGKA WEB - FORM UTILITIES
   Version: 2.0
   Form Validation & Helper Functions
   ============================================ */

const FormUtils = {
    /* ============================================
       VALIDATION FUNCTIONS
       ============================================ */
    
    // Validate email format
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    },
    
    // Validate phone number (Indonesian format)
    validatePhone: function(phone) {
        const re = /^(\+62|62|0)[0-9]{9,12}$/;
        return re.test(String(phone).replace(/\s/g, ''));
    },
    
    // Validate required field
    validateRequired: function(value) {
        return value !== null && value !== undefined && String(value).trim() !== '';
    },
    
    // Validate minimum length
    validateMinLength: function(value, minLength) {
        return String(value).length >= minLength;
    },
    
    // Validate maximum length
    validateMaxLength: function(value, maxLength) {
        return String(value).length <= maxLength;
    },
    
    // Validate number range
    validateNumberRange: function(value, min, max) {
        const num = Number(value);
        return !isNaN(num) && num >= min && num <= max;
    },
    
    /* ============================================
       FIELD VALIDATION WITH ERROR DISPLAY
       ============================================ */
    
    // Validate single field and show error
    validateField: function(fieldElement, validationType, options = {}) {
        const value = fieldElement.value;
        let isValid = true;
        let errorMessage = '';
        
        switch(validationType) {
            case 'required':
                isValid = this.validateRequired(value);
                errorMessage = options.message || 'Field ini wajib diisi';
                break;
                
            case 'email':
                isValid = this.validateEmail(value);
                errorMessage = options.message || 'Format email tidak valid';
                break;
                
            case 'phone':
                isValid = this.validatePhone(value);
                errorMessage = options.message || 'Format nomor telepon tidak valid';
                break;
                
            case 'minLength':
                isValid = this.validateMinLength(value, options.minLength || 3);
                errorMessage = options.message || `Minimal ${options.minLength || 3} karakter`;
                break;
                
            case 'maxLength':
                isValid = this.validateMaxLength(value, options.maxLength || 100);
                errorMessage = options.message || `Maksimal ${options.maxLength || 100} karakter`;
                break;
                
            case 'numberRange':
                isValid = this.validateNumberRange(value, options.min || 0, options.max || 100);
                errorMessage = options.message || `Nilai harus antara ${options.min || 0} dan ${options.max || 100}`;
                break;
        }
        
        // Show/hide error
        this.showFieldError(fieldElement, isValid ? '' : errorMessage);
        
        return isValid;
    },
    
    // Show error message for field
    showFieldError: function(fieldElement, message) {
        // Remove existing error
        const existingError = fieldElement.parentElement.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add/remove error class
        if (message) {
            fieldElement.classList.add('field-invalid');
            
            // Create error element
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.style.cssText = `
                color: var(--error-color);
                font-size: var(--font-xs);
                margin-top: var(--spacing-xs);
                display: block;
            `;
            errorElement.textContent = message;
            
            // Insert after field
            fieldElement.parentElement.appendChild(errorElement);
        } else {
            fieldElement.classList.remove('field-invalid');
        }
    },
    
    /* ============================================
       FORM SUBMISSION
       ============================================ */
    
    // Validate entire form
    validateForm: function(formElement, rules) {
        let isValid = true;
        
        for (const fieldName in rules) {
            const field = formElement.querySelector(`[name="${fieldName}"]`);
            if (field) {
                const fieldRules = rules[fieldName];
                for (const rule of fieldRules) {
                    if (!this.validateField(field, rule.type, rule.options)) {
                        isValid = false;
                    }
                }
            }
        }
        
        return isValid;
    },
    
    // Get form data as object
    getFormData: function(formElement) {
        const formData = new FormData(formElement);
        const data = {};
        
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        return data;
    },
    
    // Clear form
    clearForm: function(formElement) {
        formElement.reset();
        
        // Remove all error messages
        const errors = formElement.querySelectorAll('.field-error');
        errors.forEach(error => error.remove());
        
        // Remove invalid classes
        const invalidFields = formElement.querySelectorAll('.field-invalid');
        invalidFields.forEach(field => field.classList.remove('field-invalid'));
    },
    
    /* ============================================
       INPUT FORMATTING
       ============================================ */
    
    // Format phone number as user types
    formatPhoneInput: function(inputElement) {
        inputElement.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Format: 0812-3456-7890
            if (value.length > 4 && value.length <= 8) {
                value = value.slice(0, 4) + '-' + value.slice(4);
            } else if (value.length > 8) {
                value = value.slice(0, 4) + '-' + value.slice(4, 8) + '-' + value.slice(8, 12);
            }
            
            e.target.value = value;
        });
    },
    
    // Allow only numbers
    allowOnlyNumbers: function(inputElement) {
        inputElement.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    },
    
    // Capitalize first letter
    capitalizeInput: function(inputElement) {
        inputElement.addEventListener('input', function(e) {
            const words = e.target.value.split(' ');
            const capitalized = words.map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });
            e.target.value = capitalized.join(' ');
        });
    },
    
    /* ============================================
       LOCAL STORAGE HELPERS
       ============================================ */
    
    // Save form data to localStorage
    saveFormData: function(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch(e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    },
    
    // Load form data from localStorage
    loadFormData: function(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch(e) {
            console.error('Error loading from localStorage:', e);
            return null;
        }
    },
    
    // Clear form data from localStorage
    clearFormData: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch(e) {
            console.error('Error clearing localStorage:', e);
            return false;
        }
    },
    
    /* ============================================
       REAL-TIME VALIDATION
       ============================================ */
    
    // Enable real-time validation on field
    enableRealtimeValidation: function(fieldElement, validationType, options = {}) {
        fieldElement.addEventListener('blur', () => {
            this.validateField(fieldElement, validationType, options);
        });
        
        fieldElement.addEventListener('input', () => {
            // Clear error on input
            if (fieldElement.classList.contains('field-invalid')) {
                this.showFieldError(fieldElement, '');
            }
        });
    }
};

/* ============================================
   AUTO-INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Auto-format phone inputs
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        FormUtils.formatPhoneInput(input);
    });
    
    // Auto-format number inputs
    const numberInputs = document.querySelectorAll('input[data-type="number"]');
    numberInputs.forEach(input => {
        FormUtils.allowOnlyNumbers(input);
    });
    
    // Auto-capitalize name inputs
    const nameInputs = document.querySelectorAll('input[data-capitalize="true"]');
    nameInputs.forEach(input => {
        FormUtils.capitalizeInput(input);
    });
});

/* ============================================
   EXPORT
   ============================================ */
window.FormUtils = FormUtils;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormUtils;
}
