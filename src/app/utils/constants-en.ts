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
        title: "Home",
        icon: FaHome,
        link: "hero",
    },
    {
        title: "About",
        icon: FaUser,
        link: "about",
    },
    {
        title: "Resume",
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
    me: 'I\'m',
    job: [
        'Software Engineering',
        'Developer',
        'Freelancer'
    ],
    description: 'Motivated Software Engineer (State-Certified), open to professional opportunities.',
    resume: 'https://drive.google.com/file/d/1FPRUjnaOTfLFQ7fI2qP7WaJsX_i_gQsr/view?usp=sharing'
};

const titles = [
    {
        mainTitle: 'About Me',
        subTitle: 'Who Am I',
        description: 'Learn about my background and interests.'
    },
    {
        mainTitle: 'Services',
        subTitle: 'What I Do',
        description: 'Discover the services I offer and my areas of expertise.'
    },
    {
        mainTitle: 'Portfolio',
        subTitle: 'My Projects',
        description: 'Explore my past projects and see my work.'
    },
    {
        mainTitle: 'Resume',
        subTitle: 'My Experience',
        description: 'View my professional experience and skills.'
    },
    {
        mainTitle: 'Contact',
        subTitle: 'Get in Touch',
        description: 'Reach out to me for inquiries and collaborations.'
    }
];

const educations = [
    {
        school: 'High school Malika el Fasi Boufekrane',
        year: '2018-2019',
        description: 'Studied Mathematics, Physics, Chemistry, and basic Sciences, ..',
        link: ""
    },
    {
        school: 'ENSAH: National School of Applied Sciences of Al Hoceima',
        year: '2023-2024',
        description: 'Studying programming languages, frameworks, networks, security, and project management, ..',
        link: ""
    },
    {
        school: 'ENSIIE: National School of Computer Science for Industry and Business',
        year: '2020-2025',
        description: 'Two years of remote learning at ENSIIE, focused on core IT technologies. Didn\'t complete the program.',
        link: ""
    },
    {
        school: 'IBM: Certificate in Machine Learning with Python',
        year: '2023-2023',
        description: 'Applied Scikit-learn to build and evaluate ML models; covered data preparation, SVM, ..',
        link: "https://www.coursera.org/account/accomplishments/verify/6NZTLBBC6UGV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
        school: 'ORACLE: Certificate in Java SE 8 Programmer',
        year: '2024-2024',
        description: 'Demonstrating proficiency in object-oriented programming and core Java principles, ..',
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=306D11545DF27B9A1F2073BEE5581050C7020005159D7CE7210478864ADDA33A"
    }
];

const technologies = [
    {
        name: "spring boot",
        icon: spring,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "react native",
        icon: reactNative,
    },
    {
        name: "angular",
        icon: angular,
    },
    {
        name: "gitlab",
        icon: gitlab,
    },
    {
        name: "kubernetes",
        icon: kubernetes,
    },
    {
        name: "git",
        icon: git,
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
        name: "database",
        icon: database,
    },
    {
        name: "odoo",
        icon: odoo,
    },
];

const experiences = [
    {
        title: "Final Year Project Internship / Software Engineering",
        company_name: "NTT DATA",
        icon: nttdata,
        iconBg: "#383E56",
        date: "Jan 2025 - Present",
        points: [
            "Collaborated with developers and QA teams using Angular, Spring, Scrum, Git, and GitHub for organized development.",
            "Developed multi-role functionality for Admins, Coaches, Supervisors, and Employees to manage training sessions.",
            "Enabled users to access training content, complete quizzes, track their progress, and obtain certificates.",
            "Generated and managed meetings and tracked attendance using Microsoft Graph API and Azure."
        ],
        link: ""
    },
    {
        title: "Freelancer / Full stack developer",
        company_name: "Freelancer",
        icon: freelancer,
        iconBg: "#383E56",
        date: "2022 - Present",
        points: [
            "I'm a Full Stack Developer with over 3 years of expertise in various programming skills (Front-end, Back-end, ..).",
            "Worked on multiple projects including e-commerce websites, web applications, and mobile apps.",
            "Technologies used: Node.js, WordPress, MongoDB, MySQL, Spring Boot, Bootstrap, .. ",
        ],
        link: ""
    },
    {
        title: "Internship / Front end developer",
        company_name: "Rivera Metal",
        icon: riveraMetal,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Sep 2023",
        points: [
            "Development of a website : https://www.riverametal.com/.",
            "Analysis of company data, integration with the database.",
            "Securing company servers and data",
            "Technology used : Html, Css, Bootstrap, JavaScript, Php, MySQL, Power Bi, VS",
        ],
        link: "https://drive.google.com/file/d/1vtJWnhBMHaQaCEXI7VuOkX-EKFbAv80e/view?usp=sharing"
    },
    {
        title: "Internship / Full stack developer",
        company_name: "Centre Max Planck",
        icon: centrePlanck,
        iconBg: "#E6DEDD",
        date: "Jul 2023 - Aug 2023",
        points: [
            "Development of a WordPress website : https://centreplanck.com/.",
            "Development of a desktop application for center administration.",
            "Technology used : WordPress, SEO, Html, Css, Php, Js, Bootstrap, OOP, Sql, PhpDesktop, inno Setup.",
        ],
        link: "https://drive.google.com/file/d/1zCt3tQvkgLhjJhD4KhTUq9LOhdBU3Uyu/view?usp=sharing"
    }
];

const projects = [
    {
        name: "Setting up a Private Cloud with OpenStack",
        description: "Deployment and management of a private cloud using OpenStack to provide a scalable and secure " +
            "infrastructure. Implementation of automated orchestration and advanced monitoring",
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
        name: "Mobile Banking Apps",
        description: "Building a secure and user-friendly mobile banking app designed to simplify daily financial " +
            "management and make banking accessible on the go.",
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
        description: "Developing my personal portfolio to present my background, skills, and experience.",
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
        name: "Pharmacy management",
        description: "A centralized pharmacy management system that streamlines inventory, reservations, and client " +
            "interactions, while offering an intuitive platform for users and full control for administrators.",
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
        name: "Training management application",
        description: "Contributed to building a multi-role training platform with features for session management, " +
            "progress tracking, certification, and meeting organization, and more.",
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
        description:
            "Web application allows administrators, course managers and teachers to " +
            "manage the timetable, assign modules and enter grades.",
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
        description:
            "Development of a platform for booking travel and hotels, with an admin interface for complete management.",
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
        description:
            "Desktop application allows players to plant bombs to destroy " +
            "obstacles, eliminate enemies and achieve an objective.",
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
        description:
            "Creating final year projects and planning defenses, " +
            "managing students and professors, and scheduling defense timetables.",
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
        description:
            "The project focuses on implementing a comprehensive financial management system. It includes " +
            "managing financial accounts, transactions, balances, and client relationships.",
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
        description:
            "Project management within folders. Each folder acts as an independent " +
            "project, incorporating advanced features such as Face Detection, real-time Person and Object Counting in live " +
            "videos, and Position Detection, and more.",
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
        description:
            "Development of a WordPress website",
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
        description:
            "Developing a desktop application for center administration, encompassing student, professor, " +
            "module, payment, classroom, and timetable management.",
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
        description:
            "Developing an application for exam planning, teacher, administrator, supervisor, and " +
            "module management, including groups, absences, exam timetables, and reports.",
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
        description:
            "Developing an e-commerce platform that utilizes image-based search, displaying " +
            "products based on user-provided images.",
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
        description:
            "Developing a straightforward e-shop website.",
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
        description:
            " Manage reservations, insert passenger details, process payments, " +
            "verify tickets, and download tickets seamlessly. Includes an admin " +
            "portal for efficient transport management.",
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
    successMessage: "Thank you. I will get back to you as soon as possible.",
    errorMessage: "Something went wrong.",
    formReferenceError: "Form reference is not set.",

    nameLabel: "Your Name",
    namePlaceholder: "What's your name?",

    emailLabel: "Your Email",
    emailPlaceholder: "What's your email address?",

    messageLabel: "Your Message",
    messagePlaceholder: "What do you want to say?",

    sendingStatus: "Sending...",
    sendButton: "Send"
};




export { services, technologies, experiences, projects, sidebars, socialLinks, titles, personnelInfos, educations, contactForm };
