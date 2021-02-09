
const buttonAllProducts = document.getElementById('all-products');
const congrat = document.getElementById("congrat");
let orderId = localStorage.getItem('orderId');

//button Nos produits
buttonAllProducts.addEventListener('click', function(){
    window.location.href = '../index.html';
});

congrat.innerHTML = `Félicitation votre commande ${orderId} a bien été passée`;