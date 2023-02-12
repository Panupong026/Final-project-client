import React, { useState } from 'react';
import { Form, FormControl, FormLabel, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        name_title: "",
        firstname: "",
        lastname: "",
        email: "",
        type: "",
        expire_date: "",
        register_date: "",
        cert_no: "",
        address_no: "",
        sub_district: "",
        district: "",
        province: "",
        telephone: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveDraft = () => {
        axios.post("/api/draft", { ...formData, status: "draft" })
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
        axios
            .post("", formData)
            .then((response) => {
                console.log(response.data);
                alert("Form submitted successfully");
            })
            .catch((error) => {
                console.error(error);
                alert("Error submitting form");
            });
    };

    return (
        <div className="signup-page">
            <Form onSubmit={handleSubmit}>
                <h2>Account info</h2>
                <FormGroup controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} required />
                </FormGroup>
                <FormGroup controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                </FormGroup>
                <h2>Personal info</h2>
                <FormGroup>
                    <FormControl as="select" name="name_title" value={formData.name_title} onChange={handleChange}>
                        <option value="">Select Title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="not specified">Not specified</option>
                    </FormControl>
                </FormGroup>

                <FormGroup>
                    <FormLabel>First Name:</FormLabel>
                    <FormControl
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Last Name:</FormLabel>
                    <FormControl
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Email:</FormLabel>
                    <FormControl
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Telephone:</FormLabel>
                    <FormControl
                        type="text"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                    />
                </FormGroup>
                <h2>Certification info</h2>
                <Form.Group controlId="formType">
                    <Form.Label>Type:</Form.Label>
                    <Form.Control as="select"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}>
                        <option value="agent">Agent</option>
                        <option value="middleman">Middleman</option>
                    </Form.Control>
                </Form.Group>
                <FormGroup>
                    <FormLabel>Certificate Number:</FormLabel>
                    <FormControl
                        type="text"
                        name="cert_no"
                        value={formData.cert_no}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Register Date:</FormLabel>
                    <FormControl
                        type="date"
                        name="register_date"
                        value={formData.register_date}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Expire Date:</FormLabel>
                    <FormControl
                        type="date"
                        name="expire_date"
                        value={formData.expire_date}
                        onChange={handleChange}
                    />
                </FormGroup>
                <h2>Address</h2>
                <FormGroup>
                    <FormLabel>Address Number:</FormLabel>
                    <FormControl
                        type="text"
                        name="address_no"
                        value={formData.address_no}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Sub-District:</FormLabel>
                    <FormControl
                        type="text"
                        name="sub_district"
                        value={formData.sub_district}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>District:</FormLabel>
                    <FormControl
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Province:</FormLabel>
                    <FormControl
                        type="text"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                    />
                </FormGroup>
                <button onClick={handleSaveDraft}>Save as Draft</button>
                <button type="submit" href="/purchase">Submit</button>
            </Form>
        </div >
    );
};

export default Signup;
