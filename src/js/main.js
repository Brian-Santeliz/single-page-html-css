const year = document.getElementById('year');

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear();
  year.innerText = currentYear;
});
