import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory()

    return (
        <p>Content not found, <button onClick={() => history.goBack()}>Go Back</button></p>
    );
};

export default NotFound;