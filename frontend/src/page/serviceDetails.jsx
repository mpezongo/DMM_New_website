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
            <div className="flex flex-col items-center   mt-32 mb-12 p-2 px-4">
                <div className="max-w-[1200px] flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-primary text-2xl text-center font-bold">Developpement Logiciels</h2>
                            <p className="text-center text-gray-700">Confier nous votre projet et profiter d'un developpement logiciel innovant, performant et entièrement adapté à vos besoins
                                <br />
                                Nos experts transforment vos idées en solutions puissantes, intuitives et évolutives
                            </p>
                        </div>
                        <div className='w-full h-64 flex flex-col justify-end p-8' style={{ backgroundImage: `url(${images.bg_services})` }} >
                            <div className="flex gap-2 justify-between">
                                <button className="bg-primary text-white p-2 rounded cursor-pointer">Partager</button>
                                <button className="bg-primary text-white p-2 rounded cursor-pointer">Nous contacter</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-primary text-2xl text-center font-bold">DevMasterMind est un acteur majeur dans le conseil en ingenierie logicielle et l'innovation numérique</h2>
                        <p class="text-gray-700">
                            Forte de son expertise dans le secteur du développement logiciel, nous vous accompagnons à chaque étape du cycle de vie de vos projets numériques.
                        </p>
                    </div>

                    <div >
                        <h2 class="font-bold mb-2">Nos experts vous assistent dans des domaines clés tels que :</h2>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>Conception et développement de solutions logicielles sur mesure</li>
                            <li>Optimisation des processus via l'automatisation et l'intégration continue</li>
                            <li>Gestion des projets complexes en appliquant les meilleures pratiques en DevOps</li>
                            <li>Sécurité des systèmes et conformité réglementaire</li>
                            <li>Transformation digitale et adoption du Cloud</li>
                            <li>Stratégie de données : Business Intelligence (BI) et Intelligence Artificielle (IA)</li>
                        </ul>
                    </div>

                    <h2 class="text-xl font-bold text-primary">Vos enjeux</h2>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        <li>Développer des applications performantes, fiables et évolutives</li>
                        <li>Garantir la qualité du logiciel tout en respectant vos budgets et délais</li>
                        <li>Réduire les risques liés à la sécurité des données et à la conformité</li>
                        <li>Optimiser vos processus internes avec des solutions technologiques adaptées</li>
                        <li>Renforcer l'engagement des utilisateurs finaux avec des interfaces modernes et intuitives</li>
                        <li>Intégrer des solutions Cloud et IA pour accélérer votre transformation digitale</li>
                    </ul>

                    <h2 class="text-xl font-bold text-primary">Notre offre</h2>
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Conception et Développement :</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Développement sur mesure : web, mobile et desktop</li>
                                <li>Mise en place d'architectures robustes (microservices, serverless...)</li>
                                <li>Conception UX/UI pour des expériences utilisateur optimales</li>
                                <li>Solutions basées sur des technologies open-source ou propriétaires</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Gestion et Optimisation des Projets :</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Accompagnement Agile/DevOps</li>
                                <li>Automatisation des tests et des déploiements</li>
                                <li>Maintenance corrective et évolutive des logiciels</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Sécurité et Conformité :</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Audits de sécurité et gestion des vulnérabilités</li>
                                <li>Implémentation de normes de sécurité (RGPD, ISO 27001)</li>
                                <li>Planification et réponses aux incidents</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Cloud et Données :</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Migration vers le Cloud (AWS, Azure, GCP)</li>
                                <li>Solutions Data : entrepôts de données, IA et Machine Learning</li>
                                <li>Optimisation des performances des bases de données</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-800">Assistance et Formation :</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Support technique 24/7</li>
                                <li>Formation sur les technologies émergentes : IA, DevOps, Cloud</li>
                            </ul>
                        </div>
                    </div>
                <div class="w-full bg-primary text-white text-center py-6 mt-10">
                    <h2 class="text-2xl font-bold">AUTRES PRESTATIONS</h2>
                    <div class="relative max-w-2xl mx-auto mt-6">
                        <img src={images.bg_services} alt="Intégration SEO" class="w-full rounded-lg shadow-lg"/>
                            <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">INTEGRATION SEO</p>
                            <a href="/services" class="absolute bottom-4 right-4 bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                <span>→ Découvrir la prestation</span>
                            </a>
                    </div>
                </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default ServiceDetails