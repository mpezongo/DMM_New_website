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
            <div className="max-w-[1200px] m-auto mb-12">
                <Banner></Banner>
                <Solutions></Solutions>
                <hr className="my-12 w-0"></hr>
                <Missions></Missions>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Services