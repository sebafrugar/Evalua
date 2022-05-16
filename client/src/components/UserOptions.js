import React from "react";
import logout from "../actions/logout";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import Misevaluaciones from "../views/Misevaluaciones";
import { Link } from "react-router-dom";

const UserOptions = () => {
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
        <div>
            <nav>
                <div>
                    <Link to="/misevaluaciones">Mis Evaluaciones proceso</Link>
                    <button onClick={logOut}>Cerrar sesión</button>
                </div>
            </nav>
        </div>
    </div>
  );
};

export default UserOptions;
