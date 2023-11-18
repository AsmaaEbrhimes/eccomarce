
// let feature_list = document.querySelectorAll('.feature-list li')
let search_bar = document.querySelector('.search-bar')
let search_input = document.getElementById('search_input')
let selected_card = document.querySelector('.selected-card')
let card_one = document.querySelector('.card-one')
let signin = document.querySelector('.signin')
let list_login = document.querySelector('.list-login')
let list_card = document.querySelectorAll('.list-card li p')[0]
let close_account = document.querySelector('.close-account')
let list_account = document.querySelector('.list-account')
let content_search = document.getElementById('content_search')
let eye = document.querySelector('.eye')
let login_email = document.getElementById('login-email')
let login_password = document.getElementById('login-password')


document.getElementById('shopping-cart').addEventListener('click', () => {
    selected_card.classList.add('active')
})

function add_and_remove_login() {
    signin.addEventListener('click', () => {

        list_login.classList.add('active')
    })
    document.querySelector('.close-login').addEventListener('click', (e) => {
        e.stopPropagation();
        list_login.classList.remove('active')
    })
}
add_and_remove_login()


function remove_add_account() {
    list_card.addEventListener('click', () => {
        list_account.classList.add('active')
    })
    close_account.addEventListener('click', (event) => {
        event.stopPropagation();
        list_account.classList.remove('active')
    })
}
remove_add_account()

document.querySelector('.glass i').onclick = () => {
    search_bar.classList.add('active')
}

document.querySelector('.close_search').onclick = () => {
    search_bar.classList.remove('active')
}

eye.onclick = () => {
    if (eye.classList.contains("fa-eye-slash")) {
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        login_password.type = 'text';
    } else {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        login_password.type = 'password';
    }
}

function display_shopping() {
    let cartItems = JSON.parse(localStorage.getItem('product'));
    if (cartItems !== null) {
        let loop_shopp = cartItems.map((ele) => {
            return `<div>
                <img src="/${ele.img_src_1}" alt="" srcset="">
                <div class="icon">
                    <i onclick="deleate(${ele.id})" class="fa-solid fa-xmark icon"></i>
                </div>
                <span id="product-title"> ${ele.title}</span>
                <span id="product-salary">${ele.salary}</span>
                </div>
            `;
        }).join('');

        let header = `
            <h5>
                <span class="one-span">YOUR CART</span>
               
                <span class="two-span">ITEMS</span>
                <i class="fa-solid fa-xmark close"></i>
            </h5>
        `;

        selected_card.innerHTML = header + loop_shopp;
    }
    const length_cart = JSON.parse(localStorage.getItem('product'))
    document.getElementById('num').innerHTML = length_cart.length;
}
display_shopping();


document.querySelector('.selected-card h5 i').addEventListener('click', () => {
    event.stopPropagation();
    selected_card.classList.remove('active')
})
