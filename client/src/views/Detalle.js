import React from 'react';
import Banner from '../components/banner';
import { Link } from 'react-router-dom'

const Detalle = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Link to={"/"}>home</Link> <br></br>
                <Link to={"/detalle"}>detalle</Link><br></br>
                <Link to={"/registerLogin"}>Registro y login</Link>
            </div>

        </div>
    );
}

export default Detalle;
