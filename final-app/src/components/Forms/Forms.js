import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Purchase from "../Purchase/Purchase";


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
            <form onSubmit={handleSubmit}>
                <span>
                    <h2>Customer Information</h2>
                    <label htmlFor="customer_name_title">Customer Name Title:</label>
                    <input
                        type="text"
                        name="customer_name_title"
                        value={formData.customer_name_title}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_firstname">Customer First Name:</label>
                    <input
                        type="text"
                        name="customer_firstname"
                        value={formData.customer_firstname}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_lastname">Customer Last Name:</label>
                    <input
                        type="text"
                        name="customer_lastname"
                        value={formData.customer_lastname}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_id_no">Customer ID Number:</label>
                    <input
                        type="text"
                        name="customer_id_no"
                        value={formData.customer_id_no}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_email">Customer email:</label>
                    <input
                        type="text"
                        name="customer_email"
                        value={formData.customer_email}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_birthday">Customer birthday:</label>
                    <input
                        type="text"
                        name="customer_birthday"
                        value={formData.customer_birthday}
                        onChange={handleChange}
                    />
                </span>
                <span>
                    <h2>Customer Adress</h2>
                    <label htmlFor="customer_address_no">Customer Address Number:</label>
                    <input
                        type="text"
                        name="customer_address_no"
                        value={formData.customer_address_no}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_subdistrict">Customer Subdistrict:</label>
                    <input
                        type="text"
                        name="customer_subdistrict"
                        value={formData.customer_subdistrict}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_district">Customer district:</label>
                    <input
                        type="text"
                        name="customer_district"
                        value={formData.customer_district}
                        onChange={handleChange}
                    />
                    <label htmlFor="customer_province">Customer province:</label>
                    <input
                        type="text"
                        name="customer_province"
                        value={formData.customer_province}
                        onChange={handleChange}
                    />
                </span>
                <span>
                    <h2>Insurance information</h2>
                    <label htmlFor="start_cover_day">start_cover_day: </label>
                    <input
                        type="date"
                        name="start_cover_day"
                        value={formData.start_cover_day}
                        onChange={handleChange}
                    />
                    <label htmlFor="end_cover_day">end_cover_day: </label>
                    <input
                        type="date"
                        name="end_cover_day"
                        value={formData.end_cover_day}
                        onChange={handleChange}
                    />
                    <label htmlFor="premium">premium: </label>
                    <input
                        type="text"
                        name="premium"
                        value={formData.premium}
                        onChange={handleChange}
                    />
                    <label htmlFor="beneficial_info">beneficial_info: </label>
                    <input
                        type="text"
                        name="beneficial_info"
                        value={formData.beneficial_info}
                        onChange={handleChange}
                    />
                    <label htmlFor="insurance_info">insurance_info: </label>
                    <input
                        type="text"
                        name="insurance_info"
                        value={formData.insurance_info}
                        onChange={handleChange}
                    />
                </span>
                <button onClick={handleSaveDraft}>Save as Draft</button>
                <button type="submit" href="/purchase">Submit</button>
            </form>

        </div>
    )
}

export default Forms;
