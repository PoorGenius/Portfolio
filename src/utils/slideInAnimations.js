// create an animation for framer-motion that i can specify direction, left, right, top, bottom called slideIn

export const slideIn = (direction) => {
    return {
        hidden: {
            x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
            y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        exit: {
            x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
            y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };
};
