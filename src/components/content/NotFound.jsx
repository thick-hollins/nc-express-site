import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory()

    return (
        <>
        <p>Content not found</p>
        <button className='white-button' onClick={() => history.goBack()}>Go Back</button>
        </>
    );
};

export default NotFound;