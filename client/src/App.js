import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/main" element={<Main></Main>} />
            <Route path="/detalle" element={<Detalle></Detalle>} />
            <Route path="/registerLogin" element={<RegisterLogin></RegisterLogin>} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
