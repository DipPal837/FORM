document.getElementById('userForm').addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const dob = document.getElementById('dob').value.trim();

  if (!name || !phone || !email || !dob) {
    e.preventDefault(); // Stop submission if any field is empty
    document.getElementById('output').textContent = 'Please fill all fields.';
  } else {
    document.getElementById('output').textContent = 'Submitting...';
  }
});