document.addEventListener('DOMContentLoaded', () => {
    const switchButtons = document.querySelectorAll('.switch-form');
    const signinForm = document.querySelector('.form-box.sign-in');
    const signupForm = document.querySelector('.form-box.sign-up');
    const forms = document.querySelectorAll('form');

    // Switch between sign in and sign up forms
    switchButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const formToShow = button.getAttribute('data-form');
            
            if (formToShow === 'signin') {
                signinForm.classList.add('active');
                signupForm.classList.remove('active');
            } else {
                signupForm.classList.add('active');
                signinForm.classList.remove('active');
            }
        });
    });

    // Form submission handling
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Add loading state to button
            const button = form.querySelector('.submit-btn');
            const originalText = button.textContent;
            button.textContent = 'Loading...';
            button.style.opacity = '0.7';
            button.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Reset button state
                button.textContent = originalText;
                button.style.opacity = '1';
                button.disabled = false;

                // Clear form
                form.reset();
            }, 2000);
        });
    });

    // Input animation
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        // Handle autofill
        if (input.value) {
            input.parentElement.classList.add('active');
        }

        input.addEventListener('focus', () => {
            input.parentElement.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('active');
            }
        });
    });
});
