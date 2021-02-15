
let objCartParse = JSON.parse(localStorage.getItem('cart'));
const produitCart = document.getElementById('produit-cart');
const mainCart = document.getElementById('main-cart');
const buttonClear = document.getElementById('clear-cart');
const inputLastName = document.getElementById('inputLastName');
const inputFirstName = document.getElementById('inputFirstName');
const inputCity = document.getElementById('inputCity');
const inputAdress = document.getElementById('inputAdress');
const inputMail = document.getElementById('inputMail');
let postForm = {
    contact: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',
    },
    products: [],
};

//création visuel des articles que l'on à ajouté au panier
const viewCart = function () {
    try {
        if (localStorage.length >= 1) {
            let totalPrice = 0;
            for (let i = 0; i < objCartParse.length; i++) {
                document.getElementById('name-produit').innerHTML = objCartParse[i].name;
                document.getElementById('img-produit').src = objCartParse[i].img;
                document.getElementById('cart-quantity').innerHTML = `Quantité d'article : ${objCartParse[i].quantity.toString()}`;

                //Calcul prix des articles
                let cartPrice = objCartParse[i].price * objCartParse[i].quantity;
                document.getElementById('price-cart').innerHTML = cartPrice + " €";

                //Calcul total prix du panier
                totalPrice += cartPrice;
                
                const addCard = produitCart.cloneNode(true);
                mainCart.appendChild(addCard);

                //Créer les valeurs pour le post order de chaque id article
                for (let j = 0; j < objCartParse[i].quantity; j++) {
                    postForm.products.push(objCartParse[i].id);
                }
            }
            document.getElementById('total-price').innerHTML = `Prix total  : ${totalPrice} €`;
        }
        else {
            document.getElementById('main-produit').removeChild(mainCart);

            //suprimer bouton vider panier
            document.getElementById('parent-button').removeChild(buttonClear);
        }
    } catch (e) {
        console.log('Erreur : ' + e);
    }
}

const eventClick = function () {
    //Nos produit button
    document.getElementById('all-products').addEventListener('click', function () {
        window.location.href = '../index.html';
    });

    //Fonction de vider le panier
    buttonClear.addEventListener('click', event => {
        window.localStorage.clear();
        document.location.replace('panier.html');
        window.alert('Votre panier est supprimé');
    });
};

// ************************************************************************ SERIE DE VALIDATION FORM ************************************************************************
const validateInput = function (input, inputName, regex) {
    const regExp = new RegExp(regex, 'g');
    let small = input.nextElementSibling;

    if (regExp.test(input.value)) {
        small.innerHTML = inputName + ' valide';
        small.classList.remove('text-danger');
        small.classList.add('text-success');
        input.classList.remove('border-danger');
        input.classList.add('border-success');
        return true;

    } else {
        small.innerHTML = inputName + " invalide ! ";
        small.classList.remove('text-success');
        small.classList.add('text-danger');
        input.classList.remove('border-success');
        input.classList.add('border-danger');
        return false;

    }
};

const validateForm = function () {

    // Validation caractère Email
    inputMail.addEventListener('change', function () {
        validateInput(this, 'Email', '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    });

    //Validation caratère Nom de famille !!
    inputLastName.addEventListener('change', function () {
        validateInput(this, 'Nom', '^[A-Za-z]{1,20}$');
    });

    //Validation caratère Prénom !!
    inputFirstName.addEventListener('change', function () {
        validateInput(this, 'Prénom', '^[A-Za-z]{1,20}$');
    });

    //Validation caratère Ville !!
    inputCity.addEventListener('change', function () {
        validateInput(this, 'Ville', '^[a-zA-Z-\\s]{3,50}$');
    });

    //Validation caratère Adresse !!
    inputAdress.addEventListener('change', function () {
        validateInput(this, 'Adresse', '^[a-zA-Z0-9-_\\s]{3,50}$');
    });
};

// ************************************************************************************************************************************************

//Function Reccup value formulaire 
const reccupValueForm = function () {

    document.getElementById('inputValidation').addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        postForm.contact = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            address: inputAdress.value,
            city: inputCity.value,
            email: inputMail.value,
        }
        if (validateInput(inputMail, 'Email', '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$') &&
            validateInput(inputLastName, 'Nom', '^[A-Za-z]{1,20}$') &&
            validateInput(inputFirstName, 'Prénom', '^[A-Za-z]{1,20}$') &&
            validateInput(inputCity, 'Ville', '^[a-zA-Z-\\s]{3,50}$') &&
            validateInput(inputAdress, 'Adresse', '^[a-zA-Z0-9-_\\s]{3,50}$')
        ) {

            fetch('http://localhost:3000/api/teddies/order', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postForm),
            })
                .then(response => {
                    if (response.ok) {
                        return response.json().then(data => {
                            localStorage.clear();
                            localStorage.setItem("orderId", data.orderId);
                            location.href = 'order.html';
                        })
                    };
                })
        } else {
            alert('Formulaire invalide !')
        }
    });
};

//Appel de fonction
viewCart();
validateForm();
reccupValueForm();
eventClick();

mainCart.removeChild(produitCart);
produitCart.removeAttribute('id');