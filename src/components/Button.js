import React from 'react';
import PropTypes from 'prop-types';


const Button = props => {
    return(
        <div>
            <button
            className= {`${props.className} 
                         ${props.disable ? "cursor-not-allowed" : "hover: green"}`}
            {...props}
            >
                 {props.children} 
            </button>
        </div>
    )
}
export default Button;