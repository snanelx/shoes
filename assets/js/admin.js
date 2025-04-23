const form = document.querySelector('#form-id');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.elements.login.value == 'admin' && form.elements.pass.value == 12345) {
    let admin = document.insertAdjacentHTML("<div style='admin'>Админка</div>");
    admin.innerHTML = 'Админка';
    document.querySelector('#form-id').after(admin); 
  } 
  else {
    alert('erwf')
    document.querySelector('.admin').style.display = 'none'
  }
});