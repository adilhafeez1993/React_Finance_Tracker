import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />

            <Route path="/Signup" element={user ? <Home /> : <Signup />} />

            <Route path="/Login" element={user ? <Home /> : <Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
