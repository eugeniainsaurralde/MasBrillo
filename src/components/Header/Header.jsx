import React from "react";
import {NavLink} from "react-router-dom";
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
                            <NavLink to='/servicios'>Servicios Disponibles</NavLink>
                            <ul>
                                <li><NavLink to='/servicios/pestañas'>Pestañas</NavLink></li>
                                <li><NavLink to='/servicios/cejas'>Cejas</NavLink></li>
                                <li><NavLink to='/servicios/unas'>Uñas</NavLink></li>
                                <li><NavLink to='/servicios/depilacion'>Depilacion</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to='/cuidados'>Cuidados</NavLink></li>
                        <li><NavLink to ={"/carrito"}>Carrito</NavLink></li>
                        <li><NavLink to='/contactame'>Contactame</NavLink></li>
                        <li><NavLink to='/aboutUs'>About Us</NavLink></li>   
                    </ul>
                </div>
                <ImagenesContainer img= {carritoIcono}/>
            </nav>
        </header>    
    )
}

export default Header;