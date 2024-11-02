import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../component/CartItem'

const Cart = () => {

    //kesse pata chalega ki cart empty haii ya nehi --> initialState in slice se 
  const {cart} = useSelector((state) => state)
  // console.log("Printing cart", cart)

  const [totalAmount, setTotalAmount] = useState(0)

  //to accumulate price of the cart items we can use reduce function, and we want to render or update ui when we add items in cart or remove items from cart 
  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc, curr) =>  acc + curr.price , 0))
  }, [cart])

  return (
    <div className='flex items-center max-w-6xl mx-auto '>
        {
          cart.length > 0 ? 
                (<div className='flex max-w-6xl gap-52'>

                  <div className=''>

                    {
                      cart.map ((item, index) => {
                        return <CartItem key = {item.id} item ={item} itemIndex ={index}/>
                      })
                    }

                  </div>

                    <div className='flex flex-col items-start gap-y-4 max-w-3xl mt-9'>
                      <div className='uppercase text-green-700 text-xl font-semibold'>Your Cart</div>
                      <div className='uppercase text-green-700 text-6xl font-bold'>Summary</div>
                      <p className='text-gray-900 font-semibold text-left truncate mt-1 w-full'>
                        <span>Total Items: {cart.length}</span>
                      </p>
                      <div className='flex flex-col items-start gap-y-3'>
                        <p className='text-gray-900 font-semibold text-left truncate mt-1 w-full'>
                          Total Amount:<span className='text-green-600 font-semibold '>${totalAmount}</span>
                        </p>
                        <button
                          className='text-white border-2 border-gray-700 rounded-full font-semibold 
                          p-2 px-5 uppercase bg-green-600
                          hover:bg-gray-700
                          hover:text-white transition duration-300 ease-in'>Checkout Now</button>
                        
                      </div>

                    </div>
          

                  

                </div>) : 

               (<div className="flex flex-col justify-center items-center h-[100vh] w-[100vh] mx-auto gap-3">
                <h1 className='font-bold text-slate-800 text-3xl'> Cart Empty</h1>
                <NavLink to='/'>
                  <button 
                  className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
                          p-2 px-5 uppercase bg-green-600
                          hover:bg-gray-700
                          hover:text-white transition duration-300 ease-in'>
                    Shop Now
                  </button>
                </NavLink>
              </div>)
    
        }

    </div>
  )
}

export default Cart