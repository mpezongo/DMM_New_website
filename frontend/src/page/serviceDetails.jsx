import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import images from "../constant/images"


import Banner from "../component/services/Banner";
import Solutions from "../component/services/Solutions";
import Missions from "../component/services/Missions";

function ServiceDetails() {
    return (
        <div>
            <Navbar></Navbar>
                <div className="flex flex-col gap-12 max-w-[1200px]  mt-32 mb-12 p-2">
                    <h2>Developpement Logiciels</h2>
                    <p>Confier nous votre projet et profiter d'un developpement logiciel innovant, performant et entièrement adapté à vos besoins
                        <br/>
                        Nos experts transforment vos idées en solutions puissantes, intuitives et évolutives
                    </p>

                    <div className='w-full h-52 flex flex-col justify-end p-8' style={{ backgroundImage: `url(${images.bg_services})` }} >
                            <div className="flex gap-2 justify-between">
                                <button className="bg-primary text-white p-2 rounded cursor-pointer">Partager</button>
                                <button className="bg-primary text-white p-2 rounded cursor-pointer">Nous contacter</button>
                            </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    )
}

export default ServiceDetails