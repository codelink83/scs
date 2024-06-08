import React from "react";
import { Link } from "react-router-dom";
import { all_product } from "../assets/Product";
import Item from "../compnents/Item";
import MenuList from "../compnents/MenuList";

const SkinCare = () => {
  return (
    <>
      <div className="hero">
        <div className="container text-start d-flex gap-3">
          <p>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="nav-link" to="/skin-care">
              SKIN CARE
            </Link>
          </p>
        </div>
        <h1>Skin Care</h1>
      </div>
      <MenuList />
      <h1 className="text-center m-5">Our Products</h1>
      <div className="container">
        <div className="row">
          {all_product?.map((item, i) => (
            <div className="col-3" key={i}>
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkinCare;
