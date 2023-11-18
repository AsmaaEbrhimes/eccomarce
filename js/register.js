

let email_user = document.getElementById('email_user')
let username = document.getElementById('username')
let password_user = document.getElementById('password_user')
let last_name = document.getElementById('last_name')
let supmit_register = document.getElementById('send')
let eyes=document.querySelector('.eyes')

eyes.onclick=()=>{
if(eyes.classList.contains('fa-eye-slash')){
 eyes.classList.remove('fa-eye-slash')
 eyes.classList.add('fa-eye')
 password_user.type = 'text';
}else{
  eyes.classList.remove('fa-eye')
  eyes.classList.add('fa-eye-slash')
  password_user.type = 'password';
}
}

document.getElementById('male').onclick = () => {
  if (male.dataset.male === 'false') {
    male.dataset.male = 'true';
    male.checked = true;
  } else {
    male.dataset.male = 'false';
    male.checked = false;
  }
}

document.getElementById('female').onclick = () => {
  if (female.dataset.female === 'false') {
    female.dataset.female = 'true';
    female.checked = true;
  } else {
    female.dataset.female = 'false';
    female.checked = false;
  }
}

supmit_register.addEventListener('click', supmitdataregister)


function supmitdataregister(e) {
  e.preventDefault();
  let reg_email = /\w+@gmail\.\w+/;
  let test_email = reg_email.test(email_user.value);

  if (email_user.value === '' || username.value === '' || last_name.value === '' || password_user.value === '') {
    return false;
  }
  else if (test_email === false) {
    email_user.style.border = '1px solid red';
  }
  else {
    setdataregister();
    email_user.style.border = '1px solid green';

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
      method: "POST",
      body: JSON.stringify({
          to: email_user.value,
          subject: "Trying SendMail",
          message: "لقد تم تسجيل دخولك في الموقع",
         
      })
  })
  .then(res => res.json())
  .then(data => console.log(data))
  window.location='index.html'
  }
}

function setdataregister() {
  localStorage.setItem('email', email_user.value)
  localStorage.setItem('username', username.value)
  localStorage.setItem('last_name', last_name.value)
  localStorage.setItem('password', password_user.value)


}
