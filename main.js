const STUDENT_API = 'https://bb-k19r.onrender.com/api/students';
const EXPENSE_API = 'https://bb-k19r.onrender.com/api/finance';
async function loadStudents() {
  const res = await fetch(STUDENT_API, { headers:{'Authorization':'Bearer '+localStorage.getItem('token')}});
  const students = await res.json();
  document.getElementById('studentSection').innerHTML = JSON.stringify(students, null, 2);
}
loadStudents();