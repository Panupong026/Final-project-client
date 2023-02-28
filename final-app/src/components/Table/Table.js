import React, { useState, useEffect } from "react";
import axios from "axios";
import './Table.css';

const Table = (props) => {

    console.log(props);

    const [info, setInfo] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/customer`)
            .then(res => {
                console.log(res);

                const filteredData = res.data.filter(item => item.agent_id == props.selectedId)

                setInfo(filteredData)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    let customer;
    try {
        customer = info.map((record, index) => (


            <tbody>
                <tr key={index}>
                    <td>{index + 1}</td>
                    {/* <td>{record.order_number}</td> */}
                    <td>{record.firstname}</td>
                    <td>{record.lastname}</td>
                    <td>{record.id_no}</td>
                    <td>{record.email}</td>
                    <td>{record.birthday}</td>
                    <td>{record.address_no}</td>
                    <td>{record.sub_district}</td>
                    <td>{record.district}</td>
                    <td>{record.province}</td>
                    <td>{new Date(record.start_cover_day).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })}</td>
                    <td>{new Date(record.end_cover_day).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })}</td>
                    <td>{record.insurance_info}</td>
                    <td>{record.premium.toLocaleString()}</td>
                    <td>{record.beneficial_info}</td>
                    <td></td>
                </tr>
            </tbody>
        ));
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <div className="table-page">
                <h2 className="table-title">Your Customer</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Id No.</th>
                            <th>Email</th>
                            <th>Birthday</th>
                            <th>Address No</th>
                            <th>Sub-District</th>
                            <th>District</th>
                            <th>Province</th>
                            <th>Start cover day</th>
                            <th>End cover day</th>
                            <th>Insurance Policy</th>
                            <th>Premium</th>
                            <th>Beneficial info</th>
                        </tr>
                    </thead>
                    {customer}
                </table>
            </div>
        </div>
    )
}

export default Table;
