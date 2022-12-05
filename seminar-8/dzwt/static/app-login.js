const validateEmail = () => {
    let email = document.querySelector('#email-input').value
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

const getFormData = () => {
    const formElement = document.getElementById('form2');
    const formData = new FormData(formElement);
    return {
        'email': formData.get('email'),
        'password': formData.get('password')
    }
}

const sendForm = () => {
    let emailElement = document.querySelector('#error-email')
    if(!validateEmail()){
        emailElement.classList.add('display-block')
        return
    }
    emailElement.classList.remove('display-block')

    let data = getFormData()

    fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
    }).then((response) => {
        if (response.status === 200) {
            alert("Авторизация успешно выполнена")
        } else if (response.status === 222) {
            alert("Такого пользователя не существует")
        } else {
            alert("Возникли ошибки при авторизации")
        }
    })
}