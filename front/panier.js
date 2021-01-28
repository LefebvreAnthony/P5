

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
    if (localStorage.length >= 1) {

        const cartLenght = objCartParse.length;
        let totalPrice = 0;
        for (i = 0; i < cartLenght; i++) {
            let cartName = objCartParse[i].name;
            nameProduit.innerHTML = cartName;

            let imgCart = objCartParse[i].img;
            imgProduit.src = imgCart;

            let cartQuantity = document.getElementById('cart-quantity');
            cartQuantity.innerHTML = `Quantité d'article : ${objCartParse[i].quantity.toString()}`;
            //Calcul prix des articles
            let cartPrice = objCartParse[i].price * objCartParse[i].quantity;
            priceCart.innerHTML = cartPrice + " €";
            totalPrice += cartPrice;
            //Calcul total prix du panier

            const addCard = produitCart.cloneNode(true);
            mainCart.appendChild(addCard);
        }
        totalPriceCart.innerHTML = `Prix total  : ${totalPrice} €`;
    } else {
        //suprimer bouton vider panier
        document.getElementById('parent-button').removeChild(buttonClear);
    }
}


viewCart();
mainCart.removeChild(produitCart);
produitCart.removeAttribute('id');


//Fonction de vider le panier

function clearCart() {

    buttonClear.addEventListener('click', event => {
        window.localStorage.clear();
        document.location.replace('panier.html');
        window.alert('Votre panier est supprimé');

    })
}
clearCart();


const inputLastName = document.getElementById('inputLastName');
const inputFirstName = document.getElementById('inputFirstName');
const inputCity = document.getElementById('inputCity');
const inputAdress = document.getElementById('inputAdress');
const inputMail = document.getElementById('inputMail');
const inputValidation = document.getElementById('inputValidation');


let postForm = {
    contact: {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        address: inputAdress.value,
        city: inputCity.value,
        email: inputMail.value,

        products: [],
    },

}

const formPost = async function (data) {
    let res = await fetch('http://localhost:3000/api/teddies/order', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postForm),
    })
    
};
formPost()

