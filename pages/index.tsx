import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import MainPage from "../components/MainPage";

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
