"use strict"

let login = prompt('Enter your login')
if (login === 'admin'){
    let password = prompt('Enter the password')
    if (password === 'Я главный'){
        alert('Здравствуйте!')}
    else if (password === null || password === ''){
        alert('Отменено')}
    else{
        alert('Неверный пароль')}
} else if (login === null || login === ''){
    alert('Отменено')
} else alert ('Я вас не знаю')
