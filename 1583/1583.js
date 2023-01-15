const see = document.querySelector('.fa-eye');
const unsee = document.querySelector('.fa-eye-slash');
const passwordInput = document.querySelector('.password__input');
const togglePassword = document.querySelector('.password__toggle');
togglePassword.addEventListener('click', e => {
	e.preventDefault();
	see.classList.toggle('active');
	unsee.classList.toggle('active');
	if (see.classList.contains('active')) {
		passwordInput.type = 'text';
	} else {
		passwordInput.type = 'password';
	}
});
