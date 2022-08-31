import React from "react";

const Header= () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                     <a class="navbar-brand">
                        <img src="Imagenes/logoMasBrillo.jpg" alt="logo" width="30" height="24"/>
                    </a>
                </div>
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Servicios Disponibles
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Pestañas</a></li>
                            <li><a class="dropdown-item" href="#">Cejas</a></li>
                            <li><a class="dropdown-item" href="#">Uñas</a></li>
                            <li><a class="dropdown-item" href="#">Depilacion</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Cuidados</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Precios</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contactame</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                        </li>
                       
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;