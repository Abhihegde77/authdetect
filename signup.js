document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const googleSigninBtn = document.getElementById('google-signin-btn');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstname, lastname, email, phone, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Sign up successful!');
                window.location.href = '/signin.html'; // Redirect to sign in page
            } else {
                alert(`Sign up failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });

    // Google Sign-In
    googleSigninBtn.addEventListener('click', () => {
        // Implement Google Sign-In logic here
        alert('Google Sign-In functionality to be implemented');
    });
});