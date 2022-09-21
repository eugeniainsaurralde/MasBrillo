import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { Productos } from "../Productos";


const ItemListContainer= ()=>{
    const [items, setItems]  = useState([]);
    useEffect(()=>{
         const promesa= new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(Productos);
            },2000);
        });
 
        promesa.then((resultado)=>{
            setItems(resultado);          
        });
    }, []);

    return(
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer