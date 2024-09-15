import '../App.css';

import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import telegram from '../logo/icons8-telegram-24.png'
import instagram from '../logo/icons8-insta-48.png'
import website from '../logo/icons8-website-50.png'

import AOS from 'aos'
import 'aos/dist/aos.css';

export function Log (){

    const [name , setName] = useState('');
    const [lastname , setLastName] = useState('');
    const [password , setPassword] = useState('');

   // const [error , setError] = useState<string>('')
    const [errorname , setErrorname] = useState('')
    const [errorlastname , setErrorlastname] = useState('')
    const [errorpassword , setErrorpassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem('name' , name);
        localStorage.setItem('lastname' , lastname);
        localStorage.setItem('password' , password);

        if (name === "nima" && lastname === 'tajik' && password === 'panel'){
            navigate('/Admin')
            alert("Welcome to Admin Panel ...")
       }else if (name === ''){
            setErrorname("Fill the name input ...")
            navigate('/Log')
            alert("Error")
        }else if (lastname === ''){
            setErrorlastname("Fill the lastname input ...")
            navigate('/Log')
            alert("Error")
        }else if (password === ''){
            setErrorpassword("Fill the password input ...")
            navigate('/Log')
            alert("Error")
        }else if (name !== 'string' && lastname !== 'string' && password !== 'string'){
            setErrorpassword("Fill the inputs with string ...")
            navigate('/Log')
            alert("Error")
        }else{
            navigate('/Dashboard')
            alert("Information correctly saved ...")
        }

        setErrorname('');
        setErrorlastname('');
        setErrorpassword('');

    }

    

    return (
        <div>
            <div className='log-in'>
                <div data-aos="zoom-in" className='main-log-in'>
                    <form onSubmit={handleSubmit}>
                    <h1 className='title-log'>Welcom ...</h1>
                    <input className='input-log' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name :'></input>
                    {errorname && <p>{errorname}</p>}
                    <br></br>
                    <input className='input-log' type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='Enter your Lastname :'></input>
                    {errorlastname && <p>{errorlastname}</p>}
                    <br></br>
                    <input className='input-log' type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password : '></input>
                    {errorpassword && <p>{errorpassword}</p>}
                    <br></br>
                    <h4 className='text-log'>Follow us in :</h4>
                    <img alt='img' className='img-log' src={telegram}></img>
                    <img alt='img' className='img-log' src={instagram}></img>
                    <img alt='img' className='img-log' src={website}></img>
                    <br></br>
                    <button className='btn-log' type='submit'>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AOS.init();
