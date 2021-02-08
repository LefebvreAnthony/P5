

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

const buttonAllProducts = document.getElementById('all-products');

buttonAllProducts.addEventListener('click', function(){
    window.location.href = '../index.html';
})


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
        body.removeChild(mainCart)
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


//Function Reccup value formulaire 
inputValidation.addEventListener('click', function(evt){
    evt.preventDefault();
    evt.stopPropagation();
    postForm.contact = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            address: inputAdress.value,
            city: inputCity.value,
            email: inputMail.value,
    
        }
    fetch('http://localhost:3000/api/teddies/order', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postForm),
    })
    .then(response =>{
        if(response.ok){
            return response.json().then(data => {
                localStorage.clear();
                localStorage.setItem("orderId", data.orderId)
                location.href = 'order.html'

            })
        };
    })
});

console.log(postForm)

// Validation caractère Email
const validateEmail = function (mail) {
 
    const emailRegExp = new RegExp(
        
        '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
        'g'
    );
    let testEmail = emailRegExp.test(mail.value);
    let small = inputMail.nextElementSibling;
    if(testEmail) {
        small.innerHTML = 'Adresse email valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');

    } else {
        small.innerHTML = "Adresse email non valide ! "
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

inputMail.addEventListener('change', function(){

    validateEmail(this);
});




//Validation caratère Nom de famille !!
const validateLastName = function(lastName){

    const lastNameRegExp = new RegExp(
        '^[A-Za-z]{1,20}$',
        'g'
    );
    let testLastName = lastNameRegExp.test(lastName.value)
    let small = inputLastName.nextElementSibling;
    if(testLastName) {
        small.innerHTML = 'Nom valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');

    } else {
        small.innerHTML = "Nom invalide ! "
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};


inputLastName.addEventListener('change', function(){
    validateLastName(this);
});
//Validation caratère Prénom !!
const validateFirstName = function(firstName){

    const firstNameRegExp = new RegExp(
        '^[A-Za-z]{1,20}$',
        'g'
    );
    let testFirstName = firstNameRegExp.test(firstName.value)
    let small = inputFirstName.nextElementSibling;
    if(testFirstName) {
        small.innerHTML = 'Prénom valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');

    } else {
        small.innerHTML = "Prénom invalide ! "
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};

inputLastName.addEventListener('change', function(){
    validateFirstName(this);
});


//Validation caratère Ville !!
const validateCity = function(city) {

    const cityRegExp = new RegExp(
        '^[a-zA-Z-\\s]{1,50}$',
        'g'
    )
    let testCity = cityRegExp.test(city.value)
    let small = inputCity.nextElementSibling;
    if(testCity) {
        small.innerHTML = 'Ville valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');

    } else {
        small.innerHTML = "Ville invalide ! "
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};
inputCity.addEventListener('change', function(){
    validateCity(this);
});


//Validation caratère Adresse !!
const validateAdress = function(adresse) {

    const adresseRegExp = new RegExp(
        '^[a-zA-Z0-9-_\\s]{1,50}$',
        'g'
    )
    let testAdress = adresseRegExp.test(adresse.value)
    let small = inputAdress.nextElementSibling;
    if(testAdress) {
        small.innerHTML = 'Adresse valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');

    } else {
        small.innerHTML = "Adresse invalide ! "
        small.classList.remove('text-success');
        small.classList.add('text-danger');
    }
};
inputAdress.addEventListener('change', function(){
    validateAdress(this);
})
