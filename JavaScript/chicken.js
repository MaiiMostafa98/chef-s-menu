
var chicken = [];
var chickenReq = new XMLHttpRequest();
document.querySelector('.row').innerHTML ='<h4 class="text-center h1 text-danger">Loading...</h4>';
chickenReq.open( 'get' , 'https://forkify-api.herokuapp.com/api/v2/recipes?search=chicken' );
chickenReq.send();
chickenReq.addEventListener( 'loadend' , function(){
    if( chickenReq.status == 200 )
    {
       let res = JSON.parse(chickenReq.response);
        chicken = res.data.recipes;
       displaychickenRecipes();
    }
    else
    {
       document.querySelector('.row').innerHTML=`<h1>ERROR</H1>`
    }
} );

function displaychickenRecipes(){

    var cartoona = '';

    for( var i = 0 ; i < chicken.length ; i++)
    {
        cartoona += `
        
         <div class=" col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
               <img src="${chicken[i].image_url}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body">
            <h5 class="card-title">${chicken[i].title}</h5>
            <p class="card-text">${chicken[i].publisher}</p>
            </div>
        </div>
        </div>

        `
    }

    document.querySelector('.row').innerHTML= cartoona ;

}