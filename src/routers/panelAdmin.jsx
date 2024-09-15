import '../App.css'

export function PanelAdmin (){

    const name = localStorage.getItem('name');
    const lastname = localStorage.getItem('lastname');
    const password = localStorage.getItem('password')

    return(
        <div>
            <div className='panel-Admin'>
                <h1 className='title-panel'>Panel Admin</h1>
                <h3 className='text-panel'>Users Information :</h3>

                <div className='info-panel-container'>
                    <h4 className='info-panel'>Name :</h4>
                    <h5 className='info-panel'>{name}</h5>
                    <h4 className='info-panel'>lastname :</h4>
                    <h5 className='info-panel'>{lastname}</h5>
                    <h4 className='info-panel'>password :</h4>
                    <h5 className='info-panel'>{password}</h5>
                </div>
            </div>

        </div>
    )
}