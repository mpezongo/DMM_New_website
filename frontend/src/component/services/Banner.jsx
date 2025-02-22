import React from "react";
import images from "../../constant/images"
import icons from "../../constant/icons";

function Banner() {
    return (
            <div className='w-full h-full flex flex-col items-center p-5 pt-8 pb-8' style={{ backgroundImage: `url(${images.bg_services})` }} >
                <div className="w-3/4 flex flex-col gap-8 ">
                    <p className="flex gap-1 text-xl flex-wrap">
                        <h2 className="text-red-500 font-bold">DevMasterMind </h2>
                        <span className="text-white"> le meilleur moyen de digitaliser votre entreprise</span>
                    </p>

                    <form action="" className="flex flex-wrap gap-4 justify-evenly items-center bg-white p-2">
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

                    <div className="bg-white p-6 shadow-lg">
                        <div className="bg-red-100 p-6 flex flex-col gap-6">
                            <h4 className="text-lg font-bold">Une question ? Un projet ?</h4>
                            <p>Contacter nos services en envoyant vos demandes via le formulaire ou votre espace personnalisé</p>
                            <div className="flex gap-4 flex-wrap">
                                <button className="bg-primary text-white font-bold px-4 py-2 flex justify-center items-center gap-1">
                                    <icons.MdMailOutline></icons.MdMailOutline>
                                    <span >Par formulaire</span> 
                                </button>
                                <button className="bg-primary text-white font-bold px-4 py-2 flex justify-center items-center gap-1">
                                    <icons.RiAccountCircleLine></icons.RiAccountCircleLine>
                                    <span >Via mon compte</span> 
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-8 flex-wrap items-center text-xl m-4">
                            <span>Retrouvons nous sur les reseaux sociaux</span>
                            <icons.FaFacebook className="text-2xl"></icons.FaFacebook>
                            <icons.FaInstagramSquare className="text-2xl"></icons.FaInstagramSquare>
                            <icons.FaLinkedin className="text-2xl"></icons.FaLinkedin>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Banner