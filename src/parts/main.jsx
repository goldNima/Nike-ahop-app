import '../App.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '../javascript/cartSlice';
import { useNavigate } from 'react-router-dom';

import { Information } from '../information/info-main';

import telegram from '../logo/icons8-telegram-24.png'
import instagram from '../logo/icons8-insta-48.png'
import number from '../logo/icons8-phone-50.png'
import location from '../logo/icons8-location-50.png'

import AOS from 'aos'
import 'aos/dist/aos.css';

export const Main = ()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleAddToCart = (information)=>{
        dispatch(addToCart(information));
        navigate('/Cart')
    }
    
    return (
        <div>
            <div className='main'>
                {Information.map (information =>(
                    <>
                    <p className='info-main'>{information.info}</p>
                    <img alt='img' className='img-logo-main' src={information.logo}></img>
                    <img alt='img' data-aos="fade-up" className='img-main' src={information.img}></img>
                    <h4 className='price-main'> Price : {information.price} $</h4>
                    <button onClick={()=> handleAddToCart(information)} className='btn'>Shop now</button>
                    </>
                ))}
                <div className='footer'>
                    <h2 data-aos="fade-top" className='title-footer'>I hope you had a good purchase :)</h2>
                    <br></br>
                    <h4 className='text-footer'>Follow us in social media :</h4>
                    <br></br>
                    <img alt='img' className='img-footer' src={telegram}></img>
                    <img alt='img' className='img-footer' src={instagram}></img>
                    <br></br>
                    <img alt='img' className='img-location' src={location}></img>
                    <h5 className='text-location'>Tehran</h5>
                    <br></br>
                    <img alt='img' className='img-number' src={number}></img>
                    <h5 className='text-number'>09360000000</h5>
                </div>
            </div>
        </div>
    )
}
AOS.init();
