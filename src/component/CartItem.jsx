import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/slices/CartSlice'
import toast from 'react-hot-toast';


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch()

  const removeFromCart = ()=> {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className='flex mt-9 border-b-2 p-6 space-x-6 max-w-2xl	'>

          <div className='flex justify-center items-center mt-5'>
            <img src={item.image} alt='post images' className='h-[24] w-[700px] object-cover'/>
          </div> 

          <div className='flex flex-col space-y-10 '>       
            <div className='flex flex-col items-center w-full space-y-6 '>
              <h1 className='text-gray-900 font-semibold text-left truncate mt-1 w-full'>{item.title}</h1>
              <h1 className='w-full text-gray-800 font-medium text-[18px] text-left'>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
            </div>  

            <div className='flex justify-between items-center w-full mt-5 '>
              <p className='text-green-600 font-semibold text-xl '>${item.price}</p>

              <button className='bg-slate-400 rounded-lg p-1 text-2xl'
              onClick={removeFromCart}>
                <MdDelete />
              </button>
            </div>                
          </div>

      
    </div>
  )
}

export default CartItem