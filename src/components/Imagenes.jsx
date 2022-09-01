import React from "react";
import "./Header/Header.css"
const Imagenes = (props) => {
    
    const{
        img
    }= props;

    return(
        <div className="container__img">
            <a href="">
                <img src={img} alt="logo"/>
             </a>
       </div>
    )
        
    
}

export default Imagenes;