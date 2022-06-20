import { configureStore } from '@reduxjs/toolkit'
import ShoppingSlice from './ShoppingSlice'

export default configureStore({
    reducer:{
        ShoppingReducer: ShoppingSlice
    }
})