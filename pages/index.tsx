import {
    AnimatePresence,
    AnimateSharedLayout,
    MotionValue,
    VariantLabels,
    Variants,
    m,
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    ChevronDoubleDownIcon,
    ChevronDownIcon,
} from "@heroicons/react/outline";
import { SmoothScrollContext, SmoothScrollProvider } from "../lib/scroll";
import { useContext, useEffect, useRef, useState } from "react";

import CustomCursor from "../components/CustomCursor";
import Loader from "../components/Loader";
import MainPage from "../components/MainPage";
import { classNames } from "../lib/utils";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
];

const Index = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
            ? document.querySelector("body")?.classList.add("loading")
            : document.querySelector("body")?.classList.remove("loading");
    }, [loading]);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div key="loader">
                    <Loader setLoading={setLoading} />
                </motion.div>
            ) : (
                <MainPage />
            )}
        </AnimatePresence>
    );
};

const IndexPage = () => {
    return <Index />;
};

export default IndexPage;
