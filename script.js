document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const loader = document.getElementById('loader');
    const btnText = submitBtn.querySelector('span');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Change icon based on state
        togglePassword.textContent = type === 'password' ? '👁️' : '🕶️';
        
        // Add a small animation effect
        togglePassword.classList.add('active');
        setTimeout(() => togglePassword.classList.remove('active'), 200);
    });

    // Form submission handling
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.textContent = 'Signing In...';
        loader.style.display = 'block';

        // Simulate API call
        try {
            console.log('Attempting login with:', { email });
            
            // Artificial delay to show the beautiful loader
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock success
            console.log('Login successful');
            btnText.textContent = 'Success!';
            loader.style.display = 'none';
            submitBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
            
            // Reset after a moment
            setTimeout(() => {
                submitBtn.disabled = false;
                btnText.textContent = 'Sign In';
                submitBtn.style.background = '';
                loginForm.reset();
            }, 3000);

        } catch (error) {
            console.error('Login failed:', error);
            alert('An error occurred. Please try again.');
            submitBtn.disabled = false;
            btnText.textContent = 'Sign In';
            loader.style.display = 'none';
        }
    });

    // Input focus animations
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
            input.parentElement.style.transition = 'transform 0.3s ease';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
        });
    });
});
