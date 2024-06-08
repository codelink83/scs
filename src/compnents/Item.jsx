import React, { useContext } from "react";
import addIcon from '../assets/add_icon_white.png'
import removeIcon from '../assets/remove_icon_red.png'
import addIconGreen from '../assets/add_icon_green.png'
import { StoreContext } from "../context/StoreContext";



const Item = ({id,name,price,image}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
  return (
    <div className="container">
      <div className="card mb-5 shadow" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="img" />
        <div className="counter-icon">
        {
          
          !cartItems[id] ? <img className="add-white-icon" onClick={()=>addToCart(id)} src={addIcon} alt=""/>: <div className="counter">
            <img onClick={()=>removeFromCart(id)} src={removeIcon} alt="" />
            <h6>{cartItems[id]}</h6>
            <img onClick={()=>addToCart(id)} src={addIconGreen} alt="" />
          </div>
          
        }
        </div>
        <div className="card-body">
          <p className="card-text">{name}</p>
          <h6 className="card-text">{price} PKR</h6>
        </div>
      </div>
    </div>
  );
};

export default Item;
