import React from 'react'; //imr é o atalho
import './Button.css';

const Button = ({children, onClick}) => { //sfc é o atalho
    return ( 
        <>
            <button onClick={onClick} className='button'>
                {children}
            </button>
        </>
     );
}
export default Button;