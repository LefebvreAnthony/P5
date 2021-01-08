
let imgProduit = document.getElementById('img-produit');
let descriptionProduit = document.getElementById('description-produit');
let colorSelect = document.getElementById('color-produit');
let nameProduit = document.getElementsByClassName('name-produit');
let priceProduit = document.getElementById('price-produit');


const focusTeddie = async function(){

    const params = new URLSearchParams(location.search)
    
    let response = await fetch(`http://localhost:3000/api/teddies/${params.get('id')}`);
    if(response.ok){

        const data = await response.json();
        //console.log(data);

        const produit = data;
        console.log(produit);
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
        
        console.log(produit.imageUrl)
        imgProduit.src = produit.imageUrl;



    }
};

focusTeddie();