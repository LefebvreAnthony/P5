

const url = "http://localhost:3000/api/teddies";


let objCart = localStorage.getItem('cart');
let objCartParse = JSON.parse(objCart);
const cartLenght = objCartParse.length;
const produitCart = document.getElementById('produit-cart');
const cartLocal = localStorage.getItem('cart');
const mainCart = document.getElementById('main-cart');



const imgProduit = document.getElementById('img-produit');
const nameProduit = document.getElementById('name-produit');
const priceCart = document.getElementById('price-cart');

function viewCart() {

    for(i = 0; i < cartLenght; i++){
        let cartPrice = `${`${objCartParse[i].price * objCartParse[i].quantity}`} €`;
        let cartName = objCartParse[i].name;
        nameProduit.innerHTML = cartName;

        let imgCart = objCartParse[i].img;
        imgProduit.src = imgCart;

        priceCart.innerHTML = cartPrice;

        const addCard = produitCart.cloneNode(true);
        mainCart.appendChild(addCard);
        produitCart.removeAttribute('id');
          console.log();
    }
}

viewCart();
mainCart.removeChild(produitCart);
