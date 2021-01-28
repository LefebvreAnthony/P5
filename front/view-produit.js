
let imgProduit = document.getElementById('img-produit');
let descriptionProduit = document.getElementById('description-produit');
let colorSelect = document.getElementById('color-produit');
let nameProduit = document.getElementsByClassName('name-produit');
let priceProduit = document.getElementById('price-produit');
const buttonAddPanier = document.getElementById('add-panier');


const focusTeddie = async function(){

    const params = new URLSearchParams(location.search)
    
    let response = await fetch(`http://localhost:3000/api/teddies/${params.get('id')}`);
    if(response.ok){

        const data = await response.json();
        //console.log(data);

        const produit = data;
        //console.log(produit);
        descriptionProduit.innerText = produit.description;
        priceProduit.innerText = "prix : " + produit.price + " €";
        
        Array.from(nameProduit).forEach(function(element){
            element.innerText = produit.name
        })
        
        const optionColor = produit.colors;
        //console.log(optionColor);
        
        optionColor.forEach(function(element , key){
            colorSelect[key] = new Option(element, key);
        })
        
        //console.log(produit.imageUrl)
        imgProduit.src = produit.imageUrl;
        buttonAddPanier.addEventListener('click', event => {
                            
                let cart = localStorage.getItem('cart');
                
                if(cart == null){
                    cart = [
                        {
                            'name': produit.name,
                            'id': produit.id,
                            'quantity': 1,
                            'price': produit.price,
                            'img': produit.imageUrl,
                        }
                    ]
                } else{
                    cart = JSON.parse(cart)
                    let finded = 0;
                    for(i = 0; i < cart.length; i++){
                        if(produit.name === cart[i].name){
                            cart[i].quantity += 1;
                            finded = 1;
                            break
                        }
                    }
                    if(!finded){
                        cart.push({'name': produit.name, 'id': produit.id, 'quantity': 1, 'price': produit.price, 'img': produit.imageUrl,})
                    }
                }
                localStorage.setItem('cart', JSON.stringify(cart));
        });
    }
};

focusTeddie();
