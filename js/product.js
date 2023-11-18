 let data = JSON.parse(localStorage.getItem('data_api'))
let id = localStorage.getItem('id')
let content = document.querySelector('.content')
let loop_data = data.find((ele) => ele.id == id);
let body = document.querySelector('body');
let btn_qty = document.getElementById('btn-qty')
let span_cart = document.getElementById('num')
let length_cart = JSON.parse(localStorage.getItem('product'))
// let load = document.querySelector('.loader')




function showdata(arry = []) {
    let data =
        `
    <div class="content_image_slide">
    <div class="image_slide">
        <img onclick="select_src(this.src)" src="/${loop_data.img_src_2}" alt=""  class="name">
        <img onclick="select_src(this.src)" src="/imges/nulla-imperdiet-purus.jpg" alt="" class="name">
        <img onclick="select_src(this.src)" src="/imges/vesti-phara-posuere.jpg" alt="" class="name">
    </div>
    <div class="main_image">
        <img src="/${loop_data.img_src_1}" alt="" srcset="" class="main">
    </div>
    <div class="content_text_slide">
        <p><a href="index.html">home</a><span>/Nulla imperdiet purus</span><a href='/html/productprice.html'><span class="price">/CLOTHES</span></a></p>
        <div class="content_text_title">
            <h2>Nulla imperdiet purus</h2>
            <div class="content_text_icons">
                <i class="fa-solid fa-angle-left left"></i>
                <a href="index.html"><i class="fa-solid fa-house house"></i></a>
                <i class="fa-solid fa-angle-right right"></i>
            </div>
        </div>
        <div class="icons_start">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <span>Reviews (1) </span>
        </div>
        <p class="salary">$119.00 </p>
    
        <p class="dsec">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
    
        <p class="cart">In stock 300 Items</p>
    
        <span id="minues" onclick="decrease_product()">-</span>
        <span id="count-num">1</span>
        <span id="plus" onclick="increase_product(${loop_data.id})">+</span>
        <span onclick="add_to_cart(${loop_data.id})" id="cart">ADD TO CART</span>
        <span id="BUY">BUY NOW</span>
        <div class="accuont_user">
            <span><i class="fa-solid fa-code-compare"></i><a href="">COMPARE</a></span>
            <span><i class="fa-regular fa-star"></i><a href="">ADD to Wishlist</a></span>
            <span><i class="fa-solid fa-ruler"></i><a href="">Size Guide</a></span>
        </div>
        <p class="sku">SKU: <span>PD0026</span></p>
        <div class="social-account">
            <span>Share:</span>
            <span class="account-social">
                <span class="Facebook"> <i class="fa-brands fa-facebook-f"></i></span>
                <span class="twitter"><i class="fa-brands fa-twitter"></i></span>
                <span class="Linkedin"><i class="fa-brands fa-linkedin"></i></span>
                <span class="Instagram"><i class="fa-brands fa-square-instagram"></i></span>
                <span class="Google"><i class="fa-brands fa-google"></i></span>
                <span class="Live"><i class="fa-brands fa-google-play"></i></span>
            </span>
        </div>
        <div class="delivery-user">
            <div class="delviry-flex">
                <span>
                    <i class="fa-solid fa-truck"></i>
                    <p> Delivery policy (edit with the Customer Reassurance module)</p>
                </span>
                <span>
                    <i class="fa-solid fa-user-shield"></i>
                    <p> Security policy (edit with the Customer Reassurance module)</p>
                </span>
            </div>
            <div class="dollar">
                <i class="fa-solid fa-dollar-sign"></i>
                <p> Return policy (edit with the Customer Reassurance module) </p>
            </div>
        </div>
    </div>
    </div>
    `
    content.innerHTML = data

}
showdata(array = []);


document.querySelector('.left').addEventListener('click', () => {
    let currentIndex = loop_data.id - 1;
    let previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
        let previousProduct = data.find((ele) => ele.id == previousIndex);
        if (previousProduct) {
            loop_data = previousProduct;
            showdata(loop_data);
        }
    }
});

document.querySelector('.right').addEventListener('click', () => {
    let currentindex = loop_data.id + 1
    if (currentindex) {
        let previousProducts = data.find((ele) => ele.id == currentindex);
        if (previousProducts) {
            loop_data = previousProducts;
            showdata(loop_data);
        }
    }
})

function select_src(src) {
    let main = document.querySelector('.main')
    main.src = src
}

function add_to_cart(id) {
    let data = JSON.parse(localStorage.getItem('data_api')).find((ele) => ele.id === id);
    let cartItems = JSON.parse(localStorage.getItem('product'));

    if (cartItems === null) {
        // إذا لم يكن هناك أي منتجات في السلة، قم بإضافة المنتج الجديد مباشرة

        cartItems = [data];

    }
    else {
        // قم بالتحقق مما إذا كان المنتج موجودًا بالفعل في السلة
        let index = cartItems.findIndex((item) => item.id === data.id);
        if (index === -1) {
            // المنتج غير موجود، قم بإضافته إلى السلة
            cartItems.push(data);



        }
    }
    localStorage.setItem('product', JSON.stringify(cartItems));

    // قم بتحديث عرض قائمة المنتجات في واجهة المستخدم
    span_cart.innerHTML = cartItems.length;
    display_product();

    opencart()

}

function display_product() {
    let products = JSON.parse(localStorage.getItem('product'));

    let out = `
      <h5><span class="one-span">YOUR CART</span><span>${products.length}</span><span class="two-span">ITEMS</span>
      <i class="fa-solid fa-xmark close"></i>
      </h5>
    `;
    for (let i = 0; i < products.length; i++) {
        out += `
        <img src="/${products[i].img_src_1}" alt="" srcset="">
          <div class="icon">
               <i onclick="deleate_product(${products[i].id})"class="fa-solid fa-xmark icon"></i>
          </div>
        <span id="product-title2"> ${products[i].title}</span>
        <span id="product-salary2">${products[i].salary}</span>
        <h5 id="product-size2"> Size: ${products[i].size_1}</h5>
        <span id="product-qty2">QTY:<button id="btn-qty2">1</button></span>
      `;
    }
    selected_card.innerHTML = out;
}

function deleate_product(id) {
    let data = JSON.parse(localStorage.getItem('product'))
    let updatashopping = data.filter((ele) => ele.id !== id)
    localStorage.setItem('product', JSON.stringify(updatashopping))
    display_product(updatashopping)
}


function opencart() {
    selected_card.classList.toggle('active')
}

// function increase_product() {
//     let btn_qty = document.getElementById('btn-qty');
//     // let count_num=document.getElementById('count-num')

//     let count = parseInt(localStorage.getItem('count'));


//     if (isNaN(count)) {

//         count = 0; // قيمة افتراضية إذا كانت القيمة في localStorage غير صالحة

//     } else {
//         count++;
//     }

//     btn_qty.innerHTML = count;
//     // count_num.innerHTML=1
//     // count_num.innerHTML=count

//     localStorage.setItem('count', count.toString());
// }


// function increase_product(id) {
//     let btn_qty = document.getElementById('btn-qty2' + id)
//     let count = 0;
//     if (btn_qty !== null) {
//         count = parseInt(btn_qty.innerHTML);
//     }

//     if (isNaN(count)) {
//         count = 0;
//     } else {
//         count++;
//     }

//     if (btn_qty !== null) {
//         btn_qty.innerHTML = count;
//     }

//     let cartItems = JSON.parse(localStorage.getItem('product'));
//     let index = cartItems.findIndex((item) => item.id === id);

//     if (index !== -1) {
//         cartItems[index].count = count;
//         localStorage.setItem('product', JSON.stringify(cartItems));
//     }
// }

function decrease_product() {
    let btn_qty = document.getElementById('btn-qty');
    let count_num = document.getElementById('count-num');
    let decrese = parseInt(localStorage.getItem('decrese'));

    if (isNaN(decrese)) {
        decrese = parseInt(localStorage.getItem('count'));
    } else {
        decrese -= 1;
    }

    btn_qty.innerHTML = decrese;
    count_num = decrese


    localStorage.setItem('decrese', decrese.toString());
}

