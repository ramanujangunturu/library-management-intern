import { Routes, Route } from "react-router-dom";
import Login from  "./components/Login.jsx"
import Signup from "./components/Signup.jsx";
import "./index.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} ></Route>
        <Route path="/signup" Component={Signup} ></Route>
      </Routes>
    </>
  );
}

export default App;
