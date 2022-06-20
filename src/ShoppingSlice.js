import { createSlice } from '@reduxjs/toolkit'


export const ShoppingSlice = createSlice ({
    name:'Shopping',
    initialState:{
        Shopping:[],
    },
reducers:{
    addShopping:(state, action) => {
        state.Shopping.push(action.payload)
    },
    delateShopping: (state, action) => {
        state.Shopping.splice(action.payload);
    },
    delateShopping1: (state, action) => {
        state.Shopping.splice(-1,1);
    },
   
  
}
})
// Action creators are generated for each case reducer function
export const { addShopping, delateShopping,delateShopping1} = ShoppingSlice.actions


export default ShoppingSlice.reducer