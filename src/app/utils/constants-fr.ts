import {
    FaGithub,
    FaLinkedin,
    FaHome,
    FaUser,
    FaFileAlt,
    FaBriefcase,
    FaEnvelope,
    FaFilePdf
} from 'react-icons/fa';

import {
    mobile,
    backend,
    creator,
    web,

    reactjs, tailwind, mongodb, git, figma, docker,
    spring, aspnet, laravel, django, bootstrap,
    linux, threejs,
    centrePlanck, riveraMetal, freelancer, nttdata,
    apis, database, gitlab, kafka, kubernetes,
    scrum, odoo, reactNative, angular, azure,

    c1, c2,
    django1, django2, django3, django4,
    java1, java2, java3, java4, java5, java6, java7, java8, java9,
    nettr1, nettr2, nettr3, nettr4, nettr5, nettr6,
    phpc1, phpc2, phpc3, phpc4, phpc5, phpc6, phpc7,
    phpm1, phpm2, phpm3, phpm4, phpm5, phpm6, phpm7, phpm8,
    qt1, qt2,
    springf1, springf2, springf3, springf4, springf5, springf6,
    springj1, springj2, springj3, springj4, springj5, springj6, springj7, springj8,
    websitep1, websitep2, websitep3,
    websites1, websites2, websites3, websites4,
    wordpressc1, wordpressc2, wordpressc3,
    couldOpenStack1, couldOpenStack2, couldOpenStack3, couldOpenStack4, couldOpenStack5,
    mbBank1, mbBank2, mbBank3, mbBank4,
    myPortfolio1, myPortfolio2, myPortfolio3,
    odooPharmacy1, odooPharmacy2, odooPharmacy3, odooPharmacy4, odooPharmacy5,
    trainingApp1, trainingApp2, trainingApp3, trainingApp4, trainingApp5
} from "../assets";
import {FiExternalLink} from "react-icons/fi";

const sidebars = [
    {
        title: "Accueil",
        icon: FaHome,
        link: "hero",
    },
    {
        title: "À Propos",
        icon: FaUser,
        link: "about",
    },
    {
        title: "Résumé",
        icon: FaFileAlt,
        link: "resume",
    },
    {
        title: "Portfolio",
        icon: FaBriefcase,
        link: "portfolio",
    },
    {
        title: "Contact",
        icon: FaEnvelope,
        link: "contact",
    },
];

const personnelInfos = {
    name: 'LMEKKEDDEM Oussama',
    me: 'Je suis',
    job: [
        'Ingénieur Logiciel',
        'Développeur',
        'Freelance'
    ],
    description: 'Ingénieur Logiciel motivé (certifié par l’État), ouvert aux opportunités professionnelles.',
    resume: 'https://drive.google.com/file/d/1-PjqT-JPCq_XyQjoRpFQ9F1zKXO5EWLU/view?usp=sharing',
    welcome: 'Bienvenue'
};

const titles = [
    { id: 'about',     mainTitle: 'Qui suis-je ?', subTitle: 'Qui suis-je',        description: 'Découvrez mon parcours et mes centres d’intérêt.' },
    { id: 'services',  mainTitle: 'Services',        subTitle: 'Ce que je fais',      description: 'Découvrez les services que je propose et mes domaines d’expertise.' },
    { id: 'portfolio', mainTitle: 'Portfolio',       subTitle: 'Mes Projets',         description: 'Explorez mes projets réalisés et voyez mon travail.' },
    { id: 'resume',    mainTitle: 'Résumé',          subTitle: 'Mon Parcours',        description: 'Consultez mon expérience professionnelle et mes compétences.' },
    { id: 'contact',   mainTitle: 'Contact',         subTitle: 'Me Contacter',        description: 'Prenez contact avec moi pour toute demande ou collaboration.' },
];


const educations = [
    {
        school: 'Lycée Malika el Fasi Boufekrane',
        year: '2018-2019',
        description: 'Études en Mathématiques, Physique, Chimie et Sciences de base.',
        link: ""
    },
    {
        school: 'ENSAH : École Nationale des Sciences Appliquées d’Al Hoceima',
        year: '2023-2024',
        description: 'Études en langages de programmation, frameworks, réseaux, sécurité et gestion de projets.',
        link: ""
    },
    {
        school: 'ENSIIE : École Nationale Supérieure d’Informatique pour l’Industrie et l’Entreprise',
        year: '2020-2025',
        description: 'Deux ans d’apprentissage à distance à l’ENSIIE, axés sur les technologies fondamentales de l’informatique. Programme non terminé.',
        link: ""
    },
    {
        school: 'IBM : Certificat en Machine Learning avec Python',
        year: '2023-2023',
        description: 'Utilisation de Scikit-learn pour créer et évaluer des modèles ML ; préparation des données, SVM, etc.',
        link: "https://www.coursera.org/account/accomplishments/verify/6NZTLBBC6UGV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
        school: 'ORACLE : Certificat Java SE 8 Programmer',
        year: '2024-2024',
        description: 'Maîtrise de la programmation orientée objet et des principes fondamentaux de Java.',
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=306D11545DF27B9A1F2073BEE5581050C7020005159D7CE7210478864ADDA33A"
    }
];

const technologies = [
    {
        name: "spring boot",
        icon: spring,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "angular",
        icon: angular,
    },
    {
        name: "kubernetes",
        icon: kubernetes,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "azure",
        icon: azure,
    },
    {
        name: "linux",
        icon: linux,
    },
    {
        name: "react native",
        icon: reactNative,
    },
    {
        name: "database",
        icon: database,
    },
    {
        name: "ASP.Net",
        icon: aspnet,
    },
    {
        name: "laravel",
        icon: laravel,
    },
    {
        name: "apis",
        icon: apis,
    },
    {
        name: "odoo",
        icon: odoo,
    }
];

const experiences = [
    {
        title: "Stage de fin d'études (PFE) / Ingénierie Logicielle",
        company_name: "NTT DATA",
        icon: nttdata,
        iconBg: "#383E56",
        date: "Janvier 2025 - Présent",
        points: [
            "Collaboration avec les équipes de développement et de test en utilisant Angular, Spring, Scrum, Git et GitHub pour un développement structuré.",
            "Développement de fonctionnalités multi-rôles pour les administrateurs, formateurs, superviseurs et employés afin de gérer les sessions de formation.",
            "Mise en place d’un accès au contenu de formation, de quiz, de suivi de progression et de génération de certificats pour les utilisateurs.",
            "Génération et gestion de réunions avec suivi de présence via Microsoft Graph API et Azure."
        ],
        link: ""
    },
    {
        title: "Freelance / Développeur Full Stack",
        company_name: "Freelance",
        icon: freelancer,
        iconBg: "#383E56",
        date: "2022 - Présent",
        points: [
            "Je suis Développeur Full Stack avec plus de 3 ans d'expérience dans diverses compétences de programmation (Front-end, Back-end, etc.).",
            "Participation à plusieurs projets : sites e-commerce, applications web et applications mobiles.",
            "Technologies utilisées : Node.js, WordPress, MongoDB, MySQL, Spring Boot, Bootstrap, etc.",
        ],
        link: ""
    },
    {
        title: "Stage / Développeur Front-End",
        company_name: "Rivera Metal",
        icon: riveraMetal,
        iconBg: "#E6DEDD",
        date: "Août 2023 - Sep 2023",
        points: [
            "Développement d’un site web : https://www.riverametal.com/.",
            "Analyse des données de l’entreprise, intégration avec la base de données.",
            "Sécurisation des serveurs et des données de l’entreprise.",
            "Technologies utilisées : HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, Power BI, VS Code.",
        ],
        link: "https://drive.google.com/file/d/1vtJWnhBMHaQaCEXI7VuOkX-EKFbAv80e/view?usp=sharing"
    },
    {
        title: "Stage / Développeur Full Stack",
        company_name: "Centre Max Planck",
        icon: centrePlanck,
        iconBg: "#E6DEDD",
        date: "Juil 2023 - Août 2023",
        points: [
            "Développement d’un site web WordPress : https://centreplanck.com/.",
            "Développement d’une application de bureau pour l’administration du centre.",
            "Technologies utilisées : WordPress, SEO, HTML, CSS, PHP, JavaScript, Bootstrap, POO, SQL, PhpDesktop, Inno Setup.",
        ],
        link: "https://drive.google.com/file/d/1zCt3tQvkgLhjJhD4KhTUq9LOhdBU3Uyu/view?usp=sharing"
    },
];

const projects = [
    {
        name: "Configuration d'un Cloud Privé avec OpenStack",
        description: "Déploiement et gestion d'un cloud privé en utilisant OpenStack pour fournir une infrastructure " +
            "évolutive et sécurisée. Mise en œuvre d'une orchestration automatisée et d'une surveillance avancée",
        tags: [
            {
                name: " Ubuntu",
                color: "violet-gradient",
            },
            {
                name: "DevStack",
                color: "green-text-gradient",
            },
            {
                name: "Nova",
                color: "orange-text-gradient",
            },
            {
                name: "Swift",
                color: "orange-text-gradient",
            },
            {
                name: "Neutron",
                color: "blue-text-gradient",
            }
        ],
        images: [
            couldOpenStack1, couldOpenStack2, couldOpenStack3, couldOpenStack4, couldOpenStack5
        ],
        links: [
            {
                url: "https://drive.google.com/file/d/1FJbuKwm5a1h-GRH4Y125E1AHxHI-SAmU/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            }
        ]
    },
    {
        name: "Applications de Banque Mobile",
        description: "Construction d'une application de banque mobile sécurisée et conviviale conçue pour simplifier " +
            "la gestion financière quotidienne et rendre la banque accessible en tout lieu.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "XML",
                color: "violet-gradient",
            },
            {
                name: "SQLite",
                color: "green-text-gradient",
            },
            {
                name: "Android studio",
                color: "orange-text-gradient",
            },
            {
                name: "Gradle",
                color: "orange-text-gradient",
            },
            {
                name: "Git",
                color: "violet-gradient",
            },
            {
                name: "GitHub",
                color: "blue-text-gradient",
            }
        ],
        images: [
            mbBank1, mbBank2, mbBank3, mbBank4
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/MobileApplication",
                label: "GitHub",
                icon: FaGithub
            },
            {
                url: "https://drive.google.com/file/d/1eZmWt0NKjbKvdt9m2c3GAvFDL36DAMt4/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            }
        ]
    },
    {
        name: "Portfolio",
        description: "Développement de mon portfolio personnel pour présenter mon parcours, mes compétences et mon expérience.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "violet-gradient",
            },
            {
                name: "Tailwind css",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Css",
                color: "blue-text-gradient",
            },
            {
                name: "Git",
                color: "violet-gradient",
            },
            {
                name: "GitHub",
                color: "blue-text-gradient",
            }
        ],
        images: [
            myPortfolio1, myPortfolio2, myPortfolio3
        ],
        links: [
            {
                url: "https://oussama-lmekkedddem.github.io/Portfolio/",
                label: "Website",
                icon: FiExternalLink
            }
        ]
    },
    {
        name: "Gestion de pharmacie",
        description: "Un système centralisé de gestion de pharmacie qui simplifie la gestion des stocks, des réservations " +
            "et des interactions avec les clients, tout en offrant une plateforme intuitive pour les utilisateurs et " +
            "un contrôle total pour les administrateurs.",
        tags: [
            {
                name: "Odoo",
                color: "blue-text-gradient",
            },
            {
                name: "Docker",
                color: "violet-gradient",
            },
            {
                name: "Nginx",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Postgres",
                color: "green-text-gradient",
            },
            {
                name: "PgAdmin",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Css",
                color: "blue-text-gradient",
            },
            {
                name: "Git",
                color: "violet-gradient",
            },
            {
                name: "GitLab",
                color: "blue-text-gradient",
            }
        ],
        images: [
            odooPharmacy1, odooPharmacy2, odooPharmacy3, odooPharmacy4, odooPharmacy5
        ],
        links: [
            {
                url: "https://drive.google.com/file/d/1vNYR6Qla6PXy1EhrazqBhOW3XbvvXh0Y/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            }
        ]
    },
    {
        name: "Application de gestion de formation",
        description: "Participation à la création d’une plateforme de formation multi-rôles avec des fonctionnalités de " +
            "gestion des sessions, de suivi des progrès, de certification, d’organisation de réunions, et plus encore.",
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "Angular",
                color: "violet-gradient",
            },
            {
                name: "Azure",
                color: "green-text-gradient",
            },
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Vault",
                color: "pink-text-gradient",
            },
            {
                name: "Microsoft graph",
                color: "orange-text-gradient",
            },
            {
                name: "PrimeNg",
                color: "blue-text-gradient",
            },
            {
                name: "Spring Data JPA",
                color: "green-text-gradient",
            },
            {
                name: "Spring Security",
                color: "blue-text-gradient",
            },
            {
                name: "Postgres",
                color: "green-text-gradient",
            },
            {
                name: "PgAdmin",
                color: "pink-text-gradient",
            },
            {
                name: "TypeScript",
                color: "orange-text-gradient",
            },
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Scss",
                color: "blue-text-gradient",
            },
            {
                name: "Git",
                color: "violet-gradient",
            },
            {
                name: "GitLab",
                color: "blue-text-gradient",
            }
        ],
        images: [
            trainingApp1, trainingApp2, trainingApp3, trainingApp4, trainingApp5
        ],
        links: [
            {
                url: "https://drive.google.com/file/d/12lW2jklNCNEkR-NPtxZBLTzEYlw5PhNH/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            }
        ]
    },
    {
        name: "Study-Management",
        description: "Application web permettant aux administrateurs, responsables de cours et enseignants de gérer les " +
            "emplois du temps, d'assigner des modules et de saisir les notes.",
        tags: [
            {
                name: "Php",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "violet-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "Html",
                color: "orange-text-gradient",
            },
            {
                name: "Css",
                color: "blue-text-gradient",
            },
            {
                name: "Git",
                color: "violet-gradient",
            },
            {
                name: "GitHub",
                color: "blue-text-gradient",
            }
        ],
        images: [
            phpm1, phpm2, phpm3, phpm4, phpm5, phpm6, phpm7, phpm8
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/ENSAH-Service---Study-Management-Web-Application",
                label: "GitHub",
                icon: FaGithub
            },
            {
                url: "https://drive.google.com/file/d/14YiuFCSV23lgmvOg32xaopyJ0jM6L1dV/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            }
        ]
    },
    {
        name: "Travel & Hotel Reservation Manag",
        description: "Développement d'une plateforme de réservation de voyages et d'hôtels, avec une interface d'administration complète.",
        tags: [
            {
                name: "Java",
                color: "orange-text-gradient",
            },
            {
                name: "JavaFx",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "blue-text-gradient",
            },
            {
                name: "Scene Builder",
                color: "pink-text-gradient",
            },
            {
                name: "Git",
                color: "violet-gradient",
            },
            {
                name: "GitHub",
                color: "blue-text-gradient",
            }
        ],
        images: [
            java1, java2, java3, java4, java5, java6, java7, java8, java9
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/Travel-and-Hotel-Reservation-Management-System.git",
                label: "GitHub",
                icon: FaGithub
            },
            {
                url: "https://drive.google.com/file/d/1J8TveXH5qADp8RcyvTMyjFBtDb5oOSj6/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            }
        ]
    },
    {
        name: "DragonBomber Game",
        description: "Application de bureau permettant aux joueurs de poser des bombes pour détruire des obstacles, " +
            "éliminer des ennemis et atteindre un objectif.",
        tags: [
            {
                name: "C++",
                color: "blue-text-gradient",
            },
            {
                name: "Qt",
                color: "green-text-gradient",
            },
            {
                name: "Clion",
                color: "pink-text-gradient",
            },
        ],
        images: [
            qt1, qt2,
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/Dragon-Bomber.git",
                label: "GitHub",
                icon: FaGithub
            }
        ]
    },
    {
        name: "Management & Defense Planning",
        description: "Création de projets de fin d'études et planification des soutenances, gestion des étudiants et " +
            "des professeurs, ainsi que des emplois du temps de soutenance.",
        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "Clion",
                color: "pink-text-gradient",
            },
        ],
        images: [
            c1, c2
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/Gestion-des-stages-de-PFE-et-planification-des-soutenances.git",
                label: "GitHub",
                icon: FaGithub
            }
        ]
    },
    {
        name: "Financial Management",
        description: "Le projet se concentre sur la mise en place d'un système complet de gestion financière. Il inclut " +
            "la gestion des comptes financiers, des transactions, des soldes et des relations clients.",
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "Spring Data JPA",
                color: "green-text-gradient",
            },
            {
                name: "Thymeleaf",
                color: "pink-text-gradient",
            },
            {
                name: "Spring Security",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Java",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "violet-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "Ajax",
                color: "pink-text-gradient",
            },
            {
                name: "Html",
                color: "green-text-gradient",
            },
            {
                name: "Css",
                color: "blue-text-gradient",
            },
        ],
        images: [
            springf1, springf2, springf3, springf4, springf5, springf6,
        ],
        links: [
        ]
    },
    {
        name: "Python Project",
        description: "Gestion de projets dans des dossiers. Chaque dossier agit comme un projet indépendant, intégrant " +
            "des fonctionnalités avancées telles que la détection faciale, le comptage en temps réel des personnes et " +
            "objets dans des vidéos en direct, la détection de position, et plus encore.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Django",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "violet-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Html",
                color: "pink-text-gradient",
            },
            {
                name: "Css",
                color: "orange-text-gradient",
            },
        ],
        images: [
            django1, django2, django3, django4,
        ],
        links: [
        ]
    },
    {
        name: "WordPress WebSite",
        description: "Développement d'un site web WordPress.",
        tags: [
            {
                name: "WordPress",
                color: "blue-text-gradient",
            },
            {
                name: "SEO",
                color: "green-text-gradient",
            },
        ],
        images: [
            wordpressc1, wordpressc2, wordpressc3
        ],
        links: [
            {
                url: "https://centreplanck.com/",
                label: "Website",
                icon: FiExternalLink
            }
        ]
    },
    {
        name: "Center administration",
        description: "Développement d'une application de bureau pour l'administration d'un centre, comprenant la gestion " +
            "des étudiants, des professeurs, des modules, des paiements, des salles de classe et des emplois du temps.",
        tags: [
            {
                name: "Php",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "violet-gradient",
            },
            {
                name: "OOP",
                color: "orange-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "PhpDesktop",
                color: "blue-text-gradient",
            },
            {
                name: "Inno Setup",
                color: "pink-text-gradient",
            },
        ],
        images: [
            phpc1, phpc2, phpc3, phpc4, phpc5, phpc6, phpc7,
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/School_Administration_Project.git",
                label: "GitHub",
                icon: FaGithub
            }
        ]
    },
    {
        name: "Exam planning",
        description: "Développement d'une application pour la planification des examens, la gestion des enseignants, " +
            "administrateurs, surveillants et modules, incluant les groupes, les absences, les emplois du temps d'examens et les rapports.",
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "Spring Data JPA",
                color: "green-text-gradient",
            },
            {
                name: "Thymeleaf",
                color: "pink-text-gradient",
            },
            {
                name: "Spring Security",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "green-text-gradient",
            },
            {
                name: "Java",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "violet-gradient",
            },
            {
                name: "JavaScript",
                color: "orange-text-gradient",
            },
            {
                name: "Html",
                color: "green-text-gradient",
            },
            {
                name: "Css",
                color: "blue-text-gradient",
            },
            {
                name: "Hibernate",
                color: "pink-text-gradient",
            },
        ],
        images: [
            springj1, springj2, springj3, springj4, springj5, springj6, springj7, springj8,
        ],
        links: [
        ]
    },
    {
        name: "Image-Based E-Commerce Search",
        description: "Développement d'une plateforme e-commerce utilisant la recherche par image, affichant les produits " +
            "en fonction des images fournies par l'utilisateur.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Flask",
                color: "green-text-gradient",
            },
            {
                name: "Keras",
                color: "pink-text-gradient",
            },
            {
                name: "NumPy",
                color: "blue-text-gradient",
            },
            {
                name: "PIL",
                color: "green-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Html",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "violet-gradient",
            },
            {
                name: "Css",
                color: "orange-text-gradient",
            },
        ],
        images: [
            websitep1, websitep2, websitep3,
        ],
        links: [
        ]
    },
    {
        name: "E-Shop Website",
        description: "Développement d'un site e-commerce simple.",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "JQuery",
                color: "green-text-gradient",
            },
            {
                name: "Html",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "violet-gradient",
            },
            {
                name: "Css",
                color: "orange-text-gradient",
            },
        ],
        images: [
            websites1, websites2, websites3, websites4
        ],
        links: [
        ]
    },
    {
        name: "Bus Reservation System",
        description: "Gérer les réservations, enregistrer les détails des passagers, traiter les paiements, vérifier " +
            "les billets et télécharger les billets facilement. Comprend un portail administrateur pour une gestion efficace des transports.",
        tags: [
            {
                name: "ASP.Net",
                color: "violet-gradient",
            },
            {
                name: "C#",
                color: "orange-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "Html",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "violet-gradient",
            },
            {
                name: "Css",
                color: "orange-text-gradient",
            },
        ],
        images: [
            nettr1, nettr2, nettr3, nettr4, nettr5, nettr6,
        ],
        links: [
            {
                url: "https://github.com/Oussama-Lmekkedddem/PRJ_NET.git",
                label: "GitHub",
                icon: FaGithub
            }
        ]
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const socialLinks = [
    {
        href: 'https://github.com/Oussama-Lmekkedddem',
        icon: FaGithub,
        name: 'Github',
        hoverColor: '#6e5494'
    },
    {
        href: 'https://www.linkedin.com/in/lmekkeddem-oussama-3b4606247/',
        icon: FaLinkedin,
        name: 'LinkedIn',
        hoverColor: '#0077B5'
    }
];

const contactForm = {
    successMessage: "Merci. Je vous répondrai dès que possible.",
    errorMessage: "Une erreur s'est produite.",
    formReferenceError: "La référence du formulaire n'est pas définie.",

    nameLabel: "Votre nom",
    namePlaceholder: "Quel est votre nom ?",

    emailLabel: "Votre email",
    emailPlaceholder: "Quelle est votre adresse email ?",

    messageLabel: "Votre message",
    messagePlaceholder: "Que voulez-vous dire ?",

    sendingStatus: "Envoi en cours...",
    sendButton: "Envoyer"
};

export { services, technologies, experiences, projects, sidebars, socialLinks, titles, personnelInfos, educations, contactForm };
