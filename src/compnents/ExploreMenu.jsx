import React from 'react'
import { MakeUp_menuList } from '../assets/MakeUp'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <>
    
    <div className='d-flex justify-content-center  gap-5 bg-light p-3'>
      
        {MakeUp_menuList.map((item,index)=>(
            <div className='' onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                <h6  className='' id="btn">{item.menu_name}</h6>
            </div>
        ))}
      
    </div>
    </>
  )
}

export default ExploreMenu
