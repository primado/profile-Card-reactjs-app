import React from "react"
import Facebook from "./assets/Facebook Icon.png"
import GitHub from "./assets/GitHub Icon.png"
import Instagram from "./assets/IG-icon.png"
import Twitter from "./assets/Twitter Icon.png"
import "./css/style.css"


export default function Footer() {
    return (
        <div>
            <div className="container">
                <footer>
                    <div className="social-icon-flex">
                        <a href="https://twitter.com/_primado/"><img src={Twitter} alt="Twitter Icon" /></a>
                        <a href="#"><img src={Facebook} alt="Facebook Icon" /></a>
                        <a href="https://instagram.com/_primado/"><img src={Instagram} alt="Instagram Icon"/></a>
                        <a href="https://github.com/primado"><img src={GitHub} alt="GitHub Icon" /></a>
                    </div>
                </footer>
            </div>
        </div>
    )
}