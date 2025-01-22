import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import img from "../constant/images";

export default function Offres() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-auto ">
      <div className="flex flex-col items-center justify-center w-full h-auto">
        <Navbar />
        <div
            className="relative bg-cover bg-center h-[500px] w-full mt-[120px]"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
             
              <div className="mb-6">
                <img src={img.logo} alt="Logo" className="w-32 mx-auto" />
              </div>
              <h1 className="text-5xl font-bold">NOS OFFRES</h1>
              <p className="max-w-2xl mt-4 text-lg">
                "Découvrez nos solutions conçues pour répondre à tous vos besoins.
                Que vous soyez particulier ou professionnel, nous avons l'offre
                qu'il vous faut !"
              </p>
              <button className="px-6 py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
                Découvrir
              </button>
            </div>
          </div>
        <body className="bg-white text-gray-800 w-full max-w-[1200px]">
          <div className="py-16">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <h2 className="text-6xl font-bold text-blue-900">
                Découvrez nos offres
              </h2>
              <p className="mt-4 text-gray-600">
                Peu importe vos besoins, nous avons une solution adaptée. Toutes
                nos offres incluent un support dédié et des garanties de
                qualité.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Essentiel */}
              <div className="max-w-md p-1 mx-auto text-center bg-blue-900 border border-gray-500 shadow-lg rounded-[45px]">
                <div className="bg-white rounded-[45px]">
                  <h2 className="text-2xl font-bold text-white bg-blue-900 p-4 rounded-[45px]">
                    ESSENTIEL
                  </h2>
                  <div className="p-4">
                    <p className="text-gray-600">À partir de</p>
                    <p className="text-4xl font-bold text-blue-900">300.000F</p>
                    <ul className="mt-6 space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Jusqu'à 7 pages
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        12 emails professionnels
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Référencement SEO
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-red-500">✗</span>
                        Mode Dark
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-red-500">✗</span>
                        Maintenance incluse
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-red-500">✗</span>
                        Fonctions personnalisées avancées
                      </li>
                    </ul>
                    <button className="mt-6 px-14 py-2 bg-blue-900 text-white font-bold rounded-[45px] hover:bg-blue-700 transition">
                      Souscrire
                    </button>
                  </div>
                </div>
              </div>

              {/* Standard */}
              <div className="max-w-md p-1 mx-auto text-center bg-blue-900 border border-gray-500 shadow-lg rounded-[45px]">
                <div className="bg-white rounded-[45px]">
                  <h2 className="text-2xl font-bold text-white bg-blue-900 p-4 rounded-[45px]">
                    STANDARD
                  </h2>
                  <div className="p-4">
                    <p className="text-gray-600">À partir de</p>
                    <p className="text-4xl font-bold text-blue-900">450.000F</p>
                    <ul className="mt-6 space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Jusqu'à 15 pages
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        20 emails professionnels
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Référencement SEO avancé
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Mode Dark
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-red-500">✗</span>
                        Maintenance incluse
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-red-500">✗</span>
                        Fonctions personnalisées avancées
                      </li>
                    </ul>
                    <button className="mt-6 px-14 py-2 bg-blue-900 text-white font-bold rounded-[45px] hover:bg-blue-700 transition">
                      Souscrire
                    </button>
                  </div>
                </div>
              </div>

              {/* Premium */}
              <div className="max-w-md p-1 mx-auto text-center bg-blue-900 border border-gray-500 shadow-lg rounded-[45px]">
                <div className="bg-white rounded-[45px]">
                  <h2 className="text-2xl font-bold text-white bg-blue-900 p-4 rounded-[45px]">
                    PREMIUM
                  </h2>
                  <div className="p-4">
                    <p className="text-gray-600">À partir de</p>
                    <p className="text-4xl font-bold text-blue-900">800.000F</p>
                    <ul className="mt-6 space-y-2 text-left">
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Pages illimitées
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Emails illimités
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Référencement SEO Premium
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Mode Dark
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-green-500">✓</span>
                        Maintenance incluse
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 font-bold text-red-500">✗</span>
                        Fonctions personnalisées avancées
                      </li>
                    </ul>
                    <button className="mt-6 px-14 py-2 bg-blue-900 text-white font-bold rounded-[45px] hover:bg-blue-700 transition">
                      Souscrire
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="py-16">
            <div className="w-full max-w-[1200px] mx-auto flex justify-between gap-8 items-center px-4">
              <div className="flex flex-col items-start justify-center w-2/3 gap-6">
                <h2 className="text-4xl font-bold leading-tight text-black md:text-6xl">
                  Pourquoi nous choisir ?
                </h2>
              </div>
              <div className="flex items-center justify-center w-1/3">
                <img
                  src={img.collaborationsIdeas}
                  alt="DMM collabore avec toutes les entreprises pour les aider à avoir une bonne présence sur internet"
                  className="w-3/4"
                />
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-6 mb-6 space-y-8">
          
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-900 rounded-sm"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Qualité et Fiabilité
                </h3>
                <p className="mt-2 text-gray-700">
                  Nos services sont conçus pour offrir une qualité irréprochable
                  et répondre aux attentes les plus exigeantes.
                </p>
              </div>
            </div>

            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-900 rounded-sm"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Prix compétitifs
                </h3>
                <p className="mt-2 text-gray-700">
                  Nous proposons un excellent rapport qualité-prix pour
                  maximiser votre satisfaction.
                </p>
              </div>
            </div>

           
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-900 rounded-sm"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Expertise et Expérience
                </h3>
                <p className="mt-2 text-gray-700">
                  Notre équipe d’experts est dédiée à vous offrir les meilleures
                  solutions du marché.
                </p>
              </div>
            </div>

            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-900 rounded-sm"></div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-blue-900">
                  Support Client Dédié
                </h3>
                <p className="mt-2 text-gray-700">
                  Un service client disponible et réactif, prêt à vous
                  accompagner à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </body>

        <Footer />
      </div>
    </div>
  );
}
