import React from "react";
import logout from "../actions/logout";
import { useUser } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";

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
                    <p>mis evaluaciones</p>
                    <button onClick={logOut}>Cerrar sesión</button>
                    <p>hora usuario</p>
                </div>
            </nav>
        </div>
    </div>
  );
};

export default UserOptions;
