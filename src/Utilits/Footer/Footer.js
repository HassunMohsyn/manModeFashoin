import React from 'react'
export default function Footer () {
    return(
            <div className="w-100 h-75 d-flex align-items-center justify-content-around p-5" style={{background:'rgb(213 213 213 / 32%)',marginTop:'20px'}}>
                <div style={{textTransform:'uppercase'}}>
                    <ul>INFO
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                    <ul>language
                        <li>ENG</li>
                        <li>ESP</li>
                        <li>SVE</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src={require('../../assets/images/icons/logo.png')} alt='man-mode'/>
                </div>
            </div>
    )
}