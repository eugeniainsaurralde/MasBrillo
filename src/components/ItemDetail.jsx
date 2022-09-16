import React from "react";
import ItemCount from "./ItemCount";
import "./style.css";

const ImagesProductos= require.context('../components/Pictures',true)

const ItemDetail= ({detail})=>{

    return(
            <div className="card mb-3 border-danger" style={{maxWidth: 740}}>
                <div className="row g-0">
                    <div className="col-md-6">
                       {/*  <img src= {ImagesProductos(`./${detail.id}.jpg`)} className="img-fluid rounded-start" alt={detail.nombre}/> */}
                       <img src= {ImagesProductos("./1.jpg")} className="img-fluid rounded-start imagenesProductos" alt={detail.nombre}/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h2 className="card-title text-center">{detail.nombre}</h2>
                            <p className="card-text text-center">{detail.descripcion}</p>
                            <p className="card-text text-center"><small className="text-muted">{detail.marca}</small></p>
                            <p className="card-text text-center">${detail.precio}</p>
                            <ItemCount stock={detail.stock} initial= {1} onAdd={0}/>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default ItemDetail