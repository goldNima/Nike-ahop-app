import '../App.css';

import React from 'react';

import { useSelector , useDispatch } from 'react-redux';
import { removeItemFromCart } from '../javascript/cartSlice';

import shoes from '../images/shoes1.jpg'
import logoDelete from '../logo/Trash Can.png'


export const Cart = ()=>{

    const dispatch = useDispatch()
    const cartItem = useSelector((state)=> state.Cart.items)
    const totalAmaunt = useSelector((state)=> state.Cart.totalAmaunt)

    const handleRemoveItemCart = (id)=>{
        dispatch(removeItemFromCart(id))
    }

    return (
        <div>
            <div className='cart'>
                <h1 className='title-cart'>Shopping Cart ...</h1>
                {cartItem.map((item)=>(
                    <div className='shops-cart'>
                    <img alt='img' className='img-cart' src={item.img}></img>
                    <h3 className='name-items-cart'>Nike shoes</h3>
                    <h4 className='price-item-shop'>{item.price} $</h4>
                    <img alt='img' onClick={()=> handleRemoveItemCart(item.id)} className='delete-btn-shop-cart' src={logoDelete}></img>
                </div>
                ))}
                <h3 className='total'>total price : {totalAmaunt} $</h3>
            </div>
        </div>
    )
}
