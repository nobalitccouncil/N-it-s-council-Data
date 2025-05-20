const API = 'https://bb-k19r.onrender.com/api/auth';
document.getElementById('authForm').addEventListener('submit', async e => {
    e.preventDefault();
    const role = document.getElementById('role').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const res = await fetch(`${API}/login`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ role, phone, password })
    });
    const data = await res.json();
    document.getElementById('message').innerText = data.message || 'Logged In';
});