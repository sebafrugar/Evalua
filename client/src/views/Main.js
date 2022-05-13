import React from 'react';
import UserOptions from '../components/UserOptions';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div>
                <UserOptions></UserOptions>
            </div>
            <div>
                <h3>Encuentra un establecimiento</h3>
            </div>

        </div>
    );
}

export default Main;
