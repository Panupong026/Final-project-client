import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";

const Forms = (props) => {
    console.log(props);

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
        insurance_info: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (e.target.name === "start_cover_day") {
            let endCoverDay = new Date(e.target.value);
            endCoverDay.setFullYear(endCoverDay.getFullYear() + 1);
            setFormData((prevFormData) => ({
                ...prevFormData,
                end_cover_day: endCoverDay.toISOString().substr(0, 10),
            }));
        }
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
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h2>Information</h2>
                <Form.Group>
                    <Form.Label htmlFor="customer_name_title">Name Title:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_name_title"
                        value={formData.customer_name_title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_firstname">First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_firstname"
                        value={formData.customer_firstname}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_lastname">Last Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_lastname"
                        value={formData.customer_lastname}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_id_no">ID Number:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_id_no"
                        value={formData.customer_id_no}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_email">Email:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_email"
                        value={formData.customer_email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_birthday">Birthday:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_birthday"
                        value={formData.customer_birthday}
                        onChange={handleChange}
                    />
                </Form.Group>

                <h2>Address</h2>
                <Form.Group>
                    <Form.Label htmlFor="customer_address_no">Address Number:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_address_no"
                        value={formData.customer_address_no}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_subdistrict">Subdistrict:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_subdistrict"
                        value={formData.customer_subdistrict}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_district">District:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_district"
                        value={formData.customer_district}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="customer_province">Province:</Form.Label>
                    <Form.Control
                        type="text"
                        name="customer_province"
                        value={formData.customer_province}
                        onChange={handleChange}
                    />
                </Form.Group>
                <h2>Insurance information</h2>
                <Form.Group>
                    <Form.Label htmlFor="start_cover_day">start_cover_day: </Form.Label>
                    <Form.Control
                        type="date"
                        name="start_cover_day"
                        value={formData.start_cover_day}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="end_cover_day">end_cover_day: </Form.Label>
                    <Form.Control
                        type="date"
                        name="end_cover_day"
                        value={formData.end_cover_day}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="premium">premium: </Form.Label>
                    <Form.Control
                        type="text"
                        name="premium"
                        value={formData.premium}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="beneficial_info">beneficial_info: </Form.Label>
                    <Form.Control
                        type="text"
                        name="beneficial_info"
                        value={formData.beneficial_info}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="insurance_info">insurance_info: </Form.Label>
                    <Form.Control
                        type="text"
                        name="insurance_info"
                        value={formData.insurance_info}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button onClick={handleSaveDraft}>Save as Draft</Button>
                <Button onClick={handleSubmit} type="submit" href="/purchase">Submit</Button>
            </Form>

        </div >
    )
}

export default Forms;
