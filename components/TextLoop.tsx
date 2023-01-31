import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const TextLoop = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            let next = index + 1;
            setIndex(next % texts.length);
        }, 4 * 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [index, setIndex, texts]);

    return (
        <div className="">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    className=""
                    key={index}
                    layout
                    variants={{
                        enter: {
                            rotateX: "45deg",
                            opacity: 0,
                            height: 0,
                        },
                        center: {
                            rotateX: 0,
                            opacity: 1,
                            height: "auto",
                        },
                        exit: {
                            rotateX: "-45deg",
                            opacity: 0,
                            height: 0,
                        },
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 0.5,
                    }}
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default TextLoop;
