import React from "react";
import images from "../../constant/images"
import icons from "../../constant/icons";

function Banner() {
    return (
        <div className="w-full  flex justify-center mt-40">
            <div className='w-full  flex flex-col relative'>
                <img src={images.bg_services} alt="" className="w-full h-3/4 object-cover " /> 
                <div className="w-3/4 flex flex-col gap-8 absolute top-12 left-1/2 transform -translate-x-1/2">
                    <p className="flex gap-1 text-xl">
                        <h2 className="text-red-500 font-bold">DevMasterMind </h2>
                        <span className="text-white"> le meilleur moyen de digitaliser votre entreprise</span>
                    </p>

                    <form action="" className="flex gap-4 justify-evenly items-center bg-white p-2">
                        <div className="flex flex-col">
                            <label htmlFor="help" className="text-md font-bold">Comment vous aider</label>
                            <select name="help" id="help" className="border-none outline-none text-md">
                                <option value="" disabled selected>Choisir</option>
                                <option value="">Option 1</option>
                                <option value="">option 2</option>
                            </select>
                        </div>
                        <hr className="h-8 w-0.5 bg-gray-100" />
                        <div className="flex flex-col">
                            <label htmlFor="help" className="text-md font-bold">Dans quel domaine ?</label>
                            <select name="help" id="help" className="border-none outline-none text-md">
                                <option value="" disabled selected>Choisir</option>
                                <option value="">Option 1</option>
                                <option value="">option 2</option>
                            </select>
                        </div>
                        <hr className="h-8 w-0.5 bg-gray-100" />
                        <div className="flex flex-col">
                            <label htmlFor="help" className="text-md font-bold">Quelle est votre fonction</label>
                            <select name="help" id="help" className="border-none outline-none text-md">
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
                            <div className="flex gap-4">
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
                        <div className="flex gap-8 items-center text-xl m-4">
                            <span>Retrouvons nous sur les reseaux sociaux</span>
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