document.querySelector('.navbar').innerHTML = `

  <div class="container">

    <!-- Logo -->
    <a class="navbar-brand fw-bold fs-4 text-white" href="index.html"> Chef’s Menu</a>

    <!-- Toggle button (mobile) -->
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon "></span>
    </button>

    <!-- Navbar links + search -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">

        <!-- Home -->
        <li class="nav-item">
          <a class="nav-link fs-5 text-white" href="index.html">Home</a>
        </li>

        <!-- Category Dropdown -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5 text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="breakfast.html">Breakfast</a></li>
            <li><a class="dropdown-item" href="dessert.html">Dessert</a></li>
            <li><a class="dropdown-item" href="pizza.html">Pizza</a></li>
            <li><a class="dropdown-item" href="pasta.html">Pasta</a></li>
            <li><a class="dropdown-item" href="beef.html">Beef</a></li>
            <li><a class="dropdown-item" href="chicken.html">Chicken</a></li>
          </ul>
        </li>

        <!-- Search Input -->
        

      </ul>
    </div>

  </div>


`;

// var searchInput = document.querySelector('.form-control');
// var recipes = [];


// searchInput.addEventListener('keyup', function () {
//   let query = searchInput.value.trim();

//   if (query.length > 2) {
//     searchRecipes(query);
//   }
// });


// function searchRecipes(keyword) {
//   var req = new XMLHttpRequest();
//   req.open( 'GET', `https://forkify-api.herokuapp.com/api/v2/recipes?search=${keyword}` );
//   req.send();

//   req.addEventListener('load', function () {
//     if (req.status === 200) {
//       let res = JSON.parse(req.response);
//       recipes = res.data.recipes;
//       displayRecipes();
//     } else {
//       document.querySelector('.row').innerHTML =
//         '<h4 class="text-center text-danger">No results found</h4>';
//     }
//   });
// }


// function displayRecipes() {
//   var cartoona = '';

//   for (let i = 0; i < recipes.length; i++) {
//     cartoona += `
//       <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//         <div class="card h-100">
//           <img src="${recipes[i].image_url}" class="card-img-top img-fluid" alt="">
//           <div class="card-body">
//             <h5 class="card-title">${recipes[i].publisher}</h5>
//             <p class="card-text">${recipes[i].title}</p>
//           </div>
//         </div>
//       </div>
//     `;
//   }

//   document.querySelector('.row').innerHTML = cartoona;
// }
