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
            <div className="flex align-center flex-col w-full  mb-12 mt-28 m-4">
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