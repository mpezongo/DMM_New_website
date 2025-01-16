import React from "react";
import { NavLink } from 'react-router-dom'
import images from "../../constant/images"
function Solutions() {
    return (
        <section className="w-full flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-primary-10">Nos Solutions</h2>
            <div className="flex justify-evenly  gap-4 flex-wrap">
                <div className="flex gap-4 border max-w-[400px] p-2">
                    <img src={images.illustration1} alt="" className="w-24 h-16 object-cover"/>
                    <div className="flex flex-col gap-2">
                        <p>Dévélopement de sites web personnalisés</p>
                        <NavLink to="#" className="self-end text-primary">Voir détails</NavLink>
                    </div>
                </div>
                <div className="flex gap-4 border max-w-[400px] p-2">
                    <img src={images.illustration2} alt="" className="w-24 h-16 object-cover"/>
                    <div className="flex flex-col gap-2">
                        <p>Dévélopement de sites web personnalisés</p>
                        <NavLink to="#" className="self-end text-primary">Voir détails</NavLink>
                    </div>
                </div>
                <div className="flex gap-4 border max-w-[400px] p-2">
                    <img src={images.illustration1} alt="" className="w-24 h-16 object-cover"/>
                    <div className="flex flex-col gap-2">
                        <p>Dévélopement de sites web personnalisés</p>
                        <NavLink to="#" className="self-end text-primary">Voir détails</NavLink>
                    </div>
                </div>
                <div className="flex gap-4 border max-w-[400px] p-2">
                    <img src={images.illustration2} alt="" className="w-24 h-16 object-cover"/>
                    <div className="flex flex-col gap-2">
                        <p>Dévélopement de sites web personnalisés</p>
                        <NavLink to="#" className="self-end text-primary">Voir détails</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions