const emailMenu = document.querySelector('.email');
const burgerMenu = document.querySelector('.menu');
const cart = document.querySelector('.cart');
const details = document.querySelector('.product-detail');
const btnCloseDetails = document.querySelector('.div-close');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartAside = document.querySelector('.cart-info-container');
const cardsContainer = document.querySelector('.cards-container');

cart.addEventListener('click', toggleCartAside);
burgerMenu.addEventListener('click', toggleMenuMobile)
emailMenu.addEventListener('click', toggleMenuDesktop)

btnCloseDetails.addEventListener('click', closeDetails)



function toggleMenuDesktop(){
    desktopMenu.classList.toggle('inactive');
    if(!cartAside.classList.contains('inactive')){
        cartAside.classList.add('inactive');
    }else if(!details.classList.contains('inactive')){
        details.classList.add('inactive');
    }
}

function toggleMenuMobile(){
    mobileMenu.classList.toggle('inactive');
    if(!cartAside.classList.contains('inactive')){
        cartAside.classList.add('inactive');
    }else if(!details.classList.contains('inactive')){
        details.classList.add('inactive');
    }
}

function toggleCartAside(){
    cartAside.classList.toggle('inactive');
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }else if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }else if(!details.classList.contains('inactive')){
        details.classList.add('inactive');
    }
}

function openDetails(){
    details.classList.remove('inactive');
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }else if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
    }else if(!cartAside.classList.contains('inactive')){
        cartAside.classList.add('inactive');
    }
}

function closeDetails(){
    details.classList.add('inactive');
}

const productList = [];

function createProduct(name, price, img){
    const product = {
        name: name,
        price: price,
        img : img,
    }
    productList.push(product);
}

createProduct('Mouse', '30', 'https://cdn.shopify.com/s/files/1/0444/6303/0437/collections/IMG_0032.jpg?v=1605203609');
createProduct('Keyboard', '45', 'https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
createProduct('Display', '120', 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
createProduct('Headphones', '20', 'https://ae01.alicdn.com/kf/S26b81b45180e45269fa3161cbef8168aN/cascos-gaming-3-5mm-auriculares-Gaming-Headset-Casque-PS4-auriculares-Gamer-est-reo-con-micr-fono.jpg');


function showProducts(array){
    for (product of array){
        const card = document.createElement('div');
        card.classList.add('card');

        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', product.img);
        cardImg.addEventListener('click', openDetails);

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('product-info');

        card.append(cardImg, cardInfo);
    
        const cardInfoDiv = document.createElement('div'); 
        const cardInfoPrice = document.createElement('p');
        const cardInfoName = document.createElement('p');
        cardInfoPrice.innerText = '$' + product.price;
        cardInfoName.innerText = product.name;
        cardInfoDiv.append(cardInfoPrice, cardInfoName);
    
        const cardInfoFigure = document.createElement('figure');
        const cardInfoImg = document.createElement('img');
        cardInfoImg.setAttribute('src', '../multimedia/iconos/bt_add_to_cart.svg')
        cardInfoFigure.append(cardInfoImg);
    
        cardInfo.append(cardInfoDiv, cardInfoFigure);
        cardsContainer.append(card);
    }
}



showProducts(productList);