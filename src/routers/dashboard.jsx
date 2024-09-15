import '../App.css'

import store from '../logo/bag.png'
import home from '../logo/icons8-home-50.png'
import profile from '../logo/icons8-male-user-24.png'

import { useNavigate } from 'react-router-dom'

export function Dashboard (){

    const navigate = useNavigate();

    const Home = () =>{
        navigate ('/')
    }
    const cart = () =>{
        navigate('/Cart');
    }

    const name = localStorage.getItem('name');
    const lastname = localStorage.getItem('lastname');
    const password = localStorage.getItem('password')

    return (
        <div>
            <div className='dashboard'>
                <div className='left-dashboard'>
                    <h1 className='title-dashboard'>Dashboard</h1>
                    <br></br>
                    <img onClick={Home} className='logo-dashboard-left1' src={home}></img>
                    <br></br>
                    <img onClick={cart} className='logo-dashboard-left2' src={store}></img>
                </div>
                <div className='right-dashboard'>
                    <img className='img-right-prof' src={profile}></img>
                    <h3 className='info-user'>User Name : {name}</h3>
                    <h3 className='info-user'>User lastname : {lastname}</h3>
                    <h3 className='info-user'>USer password : {password}</h3>
                </div>
            </div>
        </div>
    )
}