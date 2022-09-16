import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { Productos } from "./Productos";

const ItemDetailContainer= ()=>{
    const [detail, setDetail] = useState({});
    useEffect(()=>{
        const promesa= new Promise((resolve,reject)=>{ 
            const producto = Productos.find((prod)=> prod.id === 1)
            setTimeout(()=>{
                resolve(producto);
            },2000);
        });

        promesa.then((resultado)=>{
            setDetail(resultado);
        });
    },[]);

    return(
        <div className="container">
            <ItemDetail detail={detail}/>
        </div>
    )
}

export default ItemDetailContainer;