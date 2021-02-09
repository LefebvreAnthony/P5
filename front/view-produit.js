
const params = new URLSearchParams(location.search);

// Afficher produit selon l'id de l'url
const focusTeddie = function () {
    fetch(`http://localhost:3000/api/teddies/${params.get('id')}`)
        .then(response => {
            if (response.ok) {
                return response.json().then(data => {
                    try {

                        document.getElementById('description-produit').innerText = data.description;
                        document.getElementById('price-produit').innerText = "prix : " + data.price + " €";
                        document.getElementById('img-produit').src = data.imageUrl;

                        Array.from(document.getElementsByClassName('name-produit')).forEach(function (element) {
                            element.innerText = data.name;
                        });

                        // Boucle pour afficher la selection de couleur pour teddie
                        data.colors.forEach(function (element, key) {
                            document.getElementById('color-produit')[key] = new Option(element, key);
                        });

                        // Ajouter item dans LocalStorage
                        document.getElementById('add-panier').addEventListener('click', function () {
                            let cart = localStorage.getItem('cart');

                            if (cart == null) {
                                cart = [
                                    {
                                        'name': data.name,
                                        'id': data._id,
                                        'quantity': 1,
                                        'price': data.price,
                                        'img': data.imageUrl,
                                    }
                                ]
                            } else {
                                cart = JSON.parse(cart)
                                let finded = 0;
                                for (let i = 0; i < cart.length; i++) {
                                    if (data.name === cart[i].name) {
                                        cart[i].quantity += 1;
                                        finded = 1;
                                        break
                                    }
                                }
                                if (!finded) {
                                    cart.push({ 'name': data.name, 'id': data._id, 'quantity': 1, 'price': data.price, 'img': data.imageUrl, })
                                }
                            }
                            localStorage.setItem('cart', JSON.stringify(cart));
                        });
                    }
                    catch (e) {
                        console.log('Erreur ' + e)
                    }
                })
            }
        })
};

focusTeddie();
