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
            <div className="w-full flex justify-center mt-32 mb-12 p-2">
                <div className="flex flex-col gap-12 max-w-[1200px]">
                    <Banner></Banner>
                    <Solutions></Solutions>
                    <Missions></Missions>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Services