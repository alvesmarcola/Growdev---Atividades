const formLogin = document.getElementById('form-login');

const emailInput = document.getElementById('email-login');
const passwordInput = document.getElementById('password-login');

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  }

  if (emailInput.value && (passwordInput.value).length >= 6) {
    login(data);
  }
})

async function login(data) {
  try {
    const response = await api.post('/users/login', data)

    if (response.status === 200) {
      const userData = response.data

      localStorage.setItem('userId', userData.userId)
      location.href = "listar-recados.html"
    }
  } catch (error) {
    setAlert("Falha de login, verifique suas credências!", 'danger');
  }
}

// function setError(input, message) {
//   const formControl = input.parentElement
//   const small = formControl.querySelector('small')

//   small.textContent = message
//   formControl.classList.remove('success')
//   formControl.classList.add('error')
// }

// function setSuccess(input) {
//   const formControl = input.parentElement

//   formControl.classList.remove('error')
//   formControl.classList.add('success')
// }
