import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/Context";
import carritoIcono from "../Pictures/carritoIcono.jpg";

const CartWidget = () => {
    const {cartTotal, clear} = useContext(CartContext); 

    return (
        <div>
            <button type="button" className="btn-propio-secundario" title="Vaciar Carrito" onClick={()=> {clear()}}>
                <img src={} alt="Cesto" />
            </button>
            <Link to={"/cart"}>
                <button type="button" className=".btn-propio-secundario position-relative" title="Ir al Carrito">
                    <img src={carritoIcono} alt="Carrito" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill .btn-propio-secundario">{cartTotal()}</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget;