import React from "react";
import "./style.css";


const Item= ({id, nombre,imagen})=>{
    return(
            <div className="card">
                <img src={imagen} className="card-img-top imagenesProductos" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                </div>
            </div>
    )
}

export default Item