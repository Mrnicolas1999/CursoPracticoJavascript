const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const podructDetailCloseIcon = document.querySelector('.product-detail-close')
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
podructDetailCloseIcon.addEventListener('click', closeProductDetailAside)

//El usuario email
function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
}

//El hamburguesa
function toggleMobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    //si esta abierto, cerrarlo
    shoppingCartContainer.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive')

  closeProductDetailAside();
}

//El carrito de compras
function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    //si esta abierto el menu mobile, cerrarlo
    mobileMenu.classList.add('inactive')
  }  
  shoppingCartContainer.classList.toggle('inactive')

  if (!isDesktopMenuClosed) {
    //si esta abierto el Menudesktop, cerrarlo
    desktopMenu.classList.add('inactive')
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    //si esta abierto el menu mobile, cerrarlo
    productDetailContainer.classList.add('inactive')
  } 


}

// Lista de productos

const productList = [];
productList.push({
  name: 'Bicicleta',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'Gafas',
  price: 45,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
  name: 'Vintage',
  price: 40,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');    
}

function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement('div'); //aqui estamos creando un div
    productCard.classList.add('product-card'); //Aqui le estamos dando una clase al div
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image) //vamos a modificar su propiedad src con product.image
    productImg.addEventListener('click', openProductDetailAside) //al hacer click en la imagen, corre la funcion openProductDetailAside, que abre o muestra el Aside
    
    const productInfo = document.createElement('div'); //aqui estamos creando un div
    productInfo.classList.add('product-info'); //Aqui le estamos dando una clase al div
  
    const productInfoDiv = document.createElement('div'); //aqui estamos creando un div que esta contenido en product-info
  
    const productPrice = document.createElement('p'); //aqui estamos creando un parrafo que esta contenido en el productInfoDiv
    productPrice.innerText = "$" + product.price;
  
    const productName = document.createElement('p'); //aqui estamos creando un parrafo que esta contenido en el productInfoDiv
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure'); ////aqui estamos creando un figure que va a contener la imagen
  
    const productImgCart = document.createElement('img'); //aqui estamos creando una imagen que va a ir contenida en el figure
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' ) //aqui le estamos añadiendo la imagen del carrito de compras
  
    // -------------- Ahora vamos a poner las clases y divs hijos en los divs padres ----  Para esto se va de atras para adelante, de la ultima a la primera
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList); // para terminos de organizacion, y podermos reusar esta funcion para usar diferentes arrays



