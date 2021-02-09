
const buttonRedirect = document.getElementById('i');
const cardProduit = document.getElementById('produit-card');
const nameProduit = document.getElementById('nom-produit');
const imgProduit = document.getElementById('img-produit');
const mainProduit = document.getElementById('main-produit');
const buttonAddPanier = document.querySelector('.add-panier');

const allTeddies = function () {
    fetch("http://localhost:3000/api/teddies")
        .then(response => {
            if (response.ok) {
                return response.json().then(data => {
                    try {

                        // Boucle pour chaque objet dans l'api, créer un clone avec les informations de l'objet.
                        for (i = 0; i < data.length; i++) {
                            let dataId = data[i]._id;
                            let dataPrice = data[i].price;
                            let dataName = data[i].name;
                            let dataImg = data[i].imageUrl;

                            nameProduit.innerText = dataName;
                            imgProduit.src = dataImg;
                            buttonRedirect.id = dataId;
                            buttonAddPanier.dataset.id = dataId;

                            const addCard = cardProduit.cloneNode(true);
                            mainProduit.appendChild(addCard);


                            // Afficher la page detail produit avec le bon produit
                            addCard.querySelector('.detail-button').addEventListener('click', event => {
                                window.location.href = `./pages/produit.html?id=${event.target.id}`;
                            });

                            // Ajouter item dans LocalStorage
                            addCard.querySelector('.add-panier').addEventListener('click', function() {
                                let cart = localStorage.getItem('cart');
                                if (cart == null) {
                                    cart = [
                                        {
                                            'name': dataName,
                                            'id': dataId,
                                            'quantity': 1,
                                            'price': dataPrice,
                                            'img': dataImg,
                                        }
                                    ]
                                } else {
                                    cart = JSON.parse(cart)
                                    let finded = 0;
                                    for (i = 0; i < cart.length; i++) {
                                        if (dataName === cart[i].name) {
                                            cart[i].quantity += 1;
                                            finded = 1;
                                            break
                                        }
                                    }
                                    if (!finded) {
                                        cart.push({ 'name': dataName, 'id': dataId, 'quantity': 1, 'price': dataPrice, 'img': dataImg, })
                                    }
                                }
                                localStorage.setItem('cart', JSON.stringify(cart));
                            });
                        }
                    }
                    catch (e) {
                        console.log('Erreur ' + e);
                    }
                });

            }
        });
}

allTeddies();
mainProduit.removeChild(cardProduit);
cardProduit.removeAttribute('id');
