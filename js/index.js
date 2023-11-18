
let image_slider = Array.from(document.querySelectorAll('.slider-content .image-slider img'))
let slider_text = document.querySelectorAll('.slider-text')
let slider_icons = document.querySelector('.slider-icons')
let btn_pref = document.querySelector('.slider-icons #pref')
let btn_next = document.querySelector('.slider-icons #next')
let feature_list = document.querySelectorAll('.feature-list li')
const length_img = image_slider.length - 1;
let current_slide = 0
let search_bar = document.querySelector('.search-bar')
let close_search = document.querySelector('.close_search')
let search_input = document.getElementById('search_input')
let content_search = document.getElementById('content_search')
let glass = document.querySelector('.glass i')
let shopping_cart = document.getElementById('shopping-cart')
let selected_card = document.querySelector('.selected-card')
let card_one = document.querySelector('.card-one')
let list_card = document.querySelectorAll('.list-card li p')[0]
let close_account = document.querySelector('.close-account')
let list_account = document.querySelector('.list-account')
let contact_us = document.getElementById('contact-us')
let account_name = document.getElementById('name-user')
let logout_account = document.getElementById('logout-user')
let signin = document.querySelector('.signin')
let list_login = document.querySelector('.list-login')
close_login = document.querySelector('.close-login')
let eye = document.querySelector('.eye')
let login_email = document.getElementById('login-email')
let login_password = document.getElementById('login-password')


shopping_cart.addEventListener('click', ()=>{
    selected_card.classList.add('active')
})



feature_list.forEach(item => item.addEventListener('click', filterproduct));



glass.onclick = () => {
    search_bar.classList.add('active')
}

close_search.onclick = () => {
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

function add_and_remove_login() {
    signin.addEventListener('click', () => {

        list_login.classList.add('active')
    })
    close_login.addEventListener('click', (e) => {
        e.stopPropagation();
        list_login.classList.remove('active')
    })
}
add_and_remove_login()

logout_account.addEventListener('click', () => {
    localStorage.removeItem('email')
    localStorage.removeItem('username')
    localStorage.removeItem('password')

    setTimeout(() => {
        window.location = 'register.html'
    }, 100);
})

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

function get_data_local() {
    login_email.value = localStorage.getItem('email')
    login_password.value = localStorage.getItem('password')
}
get_data_local()


function showdata(data = []) {
    let loop_data = data.map((ele) => {
        let heartColor = localStorage.getItem(`isRed-${ele.id}`) === 'true' ? 'red' : 'black';
        return `<div class="card-one-conrent">
    <div class="image">
        <img src="/${ele.img_src_1}" alt="">
        <div class="imgge-over">
            <img src="/${ele.img_src_2}" alt="">
        </div>
    </div>
    <div class="card-one-conrent-icons">
        <i onclick="load(this)" class="fa-solid fa-magnifying-glass"></i>
       <i onclick="changeHeartColor(${ele.id},this)" style="color:${heartColor}"class="fa-regular fa-heart"></i>
        <i onclick="load(this)" class="fa-solid fa-code-compare"></i>
    </div>
   <button onclick="save_id(${ele.id})" id="card-btn"> <i class="fa-solid fa-cart-shopping shopping"></i>SELECT
        OPTION</button>
    <p>praesentinante</p>
    <p class="desc-two">SHOP</p>
    <div class="card-one-conrent-icon">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
    </div>
    <div class="card-one-conrent-sale">
        <p>${ele.salary}</p>
    </div>
</div>
`
    })

    card_one.innerHTML = loop_data.join('')
}
showdata(JSON.parse(localStorage.getItem('data_api')))


function changeHeartColor(id,element) {
    element.classList.add('loder')
    let key = `isRed-${id}`;
    if (localStorage.getItem(key) === 'true') {
        element.style.color = 'red';
    }
    element.addEventListener('click', () => {
        if (localStorage.getItem(key) === 'true') {
            element.style.color = 'black';
                localStorage.setItem(key,'false');
        } else {
            element.style.color = 'red';
            localStorage.setItem(key, 'true');
        }
    });
setTimeout(() => {
    window.location='myproduct.html'
}, 2000);
    
    let data = JSON.parse(localStorage.getItem('data_api')).find((ele) => ele.id === id)
    let array = JSON.parse(localStorage.getItem('my-product'));
    if (array === null) {
        array = [data]
    } else {
        let index = array.findIndex((ele) => ele.id === data.id)
        if (index == -1) {
            array.push(data)
        }
    }
    localStorage.setItem('my-product', JSON.stringify(array));
}



function thesheck() {
    // removeall()
    image_slider.forEach((img) => {
        img.classList.remove('active')
    })
    slider_text.forEach((ele) => {
        ele.classList.remove('opicty')
    })

    slider_text[current_slide].classList.add('opicty')
    image_slider[current_slide].classList.add('active')
    if (current_slide === 0) {
        btn_pref.classList.add('disable')
    } else {
        btn_pref.classList.remove('disable')
    }

     if (current_slide === length_img) {
        btn_next.classList.add('disable')
    } else {
        btn_next.classList.remove('disable')
    }
    if (btn_pref.classList.contains('disable')) {
        return false
    } else {
        current_slide--
    }

    if (btn_next.classList.contains('disable')) {
        return false
    } else {
        current_slide++


    }

}
thesheck()

function filterproduct(e) {
    let val = e.target.innerHTML;
    let data = JSON.parse(localStorage.getItem('data_api'));
    if (val === 'Kids') {
        showdata(data)
    } else {
        let loopfilter = data.filter((title) => title.title === val);
        card_one.innerHTML = '';
        showdata(loopfilter);
    }
}

function showaccountuser() {
    account_name.innerHTML = localStorage.getItem('username')
}
showaccountuser()

function fillter_search() {
    search_input.addEventListener('input', (e) => {
        let data = JSON.parse(localStorage.getItem('data_api'));
        let val = e.target.value.toLowerCase();
        let filter = data.filter((ele) => ele.title.toLowerCase().indexOf(val));
        let html = filter.map((ele) => {
            return `<img src="/${ele.img_src_1}" alt="">
            <img src="/${ele.img_src_2}" alt="">
            `;
        }).join('');
        content_search.innerHTML = html;

        if (val === "") {
            content_search.innerHTML = ""; // مسح البيانات عندما تكون القيمة فارغة
        }
    });
}

fillter_search();

function save_id(id) {
    localStorage.setItem('id', id);
    setTimeout(() => {
        window.location = 'product.html';
    }, 100);

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


function deleate(id) {
    let products = JSON.parse(localStorage.getItem('product'));
    let updated_products = products.filter(item => item.id !== id);     // لان في الحقيقه ان id بتاع  array الاصليه === بيساوي idبتاع العنصر الاساسي هيعطيني false 
    localStorage.setItem('product', JSON.stringify(updated_products));
    display_shopping(updated_products);

}



document.querySelector('.selected-card h5 i').addEventListener('click', ()=>{
    event.stopPropagation();
    selected_card.classList.remove('active')
})


function load(element) {
   element.classList.add('loder')
   setTimeout(() => {
    element.classList.remove('loder')
   }, 1000);
}












