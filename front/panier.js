

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

let postForm = {
    contact: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',

    },
    products: [],

}
//création visuel des articles que l'on à ajouté au panier
function viewCart() {
    if (localStorage.length >= 1) {

        const cartLenght = objCartParse.length;
        let totalPrice = 0;
        for (let i = 0; i < cartLenght; i++) {
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


            //Créer les valeurs pour le post order de chaque id article
            for(let j= 0; j < objCartParse[i].quantity; j++){

                postForm.products.push(objCartParse[i].id);
            }
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

inputValidation.addEventListener('click', function(){
    fetch('http://localhost:3000/api/teddies/order', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postForm),
    })
    .then(response =>{
        if(response.ok){
            
            postForm = {
                contact: {
                    firstName: inputFirstName.value,
                    lastName: inputLastName.value,
                    address: inputAdress.value,
                    city: inputCity.value,
                    email: inputMail.value,
            
                },
            }
        };
        location.href = 'order.html'
    })
});

console.log(postForm)
