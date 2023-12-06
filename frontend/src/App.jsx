import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import AdminLogin from "./components/AdminLogin.jsx";
import BookPage from "./components/BookPage.jsx";
import AddBook from "./components/AddBook.jsx";
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/home" Component={Home}></Route>
        <Route path="/" Component={Login} ></Route>
        <Route path="/signup" Component={Signup} ></Route>
        <Route path="/admin" Component={AdminLogin}></Route>
        <Route path="/book/:id" Component={BookPage}></Route>
        <Route path="/add-book" Component={AddBook}></Route>
      </Routes>
    </>
  );
}

export default App;
