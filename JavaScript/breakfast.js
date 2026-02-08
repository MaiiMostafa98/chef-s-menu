
var breakfast = [];
var breakfastReq = new XMLHttpRequest();
breakfastReq.open( 'get' , 'https://forkify-api.herokuapp.com/api/v2/recipes?search=breakfast' );
breakfastReq.send();
breakfastReq.addEventListener( 'loadend' , function(){
    if( breakfastReq.status == 200 )
    {
       let res = JSON.parse(breakfastReq.response);
        breakfast = res.data.recipes;
       displayBreakFastRecipes();
    }
    else
    {
       document.querySelector('.row').innerHTML=`<h1>ERROR</H1>`
    }
} );

function displayBreakFastRecipes(){

    var cartoona = '';

    for( var i = 0 ; i < breakfast.length ; i++)
    {
        cartoona += `
        
         <div class=" col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
               <img src="${breakfast[i].image_url}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body">
            <h5 class="card-title">${breakfast[i].title}</h5>
            <p class="card-text">${breakfast[i].publisher}</p>
            </div>
        </div>
        </div>

        `
    }

    document.querySelector('.row').innerHTML= cartoona ;

}