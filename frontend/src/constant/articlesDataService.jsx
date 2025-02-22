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
                        'Plongez dans le monde fascinant de l’intelligence artificielle, où les innovations se succèdent à un rythme effréné. Des modèles de traitement du langage naturel aux systèmes autonomes, découvrez comment l’IA transforme notre quotidien et ouvre de nouvelles perspectives pour l’avenir.',
                    articles: [
                        {
                            id: 1,
                            image: imageAI,
                            title: 'ChatGPT 4.5 : La Nouvelle Révolution',
                            content:
                                'ChatGPT 4.5 marque une avancée significative dans le domaine de l’IA conversationnelle. Cette version améliore la compréhension contextuelle et la génération de texte, offrant des interactions plus naturelles et pertinentes. Découvrez comment cette technologie peut transformer la communication et l’assistance virtuelle.',
                        },
                        {
                            id: 2,
                            image: imageAI,
                            title: 'Réseaux de Neurones Profonds : Les Piliers de l’Innovation',
                            content:
                                'Les réseaux de neurones profonds sont au cœur de nombreuses innovations technologiques actuelles. Ils jouent un rôle crucial dans la vision par ordinateur, permettant aux machines de reconnaître et d’interpréter des images avec une précision impressionnante. De plus, ils révolutionnent le traitement du langage naturel, rendant les interactions homme-machine plus fluides et intuitives.',
                        },
                        {
                            id: 3,
                            image: imageAI,
                            title: 'IA et Santé : Vers une Médecine Révolutionnée',
                            content:
                                'L’intelligence artificielle transforme le secteur médical en offrant des outils de diagnostic basés sur l’apprentissage machine. Ces technologies permettent une détection précoce des maladies et une personnalisation des traitements, améliorant ainsi la qualité des soins et l’efficacité des interventions médicales.',
                        },
                    ],
                },
                {
                    title: 'Industrie',
                    description:
                        'Explorez les transformations profondes de l’industrie grâce à l’automatisation, la robotique et les technologies de l’Internet des objets (IoT). Ces innovations redéfinissent les processus de production et ouvrent la voie à une nouvelle ère d’efficacité et de durabilité.',
                    articles: [
                        {
                            id: 4,
                            image: imageIndustry,
                            title: 'Industrie 4.0 : L’Usine du Futur',
                            content:
                                'L’Industrie 4.0 représente une nouvelle ère d’usines intelligentes, où l’automatisation et la connectivité sont au cœur des opérations. Ces usines du futur utilisent des capteurs, des données en temps réel et des systèmes autonomes pour optimiser la production et réduire les coûts.',
                        },
                        {
                            id: 5,
                            image: imageIndustry,
                            title: 'Robots Collaboratifs : L’Alliance Homme-Machine',
                            content:
                                'Les cobots, ou robots collaboratifs, travaillent aux côtés des humains pour améliorer la productivité tout en garantissant une interaction sécurisée. Ils prennent en charge les tâches répétitives et dangereuses, permettant aux travailleurs de se concentrer sur des activités à plus forte valeur ajoutée.',
                        },
                        {
                            id: 6,
                            image: imageIndustry,
                            title: 'Maintenance Prédictive : Anticiper pour Mieux Agir',
                            content:
                                'Grâce aux capteurs IoT et à l’analyse de données, la maintenance prédictive permet d’anticiper les pannes et de réduire les temps d’arrêt. Cette approche proactive améliore la fiabilité des équipements et optimise les coûts de maintenance.',
                        },
                    ],
                },
                {
                    title: 'Économie',
                    description:
                        'Analysez les tendances économiques mondiales et leur impact sur les entreprises et les individus. Dans un monde en constante évolution, comprendre ces dynamiques est essentiel pour naviguer les défis et saisir les opportunités.',
                    articles: [
                        {
                            id: 7,
                            image: imageEconomy,
                            title: 'Crypto-monnaies : La Révolution Numérique',
                            content:
                                'Les crypto-monnaies comme le Bitcoin et l’Ethereum transforment le paysage financier global. Elles offrent de nouvelles possibilités d’investissement et de transaction, tout en posant des défis réglementaires et technologiques.',
                        },
                        {
                            id: 8,
                            image: imageEconomy,
                            title: 'Économie Circulaire : Vers un Modèle Durable',
                            content:
                                'L’économie circulaire propose des modèles de production et de consommation plus durables. En réutilisant et recyclant les ressources, elle vise à réduire les déchets et à préserver l’environnement, tout en créant de nouvelles opportunités économiques.',
                        },
                        {
                            id: 9,
                            image: imageEconomy,
                            title: 'Globalisation Post-Pandémie : S’Adapter à un Monde en Mutation',
                            content:
                                'Après la pandémie, les chaînes d’approvisionnement mondiales s’adaptent à un monde en mutation. Les entreprises doivent repenser leurs stratégies pour faire face aux nouvelles réalités économiques et géopolitiques.',
                        },
                        {
                            id: 15,
                            image: imageEconomy,
                            title: 'Globalisation Post-Pandémie : S’Adapter à un Monde en Mutation',
                            content:
                                'Après la pandémie, les chaînes d’approvisionnement mondiales s’adaptent à un monde en mutation. Les entreprises doivent repenser leurs stratégies pour faire face aux nouvelles réalités économiques et géopolitiques.',
                        },
                    ],
                },
                {
                    title: 'Informatique',
                    description:
                        'Restez informé des innovations en informatique, du développement logiciel à la cybersécurité. Dans un secteur en constante évolution, il est crucial de se tenir au courant des dernières tendances et technologies.',
                    articles: [
                        {
                            id: 10,
                            image: imageIT,
                            title: 'Langages de Programmation : Les Incontournables de 2024',
                            content:
                                'Python, JavaScript et Rust sont parmi les langages de programmation les plus en demande en 2024. Chacun offre des avantages uniques, que ce soit en termes de simplicité, de performance ou de polyvalence, répondant ainsi aux besoins variés des développeurs.',
                        },
                        {
                            id: 11,
                            image: imageIT,
                            title: 'Cloud Computing : Le Pilier de la Transformation Numérique',
                            content:
                                'Le cloud computing est au centre de la transformation numérique des entreprises. Il permet une flexibilité et une scalabilité accrues, tout en réduisant les coûts d’infrastructure et en facilitant l’accès aux ressources informatiques.',
                        },
                        {
                            id: 12,
                            image: imageIT,
                            title: 'Cybersécurité : Protéger l’Avenir Numérique',
                            content:
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.',
                        },
                        {
                            id: 13,
                            image: imageIT,
                            title: 'Cybersécurité : Protéger l’Avenir Numérique',
                            content:
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.' +
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.' +
                                '' +
                                '',
                        },
                        {
                            id: 14,
                            image: imageIT,
                            title: 'Cybersécurité : Protéger l’Avenir Numérique',
                            content:
                                'Avec la montée des cyberattaques, les entreprises renforcent leurs systèmes de sécurité. La cybersécurité est devenue une priorité pour protéger les données sensibles et garantir la confiance des utilisateurs.',
                        },
                    ],
                },
            ]);
        }, 10);
    });
};

