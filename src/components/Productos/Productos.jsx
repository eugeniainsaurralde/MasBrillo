import React from "react";

const Productos= ({items})=>{
    const{
        stock
    }= items;

    return(
        <div>
            {
                stock.map( (e)=>{
                    return <li key={e.id}>{e.nombre},{e.precio},{e.color}</li>
                })
            }
        </div>
    )
}

export default Productos;

