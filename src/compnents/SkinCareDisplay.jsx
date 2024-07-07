import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import Item from './Item';

const SkinCareDisplay = ({category}) => {
    const {all_product} = useContext(StoreContext);
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        {all_product?.map((item, i) => {
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
  )
}

export default SkinCareDisplay
