import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, makeUp_product, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="cart container">
      <div className="cart-items">
        <div className="cart-items-title d-flex justify-content-around align-items-center mt-5">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="" />
        {makeUp_product?.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div className="container ">
                <div className="mb-2 d-flex justify-content-around align-items-center" key={index}>
                  <img className="img" style={{width:"80px"}} src={item.image} alt="" />
                  <p style={{marginLeft:"-80px"}}>{item.name}</p>
                  <p>PKR {item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>PKR {item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2">
            <h2>Cart Totals</h2>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <p>Sub Total</p>
              <p>RS: {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center mt-2">
              <p>Delevery Fee</p>
              <p>RS: {getTotalCartAmount() === 0 ? 0 : 250}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <b>Total</b>
              <b>
                RS: {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 250}
              </b>
            </div>
            <button
              className="btn btn-danger mt-3"
              onClick={() => navigate("/")}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="col-md-2">
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input d-flex justify-content-between align-items-center">
              <input
                className="form-control"
                type="text"
                placeholder="promo code"
              />
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
