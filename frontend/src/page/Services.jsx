import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Banner from "../component/services/Banner";
import Solutions from "../component/services/Solutions";
import Missions from "../component/services/Missions";

function Services() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full flex flex-col align-center gap-12 p-4 mt-32  mb-12">
                <Banner></Banner>
                <Solutions></Solutions>
                <Missions></Missions>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Services