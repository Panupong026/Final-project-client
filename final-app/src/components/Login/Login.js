import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = (props) => {

    const navigate = useNavigate();

    // console.log(props);
    const [account, setAccount] = useState({
        username: "",
        password: ""
    })

    const handleProfileChange = (e) => {
        setAccount({
            ...account,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8080/login", account)
            .then((res) => {
                console.log(res);
                props.SetLoggedIn(true)
                props.setSelectedId(res.data)
                navigate("/main");
            })
            .catch((err) => {
                console.log(err);
                console.log(account);
                alert(err);
            });
    }

    return (
        <div className="login-page">
            <h1>Please sign in</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" placeholder="Enter username" name="username" id="username" onChange={handleProfileChange} />
                <label>Password</label>
                <input type="password" placeholder="Enter password" name="password" id="password" onChange={handleProfileChange} />
                <br />
                <button className="login-button" variant="primary" type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
