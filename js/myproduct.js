

function displayMyProduct(data = []) {
  const contentPtoducutWishList = document.querySelector('.contentPtoducutWishList')
  if (data && data.length > 0) {
    let loopProduct = data.map((ele) => {
      return `
 <div class="product-wishlist">
 <i onclick="deleteProduct(${ele.id})" class="fa-solid fa-xmark close"></i>
 <img src="/${ele.img_src_1}" alt="" srcset="">
 <div class="text-wishlist">
     <p> ${ele.title}</p>
     <p>Size: Large</p>
 </div>
 <p class="salary">${ele.salary}</p>
 <p class="stock">In stock </p>
 <button  onclick='showAleart(${ele.id})' >SELECTOPTION</button>
 </div>
 `
    })
    contentPtoducutWishList.innerHTML = loopProduct.join('')
  } else {
    contentPtoducutWishList.innerHTML = "<h1 class='title4'> NO MY PRODUCT</h1>"
  }
}
displayMyProduct(JSON.parse(localStorage.getItem('my-product')))

function deleteProduct(id) {
  console.log(id)
  let myproducut = JSON.parse(localStorage.getItem('my-product'))
  let filterProduct = myproducut.filter((ele) => ele.id !== id);
  localStorage.setItem("my-product", JSON.stringify(filterProduct));
  displayMyProduct(filterProduct)

}

function showAleart(id) {
  let popup_content = document.querySelector('.popup-content')
  let popUp=document.querySelector('.popUp')
  const data = JSON.parse(localStorage.getItem('data_api'))
  let filter_loop = data.find((ele) => ele.id === id)
  popup_content.innerHTML= `
<div class="popup-content-left">
<div class="main-popup-img">
    <img src="/${filter_loop.img_src_1}" alt="">
</div>
<div class="slide-popup-img">
    <img src="/${filter_loop.img_src_2}" alt="">
    <img src="/imges/sed-hendrerit-tempor_002.jpg" alt="">
    <img src="/imges/sed-hendrerit-tempor_002.jpg" alt="">
</div>
</div>
<div class="popup-content-right">
<div class="popup-content-right-desc">
    <h2>${filter_loop.title}</h2>
    <i onclick="hiddenAleart()">x</i>
</div>
<div class="salary">$${filter_loop.salary}</div>
<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
    egestas.
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
<p>In stock 300 Items</p>
<p class="currency">SKU: PD0026</p>
<p class="social">share:<span>
        <i class="fa-brands fa-facebook-f facebook"></i>
        <i class="fa-brands fa-twitter twitter"></i>
        <i class="fa-brands fa-linkedin linkedin"></i>
        <i class="fa-brands fa-square-instagram instagram"></i>
        <i class="fa-brands fa-google google"></i>
        <i class="fa-brands fa-google-play google-play"></i>
    </span></p>
<div class="popup-content-delivery">
    <div class="delivery">
        <i class="fa-solid fa-truck"></i>
        <p>
            Delivery policy (edit with the Customer Reassurance module)</p>
    </div>
    <div class="security">
        <i class="fa-solid fa-user-shield"></i>
        <p>
            Security policy (edit with the Customer Reassurance module)</p>
    </div>
</div>
<p class="dollar"><span>$</span> <span>Return policy (edit with the Customer Reassurance
        module)</span></p>
</div>
`

popUp.classList.add('active')

}

function hiddenAleart() {
document.querySelector('.popUp').classList.remove('active')
}

