import Index from './components/pages/Index';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Index}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/profile" Component={Profile}/>
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
