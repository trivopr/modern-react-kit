import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = (props) => {

    return (
        <>
            <div className="lds-ripple"><div></div><div></div></div>
        </>
    )
}

export default LoadingSpinner;
