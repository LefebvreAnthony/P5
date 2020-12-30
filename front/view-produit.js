
let imgProduit = document.getElementById('img-produit');
let descriptionProduit = document.getElementById('description-produit');
let colorSelect = document.getElementById('color-produit');
let nameProduit = document.getElementById('name-produit');
let priceProduit = document.getElementById('price-produit');


const focusTeddie = async function(){

    let response = await fetch("http://localhost:3000/api/teddies");

    if(response.ok){

        const data = await response.json();
        console.log(data);

        const produit1 = data[0];
        console.log(produit1);
        
        nameProduit.innerText = produit1.name;
        descriptionProduit.innerText = produit1.description;
        priceProduit.innerText = produit1.price + " €";
        
        
        const optionColor = produit1.colors;
        console.log(optionColor);
        
        optionColor.forEach(function(element , key){
            colorSelect[key] = new Option(element, key);
        })
        
        console.log(produit1.imageUrl)
        imgProduit.src = produit1.imageUrl;



    }
};

focusTeddie();