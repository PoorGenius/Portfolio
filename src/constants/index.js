import {
    instagram,
    chatapp,
    portfolio,
    fusion,
    egg
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
        tech: [["react", "tailwind", "mongodb", "nodejs", "javascript"],

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
        ]

    }
]