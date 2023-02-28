import React from "react";
import { Navbar, Nav, Container, Image, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        navigate("/login");
      };

    const handleBuy = (e) => {
        navigate("/forms");
      };

    let lost
    if (props.selectedInsurance.lost === true) {
        lost = "cover"
    } else {
        lost = "Not cover"
    }

    let button
    if (props.loggedIn == true) {
        button = <button className="product-link" onClick={handleBuy}>Buy</button>
    } else {
        button = <button className="product-link" onClick={handleLogIn}>Login to buy</button>
    }

    return (
        <div className="product-page">

                <h1 className="product-title">{props.selectedInsurance.name}</h1>
                <div className="product-info">
                    <ul>
                        class: {props.selectedInsurance.coverage_class}<br />
                        Price: {props.selectedInsurance.price}<br />
                        Car coverage: {props.selectedInsurance.car_coverage}<br />
                        Medicine coverage: {props.selectedInsurance.medicine_coverage}<br />
                        Third party coverage: {props.selectedInsurance.third_party_coverage}<br />
                        Lost coverage: {lost}<br />
                        More detail: <a href={props.selectedInsurance.urls}>Click here</a><br />
                    </ul>
                </div>
                {button}
        </div>
    );
};

export default Product;
