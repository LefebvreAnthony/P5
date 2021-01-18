/*

// boucle pour chercher dans l'api touts les articles, et créer uen card pour chaque article 
const allTeddies = async function(){
    try {

        //recup tableau de l'api
        let response = await fetch("http://localhost:3000/api/teddies");
        if(response.ok){
            let data = await response.json();

            // pour tout les objets du tableau je veux que tu me créer une card avec telle ou telle classe
            for(let article of data ){
                
                const section = document.getElementById('articles');
                const articleClass = 'card';
                const btnClass = 'btn';
                const styleBtnBold = 'font-weight-bold';
                
                let newDiv = document.createElement('div');
                newDiv.classList.add('col-12', 'col-lg-6', 'mb-5')
                
                let newArticle = document.createElement('article');
                newArticle.classList.add(articleClass, 'bg-light','border-dark')
                
                let newImg = document.createElement('img');
                newImg.classList.add(`${articleClass}-img-top`);
                newImg.src = article.imageUrl;

                let newAside = document.createElement('aside');
                newAside.classList.add(`${articleClass}-body`);

                let newTitleCard = document.createElement('h3');
                newTitleCard.classList.add(`${articleClass}-title`);
                newTitleCard.innerText = `${article.name}`;
                
                let newBtnDetail = document.createElement('button');
                
                newBtnDetail.classList.add(btnClass, `${btnClass}-primary`, `${btnClass}-details-produit`, styleBtnBold);
                newBtnDetail.innerText = 'Details du Produit'
                
                let newBtnAddPanier = document.createElement('button');
                newBtnAddPanier.classList.add(btnClass, `${btnClass}-success`, styleBtnBold, 'float-right');
                newSpan = document.createElement('span');
                newSpan.classList.add('text-add-panier');
                newSpan.innerText = 'Ajouter au Panier';


                //add img svg
                let newSvg = document.createElement('svg');
                newSvg.classList.add('logo-add-panier');
                newSvg.setAttribute('role', 'img');
                newSvg.setAttribute('focusable', 'false');
                newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                newSvg.setAttribute('aria-hidden', 'true');
                newSvg.setAttribute('viewBox', '0 0 14 14');
                newSvg.style.fill = '#fff';
                let newPath = document.createElementNS('http://www.w3.org/2000/svg','path');
                newPath.setAttribute('d', `m 5.61538,11.153845 q 0,0.38221 -0.27043,0.65265 -0.27043,0.27043 -0.65264,0.27043 -0.38221,0 -0.65265,-0.27043 -0.27043,-0.27044 -0.27043,-0.65265 0,-0.38221 0.27043,-0.65264 0.27044,-0.27043 0.65265,-0.27043 0.38221,0 0.65264,0.27043 0.27043,0.27043 0.27043,0.65264 z m 6.46154,0 q 0,0.38221 -0.27043,0.65265 -0.27043,0.27043 -0.65264,0.27043 -0.38222,0 -0.65265,-0.27043 -0.27043,-0.27044 -0.27043,-0.65265 0,-0.38221 0.27043,-0.65264 0.27043,-0.27043 0.65265,-0.27043 0.38221,0 0.65264,0.27043 0.27043,0.27043 0.27043,0.65264 z M 13,3.307695 v 3.69231 q 0,0.17307 -0.11538,0.30649 -0.11539,0.13341 -0.29568,0.15505 l -7.52884,0.8798 q 0.007,0.0505 0.0324,0.15505 0.0252,0.10457 0.0433,0.19111 0.018,0.0865 0.018,0.15865 0,0.11539 -0.17308,0.46154 h 6.63461 q 0.1875,0 0.32452,0.13702 0.13702,0.13702 0.13702,0.32452 0,0.1875 -0.13702,0.32452 -0.13702,0.13702 -0.32452,0.13702 H 4.23072 q -0.1875,0 -0.32452,-0.13702 -0.13702,-0.13702 -0.13702,-0.32452 0,-0.10096 0.0793,-0.28486 0.0793,-0.18389 0.21274,-0.42908 0.13341,-0.2452 0.14783,-0.27404 L 2.93261,2.846155 H 1.461458 q -0.1875,0 -0.324519,-0.13702 Q 1,2.572115 1,2.384615 1,2.197115 1.137019,2.060095 1.274038,1.923075 1.461538,1.923075 H 3.30769 q 0.11539,0 0.20553,0.0469 0.0901,0.0469 0.14423,0.11178 0.0541,0.0649 0.0937,0.17668 0.0397,0.11178 0.0541,0.19111 0.0144,0.0793 0.0397,0.21274 0.0252,0.13341 0.0324,0.18389 h 8.66106 q 0.1875,0 0.32452,0.13702 0.13702,0.13702 0.13702,0.32452 z`);

                //add elements au DOM
                newSvg.append(newPath);
                newBtnAddPanier.append(newSvg);
                newBtnAddPanier.append(newSpan);
                newAside.append(newTitleCard);
                newAside.append(newBtnDetail);
                newAside.append(newBtnAddPanier);
                
                newArticle.append(newImg);
                newArticle.append(newAside);
                
                newDiv.append(newArticle);
                
                section.append(newDiv);
            }
        } else{
            console.error();('erreur ' + response.status);
        }
    } catch(e){
        console.log(e);
    }
}
allTeddies();

let detailsProduit = document.getElementsByClassName('btn-details-produit');
console.log(detailsProduit);

for( i=0; i < detailsProduit.length-1; i++){

    detailsProduit[i].addEventListener('click', function() {
        window.location.href ="index.html";
    });
}

*/



const buttonRedirect = document.getElementById('i');
const cardProduit = document.getElementById('produit-card');
const nameProduit = document.getElementById('nom-produit');
const imgProduit = document.getElementById('img-produit');
const mainProduit = document.getElementById('main-produit');
const buttonAddPanier = document.querySelector('.add-panier');
const url = "http://localhost:3000/api/teddies";

function allTeddies (){
    fetch(url)
        .then(response => {

            if (response.ok) {
                return response.json().then(data => {


                    //Boucle pour chaque objet dans l'api, créer un clone avec les informations de l'objet.
                    for (i = 0; i < data.length; i++) {
                        //console.log(cardProduit)
                        let dataId = data[i]._id;

                        nameProduit.innerText = data[i].name;
                        imgProduit.src = data[i].imageUrl;
                        buttonRedirect.id = dataId;
                        buttonAddPanier.dataset.id = dataId;

                        const addCard = cardProduit.cloneNode(true);
                        mainProduit.appendChild(addCard);


                        //Afficher la page detail produit avec le bon produit
                        const button = addCard.querySelector('.detail-button');
                        button.addEventListener('click', event => {
                            window.location.href = `./pages/produit.html?id=${event.target.id}`;
                        });


                    }
                    buttonAddPanier.addEventListener('click', event => {

                        sessionStorage.setItem('data', JSON.stringify(data));
                        console.log(JSON.parse(sessionStorage.getItem('data')));
                        //window.location.href = './pages/panier.html';
                    });
                });

            }
        });
}

allTeddies();
mainProduit.removeChild(cardProduit);
cardProduit.removeAttribute('id');
