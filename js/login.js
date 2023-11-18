let email_login = document.getElementById('email_login')
let password_login = document.getElementById('password_login')
let send_login = document.getElementById('send_login')
let data_email = localStorage.getItem('email')
let data_password = localStorage.getItem('password')

send_login.addEventListener('click', supmitlogin)

function supmitlogin(e) {
    e.preventDefault();
   

    if(data_email===email_login.value && data_password===password_login.value){
     
setTimeout(() => {
    window.location='index.html'
}, 1000);
}
}
