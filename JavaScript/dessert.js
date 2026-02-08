
var dessert = [];

var dessertReq = new XMLHttpRequest();

document.querySelector('.row').innerHTML ='<h4 class="text-center h1 text-danger">Loading...</h4>';

dessertReq.open( 'get' , 'https://forkify-api.herokuapp.com/api/v2/recipes?search=chocolate' );
dessertReq.send();
dessertReq.addEventListener( 'loadend' , function(){
    if( dessertReq.status == 200 )
    {
       let res = JSON.parse(dessertReq.response);
        dessert = res.data.recipes;
       displayDessertRecipes();
    }
    else
    {
       document.querySelector('.row').innerHTML=`<h1>ERROR</H1>`
    }
} );

function displayDessertRecipes(){

    var cartoona = '';

    for( var i = 0 ; i < dessert.length ; i++)
    {
        cartoona += `
        
         <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
               <img src="${dessert[i].image_url}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body">
            <h5 class="card-title">${dessert[i].title}</h5>
            <p class="card-text">${dessert[i].publisher}</p>
            </div>
        </div>
        </div>

        `
    }

    document.querySelector('.row').innerHTML= cartoona ;

}