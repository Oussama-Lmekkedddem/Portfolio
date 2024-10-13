import {
    FaGithub,
    FaLinkedin,
    FaHome,
    FaUser,
    FaFileAlt,
    FaBriefcase,
    FaEnvelope
} from 'react-icons/fa';

import {
    mobile,
    backend,
    creator,
    web,
    reactjs,
    tailwind,
    mongodb,
    git,
    figma,
    docker,
    spring,
    aspnet,
    django,
    bootstrap,
    laravel,
    linux,
    angular,
    threejs,
    centrePlanck,
    riveraMetal,
    freelancer,

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
                name: "JavaScript,",
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
        source_code_link: "https://github.com/Oussama-Lmekkedddem/ENSAH-Service---Study-Management-Web-Application",
        report_link: "https://drive.google.com/file/d/1oi08J0GKSA1rgvvk3HJ3S0WE5EXBRwKj/view?usp=drive_link",
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
        source_code_link: "https://github.com/Oussama-Lmekkedddem/Travel-and-Hotel-Reservation-Management-System.git",
        report_link: "https://drive.google.com/file/d/1YRcFT_EDsIXOEa0iox1LV1ST6SeYVFqh/view?usp=sharing",
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
                name: "CLion",
                color: "pink-text-gradient",
            },
        ],
        images: [
            qt1, qt2,
        ],
        source_code_link: "https://github.com/Oussama-Lmekkedddem/Dragon-Bomber.git",
        report_link: "",
    },
    {
        name: "(PFE) Management & Defense Planning",
        description:
            "Creating final year projects (PFE) and planning defenses, " +
            "managing students and professors, and scheduling defense timetables.",
        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "CLion",
                color: "pink-text-gradient",
            },
        ],
        images: [
            c1, c2
        ],
        source_code_link: "https://github.com/Oussama-Lmekkedddem/Gestion-des-stages-de-PFE-et-planification-des-soutenances.git",
        report_link: "",
    },
    {
        name: "Financial Management",
        description:
            "The project focuses on implementing a comprehensive financial management system. It includes " +
            "managing financial accounts, transactions, balances, and client relationships.",
        tags: [
            {
                name: "spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "spring Data JPA",
                color: "green-text-gradient",
            },
            {
                name: "thymeleaf",
                color: "pink-text-gradient",
            },
            {
                name: "spring Security",
                color: "blue-text-gradient",
            },
            {
                name: "sql",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "violet-gradient",
            },
            {
                name: "js",
                color: "orange-text-gradient",
            },
            {
                name: "ajax",
                color: "pink-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
        ],
        images: [
            springf1, springf2, springf3, springf4, springf5, springf6,
        ],
        source_code_link: "",
        report_link: "",
    },
    {
        name: "Python Project",
        description:
            "Project management within folders. Each folder acts as an independent " +
            "project, incorporating advanced features such as Face Detection, real-time Person and Object Counting in live " +
            "videos, and Position Detection, and more.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "django",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "violet-gradient",
            },
            {
                name: "typeScript",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "orange-text-gradient",
            },
        ],
        images: [
            django1, django2, django3, django4,
        ],
        source_code_link: "",
        report_link: "",
    },
    {
        name: "WordPress WebSite",
        description:
            "Development of a WordPress website",
        tags: [
            {
                name: "wordPress",
                color: "blue-text-gradient",
            },
            {
                name: "seo",
                color: "green-text-gradient",
            },
        ],
        images: [
            wordpressc1, wordpressc2, wordpressc3
        ],
        source_code_link: "https://centreplanck.com/",
        report_link: "",
    },
    {
        name: "Center administration",
        description:
            "Developing a desktop application for center administration, encompassing student, professor, " +
            "module, payment, classroom, and timetable management.",
        tags: [
            {
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap,",
                color: "violet-gradient",
            },
            {
                name: "oop",
                color: "orange-text-gradient",
            },
            {
                name: "sql",
                color: "green-text-gradient",
            },
            {
                name: "phpDesktop",
                color: "blue-text-gradient",
            },
            {
                name: "inno Setup",
                color: "pink-text-gradient",
            },
        ],
        images: [
            phpc1, phpc2, phpc3, phpc4, phpc5, phpc6, phpc7,
        ],
        source_code_link: "https://github.com/Oussama-Lmekkedddem/School_Administration_Project.git",
        report_link: "",
    },
    {
        name: "Exam planning",
        description:
            "Developing an application for exam planning, teacher, administrator, supervisor, and " +
            "module management, including groups, absences, exam timetables, and reports.",
        tags: [
            {
                name: "spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "spring Data JPA",
                color: "green-text-gradient",
            },
            {
                name: "thymeleaf",
                color: "pink-text-gradient",
            },
            {
                name: "spring Security",
                color: "blue-text-gradient",
            },
            {
                name: "sql",
                color: "green-text-gradient",
            },
            {
                name: "java",
                color: "pink-text-gradient",
            },
            {
                name: "bootstrap",
                color: "violet-gradient",
            },
            {
                name: "js",
                color: "orange-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "hibernate",
                color: "pink-text-gradient",
            },
        ],
        images: [
            springj1, springj2, springj3, springj4, springj5, springj6, springj7, springj8,
        ],
        source_code_link: "",
        report_link: "",
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
                name: "Js",
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
        source_code_link: "",
        report_link: "",
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
                name: "jQuery",
                color: "green-text-gradient",
            },
            {
                name: "Html",
                color: "pink-text-gradient",
            },
            {
                name: "Js",
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
        source_code_link: "",
        report_link: "",
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
                name: "Js",
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
        source_code_link: "https://github.com/Oussama-Lmekkedddem/PRJ_NET.git",
        report_link: "",
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "bootstrap",
        icon: bootstrap,
    },
    {
        name: "angular",
        icon: angular,
    },
    {
        name: "figma",
        icon: figma,
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
        name: "linux",
        icon: linux,
    },
    {
        name: "spring boot",
        icon: spring,
    },
    {
        name: "ASP.Net",
        icon: aspnet,
    },
    {
        name: "django",
        icon: django,
    },
    {
        name: "laravel",
        icon: laravel,
    },
    {
        name: "MongoDB",
        icon: mongodb,
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
        name: 'Lmekkeddem Oussama',
        job: [
            'Software Engineering',
            'Developer',
            'Freelancer'
        ],
        description: 'I am a serious and motivated final-year student at an engineering school, specializing in software engineering.',
        resume: 'https://drive.google.com/file/d/1jqBN8H9VcfSPP8jL_ObGT8NseIeaA2Tv/view?usp=sharing'
};
const educations = [
    {
        school: 'High school Malika el Fasi Boufekrane',
        year: '2018-2019',
        description: 'Studied Mathematics, Physics, Chemistry, and basic Sciences, ..'
    },
    {
        school: 'National School of Applied Sciences of Al hoceima',
        year: '2020-2022',
        description: 'Studied Algebra, Analysis, Mechanical, and Electronics, ..'
    },
    {
        school: 'National School of Applied Sciences of Al hoceima',
        year: '2022-2025',
        description: 'Studying programming languages, frameworks, networks, security, and project management, ..',
    },
    {
        school: 'Certificate: Machine Learning with Python, IBM',
        year: '2023-2023',
        description: 'Technology: Python, Machine Learning, Scikit-Learn, Pandas, OpenCV, ..'
    },
];


export { services, technologies, experiences, projects, sidebars, socialLinks, titles, personnelInfos, educations };
