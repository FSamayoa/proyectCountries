import React from 'react';

const FormButton = ({ type, text, disabled, onClick }) => {
    return (
        <button type={type} disabled={disabled} onClick={onClick}>
            {text}
        </button>
    );
};

export default FormButton;
