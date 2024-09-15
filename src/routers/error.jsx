import '../App.css';

import imgError from '../logo/icons8-error-64.png'

export function Error (){
    return (
        <div>
            <div className='error'>
                <h1>Error 404</h1>
                <h3>Not found !</h3>
                <img alt='img' className='Error-img' src={imgError}></img>
            </div>
        </div>
    )
}
