import React from "react";
import Info from "./Info"
import About from "./About"
import Interest from "./Interest";
import Footer from "./footer"


export default function App() {
    return (
        <div className="main-flex">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}