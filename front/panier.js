

const url = "http://localhost:3000/api/teddies";


let objCart = localStorage.getItem('cart');
let objCartParse = JSON.parse(objCart);
const produitCart = document.getElementById('produit-cart');
const mainCart = document.getElementById('main-cart');
const buttonClear = document.getElementById('clear-cart');
const totalPriceCart = document.getElementById('total-price');



const imgProduit = document.getElementById('img-produit');
const nameProduit = document.getElementById('name-produit');
const priceCart = document.getElementById('price-cart');

function viewCart() {
    if( localStorage.length == 1){

        const cartLenght = objCartParse.length;
        for(i = 0; i < cartLenght; i++){
            let cartName = objCartParse[i].name;
            nameProduit.innerHTML = cartName;
            
            let imgCart = objCartParse[i].img;
            imgProduit.src = imgCart;
    
            let cartQuantity = document.getElementById('cart-quantity');
            cartQuantity.innerHTML = `Quantité d'article : ${objCartParse[i].quantity.toString()}`;
            //Calcul prix des articles
            let cartPrice = `${`${objCartParse[i].price * objCartParse[i].quantity}`}`;
            priceCart.innerHTML = cartPrice + " €";

            //Calcul total prix du panier
            totalPriceCart.innerHTML = `Prix total panier : ${cartPrice * parseInt(cartLenght)} €` ;
    
            const addCard = produitCart.cloneNode(true);
            mainCart.appendChild(addCard);
        }
        
    } else{
        //suprimer bouton vider panier
        document.getElementById('parent-button').removeChild(buttonClear);
    }
}

viewCart();
mainCart.removeChild(produitCart);
produitCart.removeAttribute('id');


//Fonction de vider le panier

function clearCart() {

    buttonClear.addEventListener('click', event =>{
        window.localStorage.clear();
        document.location.replace('panier.html');
        window.alert('Votre panier est supprimé');

    })
}
clearCart()