
let userName = prompt("Введіть імя")
let userEmail = prompt("Введіть email")
let userPasword = prompt("Введіть пароль")

if ( userName.length > 3 && userEmail === "@."  && userPasword.length > 6  ){alert("Все чудово") } else {alert("Помилка")}
console.log(userName ,userEmail , userPasword)
