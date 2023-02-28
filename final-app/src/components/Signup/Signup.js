import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    console.log(props);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        password: "",
        username: "",
        name_title: "",
        firstname: "",
        lastname: "",
        email: "",
        type: "",
        expire_date: "",
        cert_no: "",
        address_no: "",
        sub_district: "",
        district: "",
        province: "",
        telephone: "",
    });

    useEffect(() => {
        axios.get(`http://day4.test/api/tip/register/${props.selectedId}`)
            .then(res => {
                console.log(res.data.data)
                setFormData(res.data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveDraft = () => {
        axios.put(`http://localhost:8080/agent/${props.selectedId}`, { ...formData })
            .then(res => {
                console.log(res);
                alert("Draft saved successfully");
            })
            .catch(err => {
                console.error(err);
                alert("Error saving draft");
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        axios
            .post("http://localhost:8080/agent", formData)
            .then((response) => {
                console.log(response.data);
                alert("Form submitted successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.error(error);
                alert("Error submitting form");
            });
    };

    return (
        <div className="signup-page">
            <form onSubmit={handleSubmit}>
                <h2 className="topic">Account info</h2>
                <span className="set">
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            onChange={handleChange}
                        />
                        <label>Username</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            placeholder="Enter password"
                            name="password"
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                </span>

                <h2 className="topic">Personal info</h2>
                <span className="set">
                    <select as="select" name="name_title" value={formData.name_title} onChange={handleChange}>
                        <option value="">Select Title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="not specified">Not specified</option>
                    </select>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            placeholder="Enter firstname"
                            onChange={handleChange}
                        />
                        <label>First Name</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            placeholder="Enter lastname"
                            onChange={handleChange}
                        />
                        <label>Last Name</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            value={formData.email}
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            value={formData.telephone}
                            name="telephone"
                            placeholder="Enter phone number"
                            onChange={handleChange}
                        />
                        <label>Telephone</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                </span>

                <h2 className="topic">Certification info</h2>
                <span className="set">
                    <select
                        as="select"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}>
                        <option value="" disabled>Select Title</option>
                        <option value="agent">Agent</option>
                        <option value="middleman">Middleman</option>
                    </select>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            name="cert_no"
                            value={formData.cert_no}
                            placeholder="Enter cert nubmer"
                            onChange={handleChange} />
                        <label>Cert no.</label>

                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>

                    <div className="col-3 input-effect">
                        <input
                            type="date"
                            className="effect-21"
                            name="expire_date"
                            value={formData.expire_date}
                            onChange={handleChange} />
                        <label>Expire date.</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                </span>

                <h2 className="topic">Address</h2>
                <span className="set">
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            name="address_no"
                            value={formData.address_no}
                            placeholder="Enter address number"
                            onChange={handleChange}
                        />
                        <label>Address Number</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            value={formData.sub_district}
                            name="sub_district"
                            placeholder="Enter sub district"
                            onChange={handleChange}
                        />
                        <label>Sub-District</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            value={formData.district}
                            name="district"
                            placeholder="Enter district"
                            onChange={handleChange}
                        />
                        <label>District</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                    <div className="col-3 input-effect">
                        <input
                            className="effect-21"
                            type="text"
                            name="province"
                            value={formData.province}
                            placeholder="Enter province"
                            onChange={handleChange}
                        />
                        <label>Province</label>
                        <span className="focus-border">
                            <i></i>
                        </span>
                    </div>
                </span>
                <button className='btn-item' type="submit" href="/purchase">Submit</button>
            </form>
                <button className='btn-item' onClick={handleSaveDraft}>Save as Draft</button>
        </div>
    );
};

export default Signup;
