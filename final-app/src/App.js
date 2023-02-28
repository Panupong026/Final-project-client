import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import Forms from "./components/Forms/Forms";
import Purchase from "./components/Purchase/Purchase";
import Report from "./components/Report/Report";
import PrintableReport from "./components/PrintableReport/PrintableReport";
import Table from "./components/Table/Table";

const App = () => {

  const [data, setData] = useState([]);
  const [selectedInsurance, setSelectedInsurance] = useState({});
  const [selectedId, setSelectedId] = useState();
  const [loggedIn, SetLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    customer_name_title: "",
    customer_firstname: "",
    customer_lastname: "",
    customer_id_no: "",
    customer_email: "",
    customer_birthday: "",
    customer_address_no: "",
    customer_subdistrict: "",
    customer_district: "",
    customer_province: "",
    start_cover_day: "",
    end_cover_day: "",
    premium: "",
    beneficial_info: "",
    insurance_info: "",
    insurance_id: "",
    agent_id: ""
  });
  const [printable, setPrintable] = useState(false);

  const handlePrint = () => {
    setPrintable(true);
    window.print();
    setPrintable(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/insurance')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // console.log(data)

  return (
    <BrowserRouter>
      {printable ? null : <Header
        SetLoggedIn={SetLoggedIn}
        loggedIn={loggedIn}
        selectedId={selectedId}
        formData={formData}
        setFormData={setFormData}
        printable={printable}
      />}
      <Routes>
        <Route path="/" element={
          <Main
            insurance={data}
            selectedInsurance={selectedInsurance}
            setSelectedInsurance={setSelectedInsurance}
          />
        } />
        <Route path="/main" element={
          <Main
            insurance={data}
            selectedInsurance={selectedInsurance}
            setSelectedInsurance={setSelectedInsurance}
          />
        } />
        <Route path="/signup" element={
          <Signup
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            loggedIn={loggedIn}
          />
        }
        />
        <Route path="/login" element={
          <Login
            loggedIn={loggedIn}
            SetLoggedIn={SetLoggedIn}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        }
        />
        <Route path="/product" element={
          <Product
            loggedIn={loggedIn}
            selectedInsurance={selectedInsurance}
          />
        }
        />
        <Route path="/forms" element={
          <Forms
            selectedInsurance={selectedInsurance}
            formData={formData}
            setFormData={setFormData}
            loggedIn={loggedIn}
            selectedId={selectedId}
          />
        }
        />
        <Route path="/purchase" element={
          <Purchase
            selectedInsurance={selectedInsurance}
          />
        }
        />
        <Route path="/table" element={
          <Table
          selectedInsurance={selectedInsurance}
          formData={formData}
          loggedIn={loggedIn}
          selectedId={selectedId}
          />
        }
        />
        <Route path="/report" element={
          printable ?
            <PrintableReport
              selectedInsurance={selectedInsurance}
              formData={formData}
              setFormData={setFormData}
              loggedIn={loggedIn}
              selectedId={selectedId}
              handlePrint={handlePrint}
              printable={printable}
              setPrintable={setPrintable}
            /> :
            <Report
              selectedInsurance={selectedInsurance}
              formData={formData}
              setFormData={setFormData}
              loggedIn={loggedIn}
              selectedId={selectedId}
              handlePrint={handlePrint}
              printable={printable}
              setPrintable={setPrintable}
            />
        }
        />
      </Routes>
      {printable ? null : <Footer
        printable={printable} />}
    </BrowserRouter>
  );
}

export default App;
