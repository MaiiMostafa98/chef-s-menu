
var pizza = [];
var pizzaReq = new XMLHttpRequest();

document.querySelector('.row').innerHTML ='<h4 class="text-center h1 text-danger">Loading...</h4>';

pizzaReq.open( 'get' , 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza' );
pizzaReq.send();
pizzaReq.addEventListener( 'loadend' , function(){
    if( pizzaReq.status == 200 )
    {
       let res = JSON.parse(pizzaReq.response);
        pizza = res.data.recipes;
       displayPizzaRecipes();
    }
    else
    {
       document.querySelector('.row').innerHTML=`<h1>ERROR</H1>`
    }
} );

function displayPizzaRecipes(){

    var cartoona = '';

    for( var i = 0 ; i < pizza.length ; i++)
    {
        cartoona += `
        
         <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
               <img src="${pizza[i].image_url}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body">
            <h5 class="card-title">${pizza[i].title}</h5>
            <p class="card-text">${pizza[i].publisher}</p>
            </div>
        </div>
        </div>

        `
    }

    document.querySelector('.row').innerHTML= cartoona ;

}