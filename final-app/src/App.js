import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            <Header />
            <Login />
            <Footer />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
