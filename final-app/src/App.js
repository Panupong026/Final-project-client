import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import Forms from "./components/Forms/Forms";
import Purchase from "./components/Purchase/Purchase";

const insurance = [
  { name: "TIP Premium plus", class: "1+", price: 16900 },
  { name: "TIP Up to mile", class: "1", price: 5000 },
  { name: "TIP Premium", class: "1", price: 14900 },
  { name: "TIP Shock Price", class: "1", price: 9000 },
  { name: "TIP 2+", class: "2", price: 7799 },
  { name: "TIP 3+", class: "3+", price: 6799 },
  { name: "TIP 3", class: "3", price: 1899 }
]


const App = () => {

  const [selectedInsurance, setSelectedInsurance] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main
              insurance={insurance}
              selectedInsurance={selectedInsurance}
              setSelectedInsurance={setSelectedInsurance}
            />
            <Footer />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Header />
            <Signup />
            <Footer />
          </>
        }
        />
        <Route path="/login" element={
          <>
            <Header />
            <Login />
            <Footer />
          </>
        }
        />
        <Route path="/product" element={
          <>
            <Header />
            <Product
              selectedInsurance={selectedInsurance}
            />
            <Footer />
          </>
        }
        />
        <Route path="/forms" element={
          <>
            <Header />
            <Forms
              selectedInsurance={selectedInsurance}
            />
            <Footer />
          </>
        }
        />
        <Route path="/purchase" element={
          <>
            <Header />
            <Purchase
              selectedInsurance={selectedInsurance}
            />
            <Footer />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
