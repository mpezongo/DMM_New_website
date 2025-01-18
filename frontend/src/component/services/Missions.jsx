import React from "react";
import { NavLink } from 'react-router-dom'
import images from "../../constant/images"

function Missions() {
    const Missions = [
        {
            imgUrl: images.illustration1,
            description:"Implémentation d'une API propre à votre site web",
            price:"50000 fcfa",
            cta:"Ajouter au panier"
        },
        {
            imgUrl: images.bg_services,
            description:"Implémentation d'une API propre à votre site web",
            price:"50000 fcfa",
             cta:"Ajouter au panier"
        },
        {
            imgUrl: images.illustration1,
            description:"Implémentation d'une API propre à votre site web",
            price:"50000 fcfa",
             cta:"Ajouter au panier"
        },
        {
            imgUrl: images.bg_services,
            description:"Implémentation d'une API propre à votre site web",
            price:"50000 fcfa",
             cta:"Ajouter au panier"
        }
    ]
    return (
        <section className="w-full flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-primary-10">Nos Missions</h2>
            <div className="flex justify-evenly  gap-6 flex-wrap">
                {
                    Missions.map((mission)=>
                    <div className="flex flex-col gap-2 border max-w-[280px]">
                        <img src={mission.imgUrl} alt="" className="w-full h-36 object-cover"/>
                        <div className="flex flex-col items-center gap-4 bg-primary text-white p-2 pb-4">
                            <p className="text-center text-md">{mission.description}</p>
                            <div className="flex flex-col gap-1">
                                <span className="text-sm">A partir de</span>
                                <span className="text-lg font-bold">{mission.price}</span>
                            </div>
                            <NavLink to="#" className="border rounded-full px-4">{mission.cta}</NavLink>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    )
}

export default Missions