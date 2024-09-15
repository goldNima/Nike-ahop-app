import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state , action)=>{
            state.items.push(action.payload)
            state.totalAmaunt = state.items.reduce((total , item)=> total + item.price, 0)
        },
        removeItemFromCart: (state , action)=>{
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1){
                state.items.splice(index,1)
            }
            state.totalAmaunt = state.items.reduce((total , item)=> total + item.price, 0)
        }
    }
});

export const {addToCart , removeItemFromCart}  = cartSlice.actions;
export default cartSlice.reducer;