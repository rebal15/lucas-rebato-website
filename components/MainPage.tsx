import { ExternalLinkIcon, LightBulbIcon } from "@heroicons/react/outline";
import { Variants, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import CustomCursor from "./CustomCursor";
import GlassCard from "./GlassCard";
import Layout from "./Layout";
import Link from "next/link";
import TextLoop from "./TextLoop";
import Typed from "typed.js";
import { useCursor } from "../context/CursorContext";
import useDebounce from "../lib/useDebounce";

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
