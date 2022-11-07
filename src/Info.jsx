import React from "react";
import myPhoto from "./assets/Prince-Adimado.png"
import mail from "./assets/Mail.png"
import linkedin from "./assets/linkedin.png"
import "./css/style.css"


export default function Info() {
    return (
        <div>
            <div className="container">
                <div className="card-img">
                    <img src={myPhoto} className="my-photo" alt="Prince Adimado profile photo"/>
                </div>
                <div className="content-info">
                    <div className="my-info">
                        <h1 className="my-name">Prince Adimado</h1>
                        <h3 className="job-title">Frontend Developer</h3>
                        <a className="my-website" href="#">MLSA Portfolio Website</a>
                    </div>
                    <div className="contact-info">
                        <a className="email" href="#"><img className="mail-logo" src={mail} alt="Mail logo"/> Email</a>
                        <a className="linkedIn" href="#"><img src={linkedin} className="linkedin-logo" alt="" /> LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}