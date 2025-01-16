import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Banner from "../component/services/Banner";
import Solutions from "../component/services/Solutions";

function Services() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1200px] m-auto">
                <Banner></Banner>
                <Solutions></Solutions>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Services