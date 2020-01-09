import React from 'react';
import './form_input.styles.scss';

const FormInput = (props) => (
    <div className='group'>
        <h3>{props.title}</h3>
        <input className='form-input'/>

    </div>
);

export default FormInput;