const searchForm = document.querySelector(".search-form")
const cartItems = document.querySelector(".cart-items-container")
const navbar = document.querySelector(".navbar")
const checkoutBtn = document.querySelector("#checkout-btn");

const searchBtn = document.querySelector("#search-btn")
const cartBtn = document.querySelector("#cart-btn")
const menuBtn = document.querySelector("#menu-btn")
let price = 0;

let urunler = [
    {id: 1, name: '6 Mini Pizzas', price: '$20', img: '/images/menu-1.png', title: 'Lorem Ipsum ', category: 1, stock:true},
    {id: 2, name: '5 Mini Burgers', price: '$10', img: '/images/menu-2.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 2, stock:false},
    {id: 3, name: '2 Mixed Pizzas', price: '$40', img: '/images/menu-3.png', title: 'Lorem Ipsum is simply dummy text oæf the printing and typesetting industry. Lorem Ipsum has', category: 2, stock:true},
    {id: 4, name: '3 Meatball Burgers', price: '$50', img: '/images/menu-4.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 1, stock:true},
    {id: 5, name: '6 Mini Pizzas', price: '$60', img: '/images/menu-1.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 3, stock:true},
    {id: 6, name: '5 Mini Burgers', price: '$20', img: '/images/menu-2.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 3, stock:true},
    {id: 7, name: '2 Mixed Pizzas', price: '$25', img: '/images/menu-3.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 4, stock:true},
    {id: 8, name: '3 Meatball Burgers', price: '$40', img: '/images/menu-4.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 4, stock:true},
    {id: 9, name: '3 Meatball Burgers', price: '$55', img: '/images/menu-4.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 5, stock:true},
    {id: 10, name: '3 Meatball Burgers', price: '$75', img: '/images/product-1.png', title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has', category: 5, stock:true},
]


$(document).ready(function () {
    allproduct()
});

function allproduct() {
    $(".urunler > div").remove()

    let html = ''
    urunler.forEach(value => {
        html = `<div class="eaths-container">
                 <div class="eaths-img">
                 <img src="${value.img}" alt="menu">
                </div>
                <div class="eaths-header">
                    <h3>${value.name}</h3>
                    <span class="menu-category">${value.title}</span>
                  
                </div>
                <div class="eaths-bottom">
                    <div class="price"> ${value.price}</div>
                </div> 
                <div class="eaths-img batge ${value.stock===true ? 'd-none' : 'd-block'  }">
                 Tükendi
                </div>
            </div>`
        $(".urunler").append(html)
    })
}
function products(id) {
    let html = '';
    $(".urunler > div").remove()
    urunler.forEach(value => {
        if (value.category === id) {
            html = `<div class="eaths-container">
                 <div class="eaths-img">
                 <img src="${value.img}" alt="menu">
                </div>
                <div class="eaths-header">
                    <h3>${value.name}</h3>
                    <span class="menu-category">${value.title}</span>
                  
                </div>
                <div class="eaths-bottom">
                    <div class="price"> ${value.price}</div>
                </div> 
                <div class="eaths-img batge ${value.stock===true ? 'd-none' : 'd-block'  }">
                 Tükendi
                </div>
            </div>`
            $(".urunler").append(html)
        }
    })
}

function addUrun(id) {
    let uruns = '';
    urunler.forEach(value => {
        if (id === value.id) {
            uruns = `<div id="cart-${value.id}" class="cart-item">
                <i class="fas fa-times" onclick="removeItem(${value.id},${value.price})"></i>
                <img src="${value.img}">
                <div class="content">
                    <h3>${value.name}</h3>
                    <div id="price1" class="price">$ ${value.price}</div>
                </div></div>`
            price += value.price;
            $("#total").html(price)
            $("#CartItemsContainer").append(uruns)
        }
    })
}

function removeItem(id, prices) {
    $("#cart-" + id).remove();
    price -= prices
    $("#total").html(price)
}

function getLSContent() {
   
    const lsContent = JSON.parse(localStorage.getItem("products")) || [];
    return lsContent;
}

function calculateTotal(prices) {
    return prices.reduce(function (prev, next) {
        return prev + next;
    }, 0);
}

function getCartItemPrices() {
    const prices = [];
    
    let nums = cartContent.querySelectorAll(".price");

    
    if (nums.length > 0) {
        for (let cell = 0; cell < nums.length; cell++) {
            let num = nums[cell].innerText;
            num = num.replace(/[^\d]/g, "");
            num = parseFloat(num);
            prices.push(num);
        }
        return prices;
    } else {
        return;
    }
}

function displayCartTotal() {
    const prices = getCartItemPrices();
    let total = 0;
    if (prices) {
        total = calculateTotal(prices);
        totalPriceContainer.innerHTML = `<span class="total">Total: $${total.toFixed(
            2
        )}</span>`;
    } else {
        totalPriceContainer.innerHTML = '<span class="total">Total: $0</span>';
    }
}



