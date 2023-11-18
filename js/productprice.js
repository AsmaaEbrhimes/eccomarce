let overlay_loder=document.querySelector('.overlay-loder')

document.querySelector('.price i').addEventListener('click', (e) => {
    document.querySelector('.content-price').classList.toggle('active')
    if (e.target.classList.contains('fa-minus')) {
        e.target.classList.remove('fa-minus')
        e.target.classList.add('fa-plus')
    } else {
        e.target.classList.remove('fa-plus')
        e.target.classList.add('fa-minus')
    }
});

document.querySelector('.size i').addEventListener('click', (e) => {
    document.querySelector('.type-size ').classList.toggle('active')
    if (e.target.classList.contains('fa-minus')) {
        e.target.classList.remove('fa-minus')
        e.target.classList.add('fa-plus')
    } else {
        e.target.classList.remove('fa-plus')
        e.target.classList.add('fa-minus')
    }
})

const showData = (arry = []) => {
    let loopData = arry.map((ele) => {
        return `
    <div class="content-clothes-image">
    <img src="/${ele.img_src_1}" alt="" srcset="">
    <div class="sale">%59-</div>
    </div>
    `
    })
    document.querySelector('.imges-clothes').innerHTML = loopData.join('')

}
showData(JSON.parse(localStorage.getItem('data_api')))


const compareSize = (checkbox) => {
    let selectedSize = checkbox.previousElementSibling.innerText.trim();
    let data = JSON.parse(localStorage.getItem('data_api'))
    if (selectedSize === 'All size') {
        overlay_loder.classList.add('loder')
        setTimeout(() => {
            overlay_loder.classList.remove('loder')
            showData(data)
        }, 1500);
    } else {
        let filterSize = data.filter((ele) => ele.size === selectedSize)
        overlay_loder.classList.add('loder')
        setTimeout(() => {
            overlay_loder.classList.remove('loder')
            showData(filterSize)
        }, 1500);
    }
}

const changePrice=(range)=>{
let value= parseInt(range.value)
const data=JSON.parse(localStorage.getItem('data_api'))
if(range.classList.contains('range-min')){
 let price_min=document.querySelector('.input-min').value = value;
 let filteredData = data.filter((item) => item.salary <= price_min);
 overlay_loder.classList.add('loder')
 setTimeout(() => {
    overlay_loder.classList.remove('loder')
    showData(filteredData);
 }, 1500);
}
else{
    price_mix = document.querySelector('.input-max').value = value;
    let filteredData = data.filter((item) => item.salary <= price_mix);
    
    overlay_loder.classList.add('loder')
    setTimeout(() => {
        overlay_loder.classList.remove('loder')
        showData(filteredData);
     }, 1500);
}
}


