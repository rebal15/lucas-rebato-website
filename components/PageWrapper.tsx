import { Variants, motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const variants: Variants = {
        hidden: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
        >
            {children}
        </motion.main>
    );
};

export default PageWrapper;
