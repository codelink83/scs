import React, { useContext } from "react";
import Item from "./Item";
import { StoreContext } from "../context/StoreContext";
import { makeUp_product } from "../assets/MakeUp";

const ItemDisplay = ({ category }) => {
    const {makeUp_product} = useContext(StoreContext);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {makeUp_product?.map((item, i) => {
            if (category === "All" || category === item.category) {
              return (
                <div className="col-3" key={i}>
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ItemDisplay;
