import React from "react";

const Productos= (props)=>{
    const{
        stock
    }= props;

    return(
        <div>
            {
                stock.map( (e)=>{
                    return <li>{e.nombre},{e.precio},{e.color}</li>
                })
            }
        </div>
    )
}

export default Productos;