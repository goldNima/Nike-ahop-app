import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import { Cart } from "../routers/cart";

const store = configureStore({
    reducer: {
        Cart: cartReducer,
    }
})

export default store;