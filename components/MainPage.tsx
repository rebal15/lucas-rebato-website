import { Variants, motion } from "framer-motion";

import GlassCard from "./GlassCard";
import Layout from "./Layout";
import { LightBulbIcon } from "@heroicons/react/outline";
import Link from "next/link";
import TextLoop from "./TextLoop";
import { useCursor } from "../context/CursorContext";

const physics = { damping: 15, mass: 1.5, stiffness: 100 };

const MainPage = () => {
    const { hoverCursor, defaultCursor } = useCursor();

    const pContainerVariants: Variants = {
        initial: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6,
                when: "beforeChildren",
            },
        },
    };

    const pVariants: Variants = {
        initial: {
            opacity: 0,
            x: 100,
            transition: {},
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    const bVariants: Variants = {
        initial: {
            opacity: 0,
            y: 20,
            transition: {},
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    const jobs = [
        "Developer",
        "Creator",
        "Programmer",
        "Designer",
        "Nerd",
        "Coder",
        "Student",
        "Learner",
        "Maker",
        "Avgeek",
    ];

    return (
        <Layout>
            <div
                id="home"
                className="relative max-w-7xl mx-auto px-12 md:px-48 my-16 overflow-hidden"
            >
                <motion.div
                    initial="initial"
                    animate="show"
                    variants={pContainerVariants}
                    className="mt-28 md:mt-44 mb-32 lg:mb-52"
                >
                    <motion.h1
                        variants={pVariants}
                        className="text-primary text-5xl mb-5"
                    >
                        My name is Lucas Rebato.
                    </motion.h1>
                    <motion.h1
                        variants={pVariants}
                        className="text-primary text-5xl mb-8"
                    >
                        I make cool stuff for the web.
                    </motion.h1>
                    <motion.p
                        variants={pVariants}
                        className="text-primary text-opacity-50 text-lg max-w-xl"
                    >
                        I&apos;m a student and full-stack software engineer with
                        a passion for building high-quality software that
                        redevelops the every-day.
                    </motion.p>
                    <motion.div
                        variants={bVariants}
                        className="flex items-center mt-10"
                    >
                        <Link
                            onMouseOver={hoverCursor}
                            onMouseLeave={defaultCursor}
                            href="/#projects"
                            scroll={false}
                            className=" bg-primary border border-primary text-main-blue font-semibold px-3 py-1.5 rounded-lg mr-5"
                        >
                            My work &rarr;
                        </Link>
                        <Link
                            href="/#contact"
                            scroll={false}
                            onMouseOver={hoverCursor}
                            onMouseLeave={defaultCursor}
                            className="border border-white text-white font-semibold py-1.5 px-3 rounded-lg"
                        >
                            Contact me &rarr;
                        </Link>
                    </motion.div>
                </motion.div>

                <div id="about" className="py-32">
                    <h1 className="text-primary text-5xl">About me</h1>
                    <div className="max-w-2xl">
                        <div>
                            <p className="text-primary text-opacity-50 text-lg mt-8">
                                Hi! My name is Lucas. I&apos;m a student
                                (currently studying for my A Levels), with a
                                hope to read Computer Science at university.
                            </p>
                            <p className="text-primary text-opacity-50 text-lg mt-8">
                                I love a challenge, and I&apos;m always looking
                                for a new one. I mostly live in the cloud, with
                                web applications and cloud technologies being my
                                main area of interest, but I&apos;m always
                                looking for new opportunities to learn and grow.
                            </p>
                        </div>
                        <p className="text-primary text-opacity-50 text-lg mt-8">
                            My current favourite technologies are:
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <ul className="text-primary text-opacity-50 text-lg mt-4 space-y-3">
                                <li className="flex items-center space-x-3">
                                    <LightBulbIcon className="flex-shrink w-5 h-5 text-yellow-400" />
                                    <span>Next.js</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <LightBulbIcon className="flex-shrink w-5 h-5 text-yellow-400" />
                                    <span>React</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <LightBulbIcon className="flex-shrink w-5 h-5 text-yellow-400" />
                                    <span>TypeScript</span>
                                </li>
                            </ul>

                            <ul className="text-primary text-opacity-50 text-lg mt-4 space-y-3">
                                <li className="flex items-center space-x-3">
                                    <LightBulbIcon className="flex-shrink w-5 h-5 text-yellow-400" />
                                    <span>Tailwind</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <LightBulbIcon className="flex-shrink w-5 h-5 text-yellow-400" />
                                    <span>NodeJS</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <LightBulbIcon className="flex-shrink w-5 h-5 text-yellow-400" />
                                    <span>Docker</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="projects" className="py-16 lg:py-32 mb-20">
                    <h1 className="text-primary text-5xl">Projects</h1>

                    <div className="max-w-2xl">
                        <p className="text-primary text-opacity-50 text-lg mt-8">
                            I&apos;ve worked on a variety of projects through
                            freelancing, company employment, and personal
                            projects.
                        </p>
                        <p className="text-primary text-opacity-50 text-lg mt-8">
                            Here are some of my favourites:
                        </p>
                    </div>

                    <div className="w-full mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:gap-y-48 gap-x-12">
                            <GlassCard
                                title="MentorZone"
                                tags={["Next.js", "Typescript", "Tailwind"]}
                                description="I designed and built this website for a student-led education/careers startup, MentorZone."
                                link="https://mentorzone.co.uk"
                                image="/mentorzone.png"
                            />

                            <GlassCard
                                title="Evolve Cricket"
                                tags={["Next.js", "Docker", "S3"]}
                                description="I designed and built an application for a cricket coaching company, allowing them to manage their bookings and student feedback."
                                link="https://evolvecricket.com"
                                image="/evolve2.png"
                            />

                            <GlassCard
                                title="IFATC.org"
                                tags={["Python", "Docker", "Tailwind"]}
                                description="I have developed, upgraded, and maintained an unofficial companion website Infinite Flight, a leading mobile flight simulator."
                                link="https://ifatc.org"
                                image="/ifatc.png"
                            />

                            <GlassCard
                                title="Personal Website"
                                tags={["Next.js", "Animation", "Tailwind"]}
                                description="This website! I took the opportunity to learn how to design and implement micro-interactions for delightful user experiences."
                                link="https://lucasrebato.com"
                                image="/portfolio.png"
                            />
                        </div>
                    </div>
                </div>

                <div id="contact" className="py-16 lg:py-32 mb-20">
                    <h1 className="text-primary text-5xl">Get in touch</h1>

                    <div className="max-w-2xl">
                        <div>
                            <p className="text-primary text-opacity-50 text-lg mt-8">
                                I&apos;m always looking to learn and grow, so my
                                inbox is always open. I&apos;d love to hear what
                                I can do for you or your business!
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                onMouseOver={hoverCursor}
                                onMouseLeave={defaultCursor}
                                href="mailto:lrebato10@gmail.com"
                                scroll={false}
                                className=" bg-primary border border-primary text-main-blue font-semibold px-3 py-2 rounded-lg mr-5"
                            >
                                Email me &rarr;
                            </Link>
                            <Link
                                onMouseOver={hoverCursor}
                                onMouseLeave={defaultCursor}
                                href="https://www.linkedin.com/in/lucas-rebato-135a39225/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold px-3 py-2 rounded-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className="w-5 h-5 inline-block fill-current"
                                >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </Link>
                            <Link
                                onMouseOver={hoverCursor}
                                onMouseLeave={defaultCursor}
                                href="https://github.com/rebal15"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary font-semibold px-3 py-2 rounded-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 496 512"
                                    className="w-5 h-5 inline-block fill-current"
                                >
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -180 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 2.5,
                }}
                className="hidden md:block fixed left-0 top-0 pt-36 h-full z-10 bg-main-blue border-r-2 border-main-blue-dark border-opacity-20 pl-4 pr-6"
            >
                <h1
                    style={{
                        writingMode: "vertical-lr",
                        transform: "scale(-1)",
                    }}
                    className="text-primary text-5xl lg:text-7xl font-bold opacity-20"
                >
                    <TextLoop texts={jobs} />
                </h1>
            </motion.div>
        </Layout>
    );
};

export default MainPage;
