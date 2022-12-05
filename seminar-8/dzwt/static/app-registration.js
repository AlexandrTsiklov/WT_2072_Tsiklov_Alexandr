const validateEmail = () => {
    let email = document.querySelector('#email-input').value
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const validatePasswords = () => {
    let password1 = document.querySelector('#password1-input').value
    let password2 = document.querySelector('#password2-input').value
    return (password1 === password2) && password1 != ''
}

const validateNameAndSurname = () => {
    let name = document.querySelector('#name-input').value
    let surname = document.querySelector('#surname-input').value
    return name !== '' && surname !== ''
}

const getFormData = () => {
    const formElement = document.getElementById('form1');
    const formData = new FormData(formElement);
    return {
        'name': formData.get('name'),
        'surname': formData.get('surname'),
        'email': formData.get('email'),
        'password': formData.get('password')
    }
}

const sendForm = () => {
    if (!validateNameAndSurname()) {
        alert("Empty name or surname!")
        return
    }

    let emailElement = document.querySelector('#error-email')
    if (!validateEmail()) {
        emailElement.classList.add('display-block')
        return
    }
    emailElement.classList.remove('display-block')

    let passwordElement1 = document.querySelector('#error-password1')
    let passwordElement2 = document.querySelector('#error-password2')

    if (!validatePasswords()) {
        passwordElement1.classList.add('display-block')
        passwordElement2.classList.add('display-block')
        return
    }

    passwordElement1.classList.remove('display-block')
    passwordElement2.classList.remove('display-block')

    let data = getFormData()

    fetch('http://127.0.0.1:8000/registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
    }).then((response) => {
        if (response.status === 200) {
            alert("Пользователь успешно создан")
        } else if (response.status === 222) {
            alert("Такой пользователь уже существует")
        } else {
            alert("Возникли ошибки при сохранении")
        }
    })
}