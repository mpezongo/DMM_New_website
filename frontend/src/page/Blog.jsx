import React, {useEffect, useState} from 'react';

import Section from "../component/Section";
import {Link} from "react-router-dom";
import {fetchSections} from "../constant/articlesDataService";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

const Blog = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSections = async () => {
            try {
                const data = await fetchSections();
                console.log(data)
                setSections(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            } finally {
                setLoading(false);
            }
        };

        getSections();
    }, []);

    if (loading) {
        return <p>Chargement des sections...</p>;
    }
    if (!sections || sections.length === 0 || !sections[1]?.articles) {
        return <p>Aucune donnée disponible.</p>;
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="mt-32 flex flex-col items-center">
                <div className="w-full max-w-[1200px] h-auto bg-white mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 text-center border-b-4 border-blue-500 pb-2">
                        Actualités
                    </h2>
                    <p className="text-gray-600 text-lg mb-6 text-center">
                        Bienvenue sur notre plateforme d'actualités&nbsp;! Plongez dans un univers captivant
                        d'informations, d'analyses pointues et de reportages exclusifs. Ici, chaque article vous invite
                        à explorer en profondeur les événements qui façonnent notre société. Restez informé, découvrez
                        de nouvelles perspectives et laissez-vous inspirer par le dynamisme de l'actualité qui vous
                        passionne.
                    </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div
                            className="col-span-1 sm:col-span-2 lg:col-span-2 relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <Link to={`/article/${sections[0].articles[0].id}`}>
                                <img
                                    src={sections[0].articles[0].image}
                                    alt={sections[0].articles[0].title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-opacity-50 flex items-end justify-center text-center p-4">
                                    <p className="bg-black bg-opacity-70 text-white text-lg font-bold mb-4 px-2 py-1 rounded">
                                        {sections[0].articles[0].title}
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div
                            className="row-span-2 relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <Link to={`/article/${sections[1].articles[1].id}`}>
                                <img
                                    src={sections[1].articles[1].image}
                                    alt={sections[1].articles[1].title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-opacity-50 flex items-end justify-center text-center p-4">
                                    <p className="bg-black bg-opacity-70 text-white text-lg font-bold mb-4 px-2 py-1 rounded">
                                        {sections[1].articles[1].title}
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div
                            className="relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <Link to={`/article/${sections[2].articles[2].id}`}>
                                <img
                                    src={sections[2].articles[2].image}
                                    alt={sections[2].articles[2].title}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-opacity-50 flex items-end justify-center text-center p-4">
                                    <p className="bg-black bg-opacity-70 text-white text-lg font-bold mb-4 px-2 py-1 rounded">
                                        {sections[2].articles[2].title}
                                    </p>
                                </div>
                            </Link>
                        </div>

                        <div className="relative rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
                            <Link to={`/article/${sections[3].articles[2].id}`}>
                                <img
                                    src={sections[3].articles[2].image}
                                    alt={sections[3].articles[2].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-opacity-50 flex items-end justify-center text-center p-4">
                                    <p className="bg-black bg-opacity-70 text-white text-lg font-bold mb-4 px-2 py-1 rounded">
                                        {sections[3].articles[2].title}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <br/>
                <hr className="mt-4"/>

                <div className="flex max-w-[1000px] flex-col items-center">
                    {sections.map((section, index) => (
                        <Section key={index} section={section}/>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;