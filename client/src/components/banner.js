import React from "react";
import logout from "../actions/logout";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

const Banner = () => {
      const { user, setUser } = useUser();
      const navigate = useNavigate();

  const logOut = async () => {
    const { success } = await logout();
    if (success) setUser(null);
    else window.alert("Error, could not log out");
    navigate("/");
};
  return (
    <div>
        <div className="colorBanner">
            <nav class="navbar navbar-light " >
                <div class="container-fluid justify-content-evenly align-bottom">
                    <h5 className="text-white">Evalúa</h5>
                    <p className="text-white">mis evaluaciones</p>
                    <button className="text-white" onClick={logOut}>cerrar sesión</button>
                    <p className="text-white">hora usuario</p>
                </div>
            </nav>
        </div>
    </div>
  );
};

export default Banner;
