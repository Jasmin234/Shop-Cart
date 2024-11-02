import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name :'cart',
    initialState :[], // ye array use hota hai when we add items in cart we push into this array or when we remove items we pop from this array
    //this array is updated by state 
    reducers :{
        //reducers function takes 2 parameter one is -->state, and other is--> actions
        add : (state,action)=>{
            state.push(action.payload) 
            //action.payload --> shows jo bhi ham parameter mein kuchh input send kie honge ye reducer function ko,, jesse product component mein send kie hein 
        },
        remove : (state,action)=>{
            //can remove items using filtering method 
            //Like jab id same hoga as input parameter woh filter out hoga 
            return state.filter((item) => item.id !== action.payload)
        },

    },
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;
