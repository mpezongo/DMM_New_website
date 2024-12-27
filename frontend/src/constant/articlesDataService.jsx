import imageAI from  '../assets/bog-images/imageAI.jpg';
import imageIndustry from '../assets/bog-images/industry.jpg';
import imageEconomy from '../assets/bog-images/imageEconomy.jpg';
import imageIT from '../assets/bog-images/it.jpg';


export const fetchSections = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Intelligence Artificielle',
                    description:
                        'Découvrez les dernières avancées en intelligence artificielle, des modèles de traitement du langage aux systèmes autonomes.',
                    articles: [
                        {
                            id: 1,
                            image: imageAI,
                            title: 'ChatGPT 4.5',
                            content:
                                'ChatGPT 4.5 apporte des améliorations significatives en compréhension contextuelle et génération de texte.',
                        },
                        {
                            id: 2,
                            image: imageAI,
                            title: 'Réseaux de neurones profonds',
                            content:
                                'Les réseaux de neurones profonds sont au cœur de nombreuses innovations en vision par ordinateur et en traitement du langage naturel.',
                        },
                        {
                            id: 3,
                            image: imageAI,
                            title: 'IA et Santé',
                            content:
                                'L’intelligence artificielle révolutionne le secteur médical avec des outils de diagnostic basés sur l’apprentissage machine.',
                        },
                    ],
                },
                {
                    title: 'Industrie',
                    description:
                        'Explorez les transformations de l’industrie grâce à l’automatisation, la robotique et les technologies IoT.',
                    articles: [
                        {
                            id: 4,
                            image: imageIndustry,
                            title: 'Industrie 4.0',
                            content:
                                'L’Industrie 4.0 marque une nouvelle ère d’usines intelligentes connectées et automatisées.',
                        },
                        {
                            id: 5,
                            image: imageIndustry,
                            title: 'Robots collaboratifs',
                            content:
                                'Les cobots aident à améliorer la productivité tout en garantissant une interaction sécurisée avec les humains.',
                        },
                        {
                            id: 6,
                            image: imageIndustry,
                            title: 'Maintenance prédictive',
                            content:
                                'Les capteurs IoT et l’analyse de données permettent d’anticiper les pannes et de réduire les temps d’arrêt.',
                        },
                    ],
                },
                {
                    title: 'Economie',
                    description:
                        'Analysez les tendances économiques mondiales et leur impact sur les entreprises et les individus.',
                    articles: [
                        {
                            id: 7,
                            image: imageEconomy,
                            title: 'Crypto-monnaies',
                            content:
                                'Bitcoin, Ethereum et autres monnaies numériques transforment le paysage financier global.',
                        },
                        {
                            id: 8,
                            image: imageEconomy,
                            title: 'Economie circulaire',
                            content:
                                'L’économie circulaire propose des modèles de production et de consommation plus durables.',
                        },
                        {
                            id: 9,
                            image: imageEconomy,
                            title: 'Globalisation post-pandémie',
                            content:
                                'Les chaînes d’approvisionnement mondiales s’adaptent à un monde en mutation après la pandémie.',
                        },

                        {
                            id: 15,
                            image: imageEconomy,
                            title: 'Globalisation post-pandémie',
                            content:
                                'Les chaînes d’approvisionnement mondiales s’adaptent à un monde en mutation après la pandémie.',
                        },
                    ],
                },
                {
                    title: 'Informatique',
                    description:
                        'Restez informé des innovations en informatique, du développement logiciel à la cybersécurité.',
                    articles: [
                        {
                            id: 10,
                            image: imageIT,
                            title: 'Langages de programmation',
                            content:
                                'Python, JavaScript et Rust sont parmi les langages les plus en demande en 2024.',
                        },
                        {
                            id: 11,
                            image: imageIT,
                            title: 'Cloud computing',
                            content:
                                'Le cloud computing est au centre de la transformation numérique des entreprises.',
                        },
                        {
                            id: 12,
                            image: imageIT,
                            title: 'Cybersécurité',
                            content:
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.',
                        },

                        {
                            id: 13,
                            image: imageIT,
                            title: 'Cybersécurité',
                            content:
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.' +
                                '' +
                                '',
                        },

                        {
                            id: 14,
                            image: imageIT,
                            title: 'Cybersécurité',
                            content:
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité.',
                        },
                    ],
                },
            ]);
        }, 10);
    });
};
