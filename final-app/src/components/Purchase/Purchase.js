import React from "react";
import qrcode from '../../images/qrcode.png'
import './Purchase.css';
import { useNavigate } from "react-router-dom";


const Purchase = () => {

    const navigate = useNavigate();
    const handleSeeReport = () => {
        navigate("/report");
    }

    return (
        <div className="purchase-page">
            <h2 className="purchase-title">Please scan QR code</h2>
            <br />
            <img src={qrcode} /><br />
            <button className="btn-purchase" onClick={handleSeeReport} >See your report</button>
            <br />
            <a href="/">Back to main page</a>
        </div>
    )
}

export default Purchase;