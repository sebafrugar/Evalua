import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Main from './views/Main';
import Detalle from './views/Detalle';
import RegisterLogin from './views/RegisterLogin';
import { UserProvider } from './contexts/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <div className="header-container">
            <div className='header'>
              <h1>Evalúa</h1>
              <nav>
                <Link to={"/"}>Inicio</Link>
                <Link to={"/main"}><i className="fa-solid fa-magnifying-glass"></i> Evaluaciones</Link>
                <Link to={"/registerLogin"}>Inicia sesión / Regístrate</Link>
              </nav>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/main" element={<Main></Main>} />
            <Route path="/detalle" element={<Detalle></Detalle>} />
            <Route path="/registerLogin" element={<RegisterLogin></RegisterLogin>} />
          </Routes>
        </Router>
        <footer>
          Todos los derechos reservados © 2022
        </footer>
      </UserProvider>
    </div>
  );
}

export default App;
