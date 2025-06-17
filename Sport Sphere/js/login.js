document.addEventListener('DOMContentLoaded', () => {
  const roleParam = new URLSearchParams(window.location.search).get('role');

  // Dynamically create a hidden input for role if it doesn't exist
  let roleInput = document.getElementById('role');
  if (!roleInput) {
    roleInput = document.createElement('input');
    roleInput.type = 'hidden';
    roleInput.id = 'role';
    roleInput.name = 'role';
    document.querySelector('form').appendChild(roleInput);
  }

  // Set the role value from URL
  if (roleParam) {
    roleInput.value = roleParam;
  }

  // Attach the event to the updated form
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const role = document.getElementById('role').value;

    if (!role) {
      alert('No user role detected. Please go back and select a role.');
      return;
    }

    // Redirect based on role
    switch (role) {
      case 'athlete':
        window.location.href = 'athlete/athlete.html';
        break;
      case 'coach':
        window.location.href = 'coach/coach.html';
        break;
      case 'vendor':
        window.location.href = 'vendor/vendor.html';
        break;
      case 'admin':
        window.location.href = 'admin/admin.html';
        break;
      default:
        alert('Invalid role.');
    }
  });
});
