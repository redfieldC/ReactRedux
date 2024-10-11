import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
const Home = (props) => {
  console.log('PROPS in Home component---> ',props);
  
  return (
    <>
    <CiShoppingCart className='add-to-cart' />
      <div className='cart-container'>
        <div className='img-container'>
          {/* <img src="/assets/shoes.jpg" alt="" style={{height:'300px' , width:'300px'}}/> */}
          <img src="/assets/shoes.jpg" alt="" />
        </div>
        <div className="text-container">
          <span>Men's Shoes</span><br />
          <span>Price: $50-/</span>
        </div>
        <div className='btn-container'>
          <button onClick={()=>props.addToCardHandler({product:'Shoes',price:'100$'})}>Addd To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Home