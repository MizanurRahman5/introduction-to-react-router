import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const user = useLoaderData();
    return (
        <div>
            <h1>Userr {user.length}</h1>
        </div>
    );
};

export default User;