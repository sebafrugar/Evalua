import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="colorBanner">
            <nav class="navbar navbar-light " >
                <div class="container-fluid justify-content-evenly align-bottom">
                    <h5 className="text-white">Evalúa</h5>
                    <p className="text-white">Smaller button</p>
                </div>
            </nav>
        </div>
        <div>
            <Link to={"/main"}>Main</Link><br></br>
            <Link to={"/detalle"}>detalle</Link><br></br>
            <Link to={"/registerLogin"}>Registro y login</Link>
        </div>    
    </div>
  );
};

export default Home;
