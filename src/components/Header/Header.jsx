import React from "react";
import "./Header.css"
import ImagenesContainer from "../Imagenes";
import logo from '../Pictures/logoMasBrillo.jpg'
import carritoIcono from '../Pictures/carritoIcono.jpg'

const Header= () =>{
    return(
        <header>
            <nav className="header__nav">
                <ImagenesContainer img= {logo} />
                <div>
                    <ul className="header__items">
                        <li>
                            <a href="#">Servicios Disponibles</a>
                            <ul>
                                <li><a href="#">Pestañas</a></li>
                                <li><a href="#">Cejas</a></li>
                                <li><a href="#">Uñas</a></li>
                                <li><a href="#">Depilacion</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Cuidados</a></li>
                        <li><a href="#">Precios</a></li>
                        <li><a href="#">Contactame</a></li>
                        <li><a href="#">About Us</a></li>   
                    </ul>
                </div>
                <ImagenesContainer img= {carritoIcono}/>
            </nav>
        </header>    
    )
}

export default Header;