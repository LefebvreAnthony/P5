
const buttonAllProducts = document.getElementById('all-products');

buttonAllProducts.addEventListener('click', function(){
    window.location.href = '../index.html';
});

let orderId = localStorage.getItem('orderId');
console.log(orderId)

const congrat = document.getElementById("congrat");


congrat.innerHTML = `Félicitation votre commande ${orderId} a bien été passée`;