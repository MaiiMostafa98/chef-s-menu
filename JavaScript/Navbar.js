document.querySelector('.navbar').innerHTML = `

  <div class="container">

    <!-- Logo -->
    <a class="navbar-brand fw-bold fs-4 text-white" href="index.html"> Chef’s Menu</a>

    <!-- Toggle button (mobile) -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
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
            <li><a class="dropdown-item" href="#">Pasta</a></li>
            <li><a class="dropdown-item" href="#">Beef</a></li>
            <li><a class="dropdown-item" href="#">Chicken</a></li>
          </ul>
        </li>

        <!-- Search Input -->
        <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
          <form class="d-flex">
            <input class="form-control" type="search" placeholder="Search..." aria-label="Search">
          </form>
        </li>

      </ul>
    </div>

  </div>


`;
