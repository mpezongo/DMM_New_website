import React from "react";
import images from "../../constant/images"

function Missions() {
    const Missions = [
        {
            imgUrl: images.illustration1,
            title:"Implémentation d'une API propre à votre site web",
            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
        },
        {
            imgUrl: images.bg_services,
            title:"Implémentation d'une API propre à votre site web",
            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
        },
        {
            imgUrl: images.illustration1,
            title:"Implémentation d'une API propre à votre site web",
            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
        },
        {
            imgUrl: images.bg_services,
            title:"Implémentation d'une API propre à votre site web",
            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
        }
    ]
    return (
        <section className="w-full flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-primary-10 my-4 text-center">Notre Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-evenly gap-6">
                {
                    Missions.map((mission)=>
                    <div className="gap-2 border">
                        <img src={mission.imgUrl} alt="" className="w-full h-44 object-cover"/>
                        <div className="flex flex-col items-center gap-4 bg-primary text-white p-2 pb-4">
                            <p className="text-center text-md font-bold font-Montserrat">{mission.title}</p>
                            <div className="flex flex-col gap-1 text-center text-gray-300 font-light font-Montserrat">
                                {mission.description}
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    )
}

export default Missions