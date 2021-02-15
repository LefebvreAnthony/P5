
//button Nos produits
document.getElementById('all-products').addEventListener('click', function(){
    window.location.href = '../index.html';
});

//Afficher numéro commande
document.getElementById("congrat").innerHTML = `Félicitation votre commande ${localStorage.getItem('orderId')} à bien été passée`;