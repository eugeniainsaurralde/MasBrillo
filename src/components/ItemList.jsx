import React from "react";
import Item from "./Item";

const ImagesProductos= require.context('../components/Pictures',true)

const ItemList= ({items})=>{
    return(
        <div className="row">
            {items.map(item => (
                    <div key={item.id} className="col-md-4 py-3">
                        <Item id={item.id} nombre={item.nombre} 
                        descripcion={item.descripcion} marca={item.marca} precio={item.precio} 
                        imagen={ImagesProductos(`./${item.id}.jpg`)} stock={item.stock}/>
                    </div>) 
           )}
        </div>
    )
}

export default ItemList