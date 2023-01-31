import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Variants, motion, useAnimationControls } from "framer-motion";

import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import CustomCursor from "./CustomCursor";

const physics = { damping: 30, mass: 1, stiffness: 200 };

const containerVariants: Variants = {
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const arrowVariants: Variants = {
    initial: {
        marginLeft: 0,
    },
    hover: {
        marginLeft: 5,
    },
};

const greetingVariants: Variants = {
    initial: {
        opacity: 0,
        y: -40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            ...physics,
        },
    },
    exit: {
        scale: 20,
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
};

const jobVariants: Variants = {
    initial: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            ...physics,
        },
    },
    exit: {
        scale: [null, 6, 6],
        opacity: [null, 1, 0],
        transition: {
            duration: 3,
            times: [0, 0.8, 1],
        },
    },
};

const buttonVariants: Variants = {
    initial: {
        y: 0,
        opacity: 1,
        scale: 1,
    },
    hover: {
        y: 0,
        opacity: 1,
        scale: 1.1,
    },
    exit: {
        y: 50,
        scale: 1,
        opacity: 0,
        transition: {
            duration: 2,
        },
    },
};

const handEmojiVariants: Variants = {
    initial: {
        rotate: 0,
    },
    show: {
        rotate: [0, 14, -8, 14, -4, 10, 0, 0],
        transition: {
            duration: 1.7,
            times: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
        },
    },
    exit: {
        rotate: 0,
        transition: {
            duration: 2,
        },
    },
};

const Loader = ({
    setLoading,
}: {
    setLoading: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="show"
                exit="exit"
                onAnimationComplete={() => setLoading(false)}
                className="bg-main-blue overflow-auto overflow-x-hidden"
                style={{ height: "100vh", width: "100vw" }}
            >
                <motion.h1
                    variants={greetingVariants}
                    className="font-bold tracking-normal text-center text-6xl text-primary mt-80"
                >
                    <motion.div
                        variants={handEmojiVariants}
                        className="inline-block"
                    >
                        &#128075;
                    </motion.div>
                    &nbsp; Hi, I&apos;m Lucas
                </motion.h1>
                <motion.h2
                    transition={{
                        ease: [0.6, 0.01, -0.05, 0.9],
                        duration: 1.6,
                    }}
                    variants={jobVariants}
                    className="text-xl font-semibold mt-2 tracking-normal text-center text-primary"
                >
                    Software Engineer.
                </motion.h2>
            </motion.div>
        </>
    );
};

export default Loader;
