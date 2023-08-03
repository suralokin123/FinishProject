const form = document.querySelector('.registration');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const repassword = document.querySelector('.repassword');

form.addEventListener('submit', (e) => {
	if (email.value == '' || email.value.length < 5) {
		e.preventDefault();
		email.style.border = '2px solid red';
	} else {
		email.style.border = '2px solid green';
	}

	if (password.value == '' || password.value.length < 5) {
		e.preventDefault();
		password.style.border = '2px solid red';
	} else {
		password.style.border = '2px solid green';
	}

	if (repassword.value === password.value) {
		repassword.style.border = '2px solid green';
	} else {
		e.preventDefault();
		repassword.style.border = '2px solid red';
	}
});
