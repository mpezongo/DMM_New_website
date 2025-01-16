import React from "react";
import { NavLink } from 'react-router-dom'
import images from "../../constant/images"
function Solutions() {
    const Solutions = [
        {
            imgUrl: images.illustration1,
            description: "Dévélopement de sites web personnalisés",
            cta: "Voir détails"
        },
        {
            imgUrl: images.bg_services,
            description: "Dévélopement de sites web personnalisés",
            cta: "Voir détails"
        },
        {
            imgUrl: images.illustration1,
            description: "Dévélopement de sites web personnalisés",
            cta: "Voir détails"
        },
        {
            imgUrl: images.bg_services,
            description: "Dévélopement de sites web personnalisés",
            cta: "Voir détails"
        },
        {
            imgUrl: images.illustration1,
            description: "Dévélopement de sites web personnalisés",
            cta: "Voir détails"
        },
        {
            imgUrl: images.bg_services,
            description: "Dévélopement de sites web personnalisés",
            cta: "Voir détails"
        }
    ]
    return (
        <section className="w-full flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-primary-10">Nos Solutions</h2>
            <div className="flex justify-evenly  gap-4 flex-wrap">
                {
                    Solutions.map((solution) =>
                        <div className="flex gap-4 border max-w-[350px] p-2">
                            <img src={solution.imgUrl} alt="" className="w-24 h-16 object-cover" />
                            <div className="flex flex-col gap-2">
                                <p>{solution.description}</p>
                                <NavLink to="#" className="self-end text-primary">{solution.cta }</NavLink>
                            </div>
                        </div>
                    )
                }

            </div>
        </section>
    )
}

export default Solutions