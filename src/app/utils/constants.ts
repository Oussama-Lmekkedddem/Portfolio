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
    centrePlanck, riveraMetal, freelancer,
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
} from "../assets";
import {FiExternalLink} from "react-icons/fi";

const projects = [
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
                url: "https://drive.google.com/file/d/1oi08J0GKSA1rgvvk3HJ3S0WE5EXBRwKj/view?usp=drive_link",
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
                url: "https://drive.google.com/file/d/1YRcFT_EDsIXOEa0iox1LV1ST6SeYVFqh/view?usp=sharing",
                label: "Report",
                icon: FaFilePdf
            },
            {
                url: "#",
                label: "Website",
                icon: FiExternalLink
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
        title: "Internship/Full stack developer",
        company_name: "Centre Max Planck",
        icon: centrePlanck,
        iconBg: "#E6DEDD",
        date: "Jul 2023 - Aug 2023",
        points: [
            "Development of a WordPress website : https://centreplanck.com/.",
            "Development of a desktop application for center administration.",
            "Technology used : WordPress, SEO, Html, Css, Php, Js, Bootstrap, OOP, Sql, PhpDesktop, inno Setup.",
        ],
    },
    {
        title: "Freelancer/Full stack developer",
        company_name: "Freelancer",
        icon: freelancer,
        iconBg: "#383E56",
        date: "2022 - Present",
        points: [
            "I'm a Full Stack Developer with over 3 years of expertise in various programming skills (Front-end, Back-end, ..).",
            "Worked on multiple projects including e-commerce websites, web applications, and mobile apps.",
            "Technologies used: Node.js, WordPress, MongoDB, MySQL, Spring Boot, Bootstrap, .. ",
        ],
    },

    {
        title: "Internship/Front end developer",
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

const personnelInfos = {
        name: 'LMEKKEDDEM Oussama',
        job: [
            'Software Engineering',
            'Developer',
            'Freelancer'
        ],
        description: 'Motivated Software Engineer (State-Certified), open to professional opportunities.',
        resume: 'https://drive.google.com/file/d/1jqBN8H9VcfSPP8jL_ObGT8NseIeaA2Tv/view?usp=sharing'
};
const educations = [
    {
        school: 'High school Malika el Fasi Boufekrane',
        year: '2018-2019',
        description: 'Studied Mathematics, Physics, Chemistry, and basic Sciences, ..',
        link: "#"
    },
    {
        school: 'ENSAH: National School of Applied Sciences of Al Hoceima',
        year: '2023-2024',
        description: 'Studying programming languages, frameworks, networks, security, and project management, ..',
        link: "#"
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
        link: "#"
    },
    {
        school: 'ORACLE: Certificate in Java SE 8 Programmer',
        year: '2024-2024',
        description: 'Demonstrating proficiency in object-oriented programming and core Java principles, ..',
        link: "#"
    }
];


export { services, technologies, experiences, projects, sidebars, socialLinks, titles, personnelInfos, educations };
