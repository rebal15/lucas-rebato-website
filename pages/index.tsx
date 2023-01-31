import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";
import MainPage from "../components/MainPage";
import { NextSeo } from "next-seo";

const Index = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
            ? document.querySelector("body")?.classList.add("loading")
            : document.querySelector("body")?.classList.remove("loading");
    }, [loading]);

    return (
        <>
            <NextSeo
                title="Lucas Rebato | Software Engineer"
                description="Redeveloping the everyday. Software Engineer based in London."
                canonical="https://lucasrebato.com/"
                openGraph={{
                    url: "https://lucasrebato.com/",
                    title: "Lucas Rebato | Software Engineer",
                    description:
                        "Redeveloping the everyday. Software Engineer based in London.",
                    images: [
                        {
                            url: "https://lucasrebato.com/logo-192.png",
                            width: 192,
                            height: 192,
                            alt: "Lucas Rebato | Software Engineer",
                        },
                    ],
                    type: "website",
                }}
            />
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div key="loader">
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <MainPage />
                )}
            </AnimatePresence>
        </>
    );
};

const IndexPage = () => {
    return <Index />;
};

export default IndexPage;
