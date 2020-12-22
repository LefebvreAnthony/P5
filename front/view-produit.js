

let prod = async function(){
    let response = await fetch("http://localhost:3000/api/teddies");

if(response.ok){
    let data = await response.json();
    console.log(data);

    const norbet = data[0];
    console.log(norbet);

    let nomProd = document.getElementById('nomProduit');
    nomProd.innerText = data[0].name;

}
}
prod();

