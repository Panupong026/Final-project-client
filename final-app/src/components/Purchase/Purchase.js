import React from "react";
import qrcode from '../../images/qrcode.png'
import './Purchase.css';

const Purchase = () => {
    return (
        <div>
            Please scan QR code<br/>
            <img src={qrcode} />
            <a href="/">Back to main page</a>
        </div>
    )
}

export default Purchase;