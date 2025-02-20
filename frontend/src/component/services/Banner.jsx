import React from "react";
import images from "../../constant/images"
import icons from "../../constant/icons";

function Banner() {
    return (
        <div className='w-full h-full flex flex-col items-center p-5 pt-8 pb-8 md:text-xl' style={{ backgroundImage: `url(${images.bg_services})` }} >
            <div className="flex flex-col gap-8 ">
                <p className="flex flex-col items-center gap-1 text-md flex-wrap">
                    <h2 className="text-red-500 font-bold">DevMasterMind </h2>
                    <span className="text-white"> le meilleur moyen de digitaliser votre entreprise</span>
                </p>

                <form action="" className="flex flex-col md:flex-row flex-wrap gap-4 justify-evenly items-center bg-white p-2">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="help" className="text-md font-bold">Comment vous aider</label>
                        <select name="help" id="help" className="border-none outline-none text-sm">
                            <option value="" disabled selected>Choisir</option>
                            <option value="">Option 1</option>
                            <option value="">option 2</option>
                        </select>
                    </div>
                    <hr className="h-8 w-0.5 bg-gray-100" />
                    <div className="flex flex-col gap-1" >
                        <label htmlFor="help" className="text-md font-bold">Dans quel domaine ?</label>
                        <select name="help" id="help" className="border-none outline-none text-sm">
                            <option value="" disabled selected>Choisir</option>
                            <option value="">Option 1</option>
                            <option value="">option 2</option>
                        </select>
                    </div>
                    <hr className="h-8 w-0.5 bg-gray-100" />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="help" className="text-md font-bold">Quelle est votre fonction</label>
                        <select name="help" id="help" className="border-none outline-none text-sm">
                            <option value="" disabled selected>Choisir</option>
                            <option value="">Option 1</option>
                            <option value="">option 2</option>
                        </select>
                    </div>
                    <button className="bg-primary text-white font-bold px-5 py-2">Envoyer</button>
                </form>

                <div className="bg-white p-6 shadow-lg ">
                    <div className="bg-red-100 p-6 flex flex-col gap-6">
                        <h4 className="font-bold">Une question ? Un projet ?</h4>
                        <p className="text-justify md:text-left">Contacter nos services en envoyant vos demandes via le formulaire ou votre espace personnalisé</p>
                        <div className="flex gap-3 flex-wrap justify-center">
                            <button className="bg-primary text-white font-bold px-2 py-1 flex flex-nowrap justify-center items-center gap-1 whitespace-nowrap">
                                <icons.MdMailOutline className="text-xl"></icons.MdMailOutline>
                                <span className="text-md">Par formulaire</span>
                            </button>
                            <button className="bg-primary text-white font-bold px-2 py-1 flex justify-center items-center gap-1 whitespace-nowrap">
                                <icons.RiAccountCircleLine className="text-xl"></icons.RiAccountCircleLine>
                                <span className="text-md">Par compte</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 flex-wrap items-center text-md m-4">
                        <span>Retrouvons nous sur les reseaux sociaux</span>
                        <div className="flex gap-6">
                            <icons.FaFacebook className="text-2xl"></icons.FaFacebook>
                            <icons.FaInstagramSquare className="text-2xl"></icons.FaInstagramSquare>
                            <icons.FaLinkedin className="text-2xl"></icons.FaLinkedin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner