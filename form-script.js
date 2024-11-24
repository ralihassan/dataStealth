document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const nameInput = document.querySelector('#name');

    // Function to show guidelines
    function showGuideline(input, isValid = true) {
        const messageDiv = input.parentNode.querySelector('div[id$="-message"]');
        if (messageDiv) {
            messageDiv.className = isValid ? 'guideline' : 'invalid-guideline';
            messageDiv.classList.remove('hidden');
        }
    }

    // Function to remove guidelines
    function removeGuideline(input) {
        const messageDiv = input.parentNode.querySelector('div[id$="-message"]');
        if (messageDiv) {
            messageDiv.classList.add('hidden');
        }
    }

    // Function to validate email
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showGuideline(emailInput, false);
            return false;
        }
        removeGuideline(emailInput);
        return true;
    }

    // Function to validate password
    function validatePassword() {
        const password = passwordInput.value;
        if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
            showGuideline(passwordInput, false);
            return false;
        }
        removeGuideline(passwordInput);
        return true;
    }

    emailInput.addEventListener('input', function() {
        validateEmail();
    });

    passwordInput.addEventListener('input', function() {
        validatePassword();
    });

    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() === '') {
            showGuideline(nameInput, false);
        } else {
            removeGuideline(nameInput);
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valid = true;

        if (nameInput.value.trim() === '') {
            showGuideline(nameInput, false);
            valid = false;
        }

        if (!validateEmail()) {
            showGuideline(emailInput, false);
            valid = false;
        }

        if (!validatePassword()) {
            showGuideline(passwordInput, false);
            valid = false;
        }

        if (valid) {
            const formData = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            };

            // Mock fetch function
            function mockFetch(url, options) {
                return new Promise((resolve, reject) => {
                    // Simulate a successful response
                    const mockResponse = {
                        json: () => Promise.resolve({ message: 'Mock success response' })
                    };
                    
                    // Simulate a delay
                    setTimeout(() => resolve(mockResponse), 500);
                });
            }

            // Use the mockFetch function instead of fetch
            mockFetch('https://your-backend-url.com/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                window.parent.postMessage({ formData, status: 'success', message: 'User data submitted successfully' }, '*');
                // Clear the form inputs
                nameInput.value = '';
                emailInput.value = '';
                passwordInput.value = '';
            })
            .catch((error) => {
                window.parent.postMessage({ formData, status: 'error', message: 'User submission failed' }, '*');
            });

            // fetch('https://localhost:8080/user/create', {
            //     method: 'POST', // Use 'GET' to retrieve data
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => {
            //     if (!response.ok) {
            //         throw new Error('Network response was not ok');
            //     }
            //     return response.json();
            // })
            // .then(data => {
            //     window.parent.postMessage({ formData, status: 'success', message: 'User data submitted successfully' }, '*');
            //     nameInput.value = '';
            //     emailInput.value = '';
            //     passwordInput.value = '';
            // })
            // .catch(error => {
            //     window.parent.postMessage({ formData, status: 'error', message: 'User submission failed' }, '*');
            // });

        }
    });
});