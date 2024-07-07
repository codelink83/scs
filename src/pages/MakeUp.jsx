import React, { useState } from 'react'
import Item from '../compnents/Item'
import { Link } from 'react-router-dom'
import { all_product } from '../assets/Product'
import ExploreMenu from '../compnents/ExploreMenu'
import ItemDisplay from '../compnents/ItemDisplay'
const MakeUp = (props) => {
  const [category, setCategory] = useState("All")
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
            <Link className="nav-link" to="/make-up">
              MAKE UP
            </Link>
          </p>
        </div>
        <h1>MAKE UP</h1>
      </div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <ItemDisplay category={category}/>
    </>
  )
}

export default MakeUp
