document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  // Add confirm password field if it's not present in new HTML
  let confirmPasswordInput = document.getElementById('confirmPassword');
  if (!confirmPasswordInput) {
    const label = document.createElement('label');
    label.setAttribute('for', 'confirmPassword');
    label.textContent = 'Confirm Password';

    confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.id = 'confirmPassword';
    confirmPasswordInput.placeholder = 'Confirm your password';
    confirmPasswordInput.required = true;

    // Insert confirm password field before the submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    form.insertBefore(label, submitBtn);
    form.insertBefore(confirmPasswordInput, submitBtn);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;

    // Basic validations
    if (!name || !email || !password || !confirmPassword || !role) {
      alert('Please fill out all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Simulate registration success
    alert(`Registration successful as ${role}! You can now log in.`);
    window.location.href = "login.html";
  });
});
