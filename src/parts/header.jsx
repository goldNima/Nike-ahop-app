import '../App.css';
import { useNavigate } from 'react-router-dom';

import logo from '../logo/Logo.png'
import search from '../logo/search.png'
import wishlish from '../logo/wishlish.png'
import login from '../logo/login.png'
import bag from '../logo/bag.png'

export function Header (){

    const navigate = useNavigate();

    const cart = () =>{
        navigate('/Cart');
    }
    const log = () =>{
        navigate('/Log');
    }
    const Home = () =>{
        navigate ('/')
    }
    const Err = () =>{
        navigate ('/404')
    }
    
    return (
        <div>
            <div className='header'>
                <img className='logo-header' src={logo}></img>

                <div className='btn-header'>
                <h4 onClick={Home} id='btn-header' className='btn-header1'>Home</h4>
                <h4 onClick={Home} id='btn-header' className='btn-header2'>Shop</h4>
                <h4 onClick={Home} id='btn-header' className='btn-header3'>Products</h4>
                <h4 onClick={Err} id='btn-header' className='btn-header4'>Pages</h4>
                <h4 id='btn-header' className='btn-header5'>Blog</h4>
                <h4 onClick={Err} id='btn-header' className='btn-header6'>Elements</h4>
                </div>

                <img onClick={Err} className='logo-header2' src={search}></img>
                <img onClick={Err} className='logo-header2' src={wishlish}></img>
                <img onClick={log} className='logo-header2' src={login}></img>
                <img onClick={cart} className='logo-header2' src={bag}></img>

            </div>
        </div>
    )
}