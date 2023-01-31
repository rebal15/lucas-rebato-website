import { Variants, motion } from "framer-motion";

import Link from "next/link";
import { useCursor } from "../context/CursorContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const { hoverCursor, defaultCursor, hideCursor } = useCursor();

    return (
        <div className="bg-main-blue min-h-screen overflow-auto overflow-x-hidden relative">
            <motion.nav
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 2,
                }}
                className="fixed bg-main-blue border-b-2 border-main-blue-dark border-opacity-20 top-0 right-0 left-0 w-full px-8 py-10 sm:px-6 text-xl z-30 bg-opacity-80 backdrop-filter backdrop-blur-sm"
            >
                <div className="max-w-7xl px-8 lg:px-3 mx-auto flex items-center justify-between">
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <Link
                                scroll={false}
                                onMouseOver={hoverCursor}
                                onMouseLeave={defaultCursor}
                                href="/#home"
                            >
                                <h3 className="text-primary font-semibold">
                                    Lucas Rebato
                                </h3>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-16 z-50">
                        <Link
                            href="/#about"
                            scroll={false}
                            onMouseOver={hoverCursor}
                            onMouseLeave={defaultCursor}
                            className="font-medium text-white "
                        >
                            About
                        </Link>
                        <Link
                            href="/#projects"
                            scroll={false}
                            onMouseOver={hoverCursor}
                            onMouseLeave={defaultCursor}
                            className="font-medium text-white pointer-events-auto"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/#contact"
                            scroll={false}
                            onMouseOver={hoverCursor}
                            onMouseLeave={defaultCursor}
                            className="font-medium text-white "
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </motion.nav>

            <motion.main>{children}</motion.main>
        </div>
    );
};

export default Layout;
