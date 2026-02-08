
var pasta = [];
var pastaReq = new XMLHttpRequest();
document.querySelector('.row').innerHTML ='<h4 class="text-center h1 text-danger">Loading...</h4>';
pastaReq.open( 'get' , 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta' );
pastaReq.send();
pastaReq.addEventListener( 'loadend' , function(){
    if( pastaReq.status == 200 )
    {
       let res = JSON.parse(pastaReq.response);
        pasta = res.data.recipes;
       displaypastaRecipes();
    }
    else
    {
       document.querySelector('.row').innerHTML=`<h1>ERROR</H1>`
    }
} );

function displaypastaRecipes(){

    var cartoona = '';

    for( var i = 0 ; i < pasta.length ; i++)
    {
        cartoona += `
        
         <div class=" col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
               <img src="${pasta[i].image_url}" class="card-img-top img-fluid w-100" alt="...">
            <div class="card-body">
            <h5 class="card-title">${pasta[i].title}</h5>
            <p class="card-text">${pasta[i].publisher}</p>
            </div>
        </div>
        </div>

        `
    }

    document.querySelector('.row').innerHTML= cartoona ;

}