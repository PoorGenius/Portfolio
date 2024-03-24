import {
    instagram,
    chatapp,
    portfolio,
    fusion,
    egg,
    aboutCode,
    aboutExpansion,
    aboutEducation,
    aboutDedication,
    aboutVision,
    html,
    css,
    js,
    tailwind,
    reactsvg,
    threejs,
    nodejs,
    mongodb,
    python,
    mysql,
    git,
    godot,
    github

} from '../assets';

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const projects = [
    {
        title: "Instagram Clone",
        icon: instagram,
        description: "This project was a straightforward yet engaging way to dive into the basics of web development. By focusing on   HTML and CSS, I built a visual replica of the Instagram websites first page.",
        tech: [["html", "css"],
        ["#F16529", "#2965F1"]],
    },
    {
        title: "ChatApp",
        icon: chatapp,
        description: "This project was a bit trickier than the Instagram clone. It's a chat app where people can talk in real time. I used Express for the backend, Socket.IO to make the chatting instant. Users can sign up, log in, and see if their friends are online. The frontend is built using React and Tailwind, with MongoDB as the database.",
        // tech will be react, tailwind, mongodb, nodejs, javascript
        tech: [
            ["react", "tailwind", "mongodb", "nodejs", "javascript"],
            ["#61DAFB", "#2298BD", "#4FAA41", "#339933", "#FFDE25"]],
    },
    {
        title: "3D Portfolio",
        icon: portfolio,
        description: "This project made into a 3D portfolio website, using React and Tailwind for styling, smooth interactions using the motion-framer library. Three.js was used for dynamic 3D visuals, while JavaScript was used on the client side  to include interactions.",
        tech: [
            ["react", "tailwind", "javacript", "threejs"],
            ["#61DAFB", "#2298BD", "#FFDE25", "#83CD29"]
        ]
    },
    {
        title: "FusionExplained",
        icon: fusion,
        description: '"FusionExplained" is a future school project of mine, aimed at explaining fusion in physics class through a website. It will include 3D models like such as a "Tokamak" reactor, and use an interactive slider to show atom fusion in a fun way. This frontend-only site is designed for an engaging class presentation.',
        tech: [
            ["yet to come"],
            ["#61DAFB"]

        ]
    },
    {
        title: "FlavorNest",
        icon: egg,
        description: '"FlavorNest" is an in-development web app where users can share and find recipes. Using React, Tailwind, MySQL, and Node.js, it allows posting of a recipe with details, photos, and videos. Users can also filter recipes and save favorites, creating a specific  food community.',
        tech: [
            ["yet to come"],
            ["#61DAFB"]
        ],
    }
]

export const skills = [
    {
        title: "Frontend",
        description: "In my frontend development work, I excel with a variety of tools and technologies. I have a solid grasp of foundational web languages like HTML, CSS, and JavaScript, and I'm adept with modern frameworks such as Tailwind CSS for responsive design and React for dynamic web applications. Additionally, my experience with ThreeJS allows me to create engaging 3D visuals. My skill set combines technical proficiency with creative flair, enabling me to deliver compelling and high-quality web experiences.",
        tech: [html, css, js, tailwind, reactsvg, threejs],
    },
    {
        title: "Backend",
        description: "My backend development skills are equally strong, with a focus on building robust and efficient server-side applications. I have experience working with Node.js and Express to create RESTful APIs and handle server-side logic. Additionally, I'm proficient in database management using MongoDB, allowing me to design and implement scalable data solutions. With these skills, I can develop full-stack applications that deliver seamless user experiences and reliable performance.",
        tech: [nodejs, mongodb, python, mysql],
    },
    {
        title: "Other",
        // description for git, github and godot
        description: "In addition to my web development skills, I have experience with other tools and technologies that enhance my capabilities. I'm proficient in version control using Git and GitHub, enabling me to collaborate effectively and manage code efficiently. I also have experience with game development using the Godot Engine, allowing me to create interactive and engaging gaming experiences. With these additional skills, I bring a diverse and well-rounded skill set to my development work.",
        tech: [git, github, godot],
    }
]

export const aboutCards = [
    {
        image: aboutCode,
        title: "Discovery",
        description: "At the age of 15, I discovered a passion that would shape the rest of my life: coding. I started with C++, enjoying the way it made me think and how I could solve problems with just a few lines of code. It wasn't long before I was hooked, learning through online courses and challenging myself with new projects.",
    },
    {
        image: aboutExpansion,
        title: "Expansion",
        description: "As I grew, so did my interests, and web development became the next step. It wasn't just about coding; it was a way to make my ideas come to life. It helped me tap into my creative side, which I hadn't explored much before. Building websites and apps, I found a satisfying blend of logic and art."
    },
    {
        image: aboutEducation,
        title: "Education",
        description: "Now at 18, I'm deepening my knowledge through studying information technology here in Sweden. School's teaching me the foundations, but I'm building my future on much more than that. I bring the same focus to my studies as I do to every part of my life, aiming to learn and apply every day."
    },
    {
        image: aboutDedication,
        title: "Dedication",
        description: "I approach my work with a clear goal: always go beyond what's expected. To me, effort is everything. It’s about putting in that extra time, that extra thought, and making sure every detail is just right."
    },
    {
        image: aboutVision,
        title: "Vision",
        description: "Simplicity is my style, but my dreams are anything but simple. I’m not only planning to enter the tech industry; I aim to reshape it with my own business. And beyond coding, I have my sights set on the skies too. One day, I'll be piloting my own plane, soaring to new heights, just like I do with my coding."
    }
]