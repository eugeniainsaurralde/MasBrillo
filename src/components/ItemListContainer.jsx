import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer= ()=>{
    const [items, setItems]  = useState([]);
    useEffect(()=>{
        const Productos = [
            {"id":1, "nombre":"Delineador", "descripcion":"delineador waterproof negro","marca":"dior", "precio":"3000", "imagen":"../components/Pictures/1.jpg","stock":"10"},
            {"id":2, "nombre":"Rimel", "descripcion":"rimel waterproof negro volumen max","marca":"natura", "precio":"1500", "imagen":"../components/Pictures/2.jpg","stock":"15"},
            {"id":3, "nombre":"Lash shampoo", "descripcion":"shampoo para extenciones de pestañas","marca":"avon", "precio":"2500", "imagen":"../components/Pictures/3.jpg","stock":"7"},
            {"id":4, "nombre":"Labial", "descripcion":"labial rojo 24hs asegurado","marca":"kyle", "precio":"3200", "imagen":"../components/Pictures/4.jpg","stock":"25"},
            {"id":5, "nombre":"Base", "descripcion":"base waterproof diversos tonos","marca":"dior", "precio":"4500", "imagen":"../components/Pictures/5.jpg","stock":"18"},  
            {"id":6, "nombre":"Antifaz gel", "descripcion":"antifaz para descanso y descongestion","marca":"natuflex", "precio":"3800", "imagen":"../components/Pictures/6.jpg","stock":"8"}
        ];
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