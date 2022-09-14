import React from "react";
import ItemCount from "./ItemCount";


const Item= ({id, nombre,descripcion,marca,precio,imagen,stock})=>{
    return(
            <div className="card">
                <img src={imagen} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center">{descripcion}</p>
                    <p className="card-text text-center">marca:{marca}</p>
                    <p className="card-text text-center">${precio}</p>
                    <ItemCount stock={stock} initial= {1} onAdd={0}/>
                </div>
            </div>
    )
}

export default Item