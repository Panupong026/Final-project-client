import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, FormControl, FormLabel, FormGroup, Button } from 'react-bootstrap';
import './Forms.css';

const Forms = (props) => {
    console.log(props);

    const navigate = useNavigate();

    const handleChange = (e) => {
        props.setFormData({
            ...props.formData,
            [e.target.name]: e.target.value
        });

        if (e.target.name === "start_cover_day") {
            let endCoverDay = new Date(e.target.value);
            endCoverDay.setFullYear(endCoverDay.getFullYear() + 1);
            props.setFormData((prevFormData) => ({
                ...prevFormData,
                end_cover_day: endCoverDay.toISOString().substr(0, 10),
            }));
        }
    };

    const handleSaveDraft = () => {
        axios.post("/api/draft", { ...props.formData, status: "draft" })
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
        
        props.formData.agent_id = props.selectedId;
        props.formData.insurance_id = props.selectedInsurance.id;
        props.formData.insurance_info = props.selectedInsurance.name;
        props.formData.premium = props.selectedInsurance.price;

        axios
            .post("http://localhost:8080/customer", props.formData)
            .then((response) => {
                console.log(response.data);
                navigate(`/purchase`)
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div className="form-page">
            <form className="forms-main" onSubmit={handleSubmit}>
            <h2 className="title-form">Information</h2>
                <FormGroup>
                <select as="select" name="customer_name_title" value={props.formData.customer_name_title} onChange={handleChange}>
                        <option value="">Select Title</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="not specified">Not specified</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_firstname">First Name:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_firstname"
                        value={props.formData.customer_firstname}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_lastname">Last Name:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_lastname"
                        value={props.formData.customer_lastname}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_id_no">ID Number:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_id_no"
                        value={props.formData.customer_id_no}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_email">Email:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_email"
                        value={props.formData.customer_email}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_birthday">Birthday:</FormLabel>
                    <Form.Control
                        type="date"
                        name="customer_birthday"
                        value={props.formData.customer_birthday}
                        onChange={handleChange}
                    />
                </FormGroup>

                <h2 className="title-form">Address</h2>
                <FormGroup>
                    <FormLabel htmlFor="customer_address_no">Address Number:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_address_no"
                        value={props.formData.customer_address_no}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_subdistrict">Subdistrict:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_subdistrict"
                        value={props.formData.customer_subdistrict}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_district">District:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_district"
                        value={props.formData.customer_district}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="customer_province">Province:</FormLabel>
                    <Form.Control
                        type="text"
                        name="customer_province"
                        value={props.formData.customer_province}
                        onChange={handleChange}
                    />
                </FormGroup>
                <h2 className="title-form">Insurance information</h2>
                <FormGroup>
                    <FormLabel htmlFor="start_cover_day">start_cover_day: </FormLabel>
                    <Form.Control
                        type="date"
                        name="start_cover_day"
                        value={props.formData.start_cover_day}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="end_cover_day">end_cover_day: </FormLabel>
                    <Form.Control
                        type="date"
                        name="end_cover_day"
                        value={props.formData.end_cover_day}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="beneficial_info">beneficial_info: </FormLabel>
                    <Form.Control
                        type="text"
                        name="beneficial_info"
                        value={props.formData.beneficial_info}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="premium">premium: </FormLabel>
                    <Form.Control
                        type="text"
                        name="premium"
                        value={props.selectedInsurance.price}
                        disabled
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="insurance_info">insurance_info: </FormLabel>
                    <Form.Control
                        type="text"
                        name="insurance_info"
                        value={props.selectedInsurance.name}
                        onChange={handleChange}
                        disabled
                    />
                </FormGroup>
                <Button onClick={handleSaveDraft}>Save as Draft</Button>
                <Button onClick={handleSubmit} type="submit" href="/purchase">Submit</Button>
            </form>

        </div >
    )
}

export default Forms;
