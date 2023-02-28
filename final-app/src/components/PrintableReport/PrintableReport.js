import React, { useState, useEffect } from "react";
import axios from "axios";
import './PrintableReport.css'

const PrintableReport = (props) => {

    // console.log(props);

    const [agent, setAgent] = useState({
        agent_firstname: "",
        agent_lastname: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/agent/${props.selectedId}`)
            .then(res => {
                console.log(res.data.firstname)
                setAgent({
                    agent_firstname: res.data.firstname,
                    agent_lastname: res.data.lastname
                }
                )
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    let customer_name_title

    if (props.formData.customer_name_title == "not specified") {
        customer_name_title = "Khun"
    } else {
        customer_name_title = props.formData.customer_name_title
    }

    return (
        <div className="report-container">
            <h2 className="report-heading">Insurance Policy Report</h2>
            <div className="report-item">
                <span className="report-label">Customer Name:</span>
                <span className="report-value">{customer_name_title} {props.formData.customer_firstname} {props.formData.customer_lastname}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Customer ID No: </span>
                <span className="report-value">{props.formData.customer_id_no}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Customer Email: </span>
                <span className="report-value">{props.formData.customer_email}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Customer Birthday: </span>
                <span className="report-value">{props.formData.customer_birthday}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Customer Address: </span>
                <span className="report-value">{props.formData.customer_address_no}, {props.formData.customer_subdistrict}, {props.formData.customer_district}, {props.formData.customer_province}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Start Cover Day: </span>
                <span className="report-value">{props.formData.start_cover_day}</span>
            </div>
            <div className="report-item">
                <span className="report-label">End Cover Day: </span>
                <span className="report-value">{props.formData.end_cover_day}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Premium: </span>
                <span className="report-value">{props.formData.premium}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Beneficial Info: </span>
                <span className="report-value">{props.formData.beneficial_info}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Insurance Info: </span>
                <span className="report-value">{props.formData.insurance_info}</span>
            </div>
            <div className="report-item">
                <span className="report-label">Agent Name:</span>
                <span className="report-value">Khun {agent.agent_firstname} {agent.agent_lastname}</span>
            </div>
            <button onClick={props.handlePrint}>Print this page</button>
        </div>
    )
}

 

export default PrintableReport;