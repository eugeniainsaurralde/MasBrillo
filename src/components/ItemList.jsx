import React from "react";
import Item from "./Item";

const ImagesProductos= require.context('../components/Pictures',true)

const ItemList= ({items})=>{
    return(
        <div className="row">
            {items.map(item => (
                    <div key={item.id} className="col-md-4 py-3">
                        <Item id={item.id} nombre={item.nombre} 
                        imagen={ImagesProductos(`./${item.id}.jpg`)}/>
                    </div>) 
           )}
        </div>
    )
}

export default ItemList