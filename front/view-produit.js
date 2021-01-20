
let imgProduit = document.getElementById('img-produit');
let descriptionProduit = document.getElementById('description-produit');
let colorSelect = document.getElementById('color-produit');
let nameProduit = document.getElementsByClassName('name-produit');
let priceProduit = document.getElementById('price-produit');
const buttonAddPanier = document.querySelector('.add-panier');


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
        buttonAddPanier.id = produit._id;
        buttonAddPanier.addEventListener('click', event => {

            sessionStorage.setItem('data', JSON.stringify(produit));
            console.log(JSON.parse(sessionStorage.getItem('data')));
            //window.location.href = './pages/panier.html';
        });
    }
};

focusTeddie();
localStorage.clear

console.log(localStorage.length)









/* let products = [];
                            if(localStorage.getItem('products')){
                                products = JSON.parse(localStorage.getItem('products'));
                            }else{
                                for(i = 0; i > products.length; i++){
                                    if(dataId === products[i].id){
                                        products[i].quantity += 1; 
                                    }
                                    
                                }
                            }
                            products.push({'name': dataName, 'productId' : dataId, 'quantity' : '1', 'price': dataPrice,});
                            localStorage.setItem('products', JSON.stringify(products));
                        });

                        */