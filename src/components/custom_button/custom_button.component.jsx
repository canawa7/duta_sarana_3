import React from 'react';

import './custom_button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'goggle-sign-in': ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;