import { useSpring, animated } from "react-spring";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import useWindowScroll from "@react-hook/window-scroll";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Index = () => {
    const parallax = useRef<IParallax>(null!);
    return (
        <>
            <Parallax ref={parallax} pages={13} style={{ top: "0", left: "0" }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={() => parallax.current.scrollTo(1)}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <p className="text-4xl text-gray-900 font-bold ">
                            Lucas Rebato
                        </p>
                        <p className="text-lg text-purple-700 font-bold">
                            Developer
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 grid-rows-1 mx-auto"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundColor: "#212223",
                        backgroundImage: 'url("/stars.svg")',
                        backgroundSize: "cover",
                    }}
                />

                {/* React logo */}
                <ParallaxLayer offset={1.5} speed={0.8}>
                    {/* React logo */}
                    <svg
                        version="1.1"
                        id="Layer_2_1_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 841.9 595.3"
                        className="w-1/5 h-1/5 ml-10"
                    >
                        <g>
                            <path
                                fill="#61DAFB"
                                d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
		c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
		c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6
		c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11
		c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6
		c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4
		c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6
		c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5
		c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2
		c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8
		c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9
		c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3
		c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z
		 M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z
		 M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z
		 M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z
		 M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z
		 M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
		c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7
		c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
		C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
		c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1
		c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
		C644,312.2,621.1,332.1,585.7,347.1z"
                            />
                            <polygon
                                fill="#61DAFB"
                                points="320.8,78.4 320.8,78.4 320.8,78.4 	"
                            />
                            <circle
                                fill="#61DAFB"
                                cx="420.9"
                                cy="296.5"
                                r="45.7"
                            />
                            <polygon
                                fill="#61DAFB"
                                points="520.5,78.1 520.5,78.1 520.5,78.1 	"
                            />
                        </g>
                    </svg>
                </ParallaxLayer>

                {/* TS logo */}
                <ParallaxLayer offset={1.7} speed={-0.4}>
                    <svg
                        fill="none"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-1/5 h-1/5 ml-80"
                    >
                        <rect width="512" height="512" rx="50" fill="#3178c6" />
                        <path
                            d="m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z"
                            clipRule="evenodd"
                            fill="#fff"
                            fillRule="evenodd"
                            style={{ fill: "#fff" }}
                        />
                    </svg>
                </ParallaxLayer>

                {/* .NET logo */}
                <ParallaxLayer offset={1.3} speed={0.1}>
                    <svg
                        viewBox="0 0 456 456"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-1/5 h-1/5 mx-auto"
                    >
                        <rect width="456" height="456" fill="#512BD4" />
                        <path
                            d="M81.2738 291.333C78.0496 291.333 75.309 290.259 73.052 288.11C70.795 285.906 69.6665 283.289 69.6665 280.259C69.6665 277.173 70.795 274.529 73.052 272.325C75.309 270.121 78.0496 269.019 81.2738 269.019C84.5518 269.019 87.3193 270.121 89.5763 272.325C91.887 274.529 93.0424 277.173 93.0424 280.259C93.0424 283.289 91.887 285.906 89.5763 288.11C87.3193 290.259 84.5518 291.333 81.2738 291.333Z"
                            fill="white"
                        />
                        <path
                            d="M210.167 289.515H189.209L133.994 202.406C132.597 200.202 131.441 197.915 130.528 195.546H130.044C130.474 198.081 130.689 203.508 130.689 211.827V289.515H112.149V171H134.477L187.839 256.043C190.096 259.57 191.547 261.994 192.192 263.316H192.514C191.977 260.176 191.708 254.859 191.708 247.365V171H210.167V289.515Z"
                            fill="white"
                        />
                        <path
                            d="M300.449 289.515H235.561V171H297.87V187.695H254.746V221.249H294.485V237.861H254.746V272.903H300.449V289.515Z"
                            fill="white"
                        />
                        <path
                            d="M392.667 187.695H359.457V289.515H340.272V187.695H307.143V171H392.667V187.695Z"
                            fill="white"
                        />
                    </svg>
                </ParallaxLayer>

                {/* Docker logo */}
                <ParallaxLayer offset={1.5} speed={-0.4}>
                    <img
                        alt="Docker logo"
                        src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png"
                        className="w-1/6 mr-10 ml-auto"
                    />
                </ParallaxLayer>

                {/* Python logo */}
                <ParallaxLayer offset={1.9} speed={0.5}>
                    <img src="/python.svg" className="w-1/12 mr-96 ml-auto" />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    factor={10}
                    speed={0}
                    style={{
                        backgroundColor: "#101112",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                ></ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0}
                    sticky={{ start: 2, end: 8 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <p className="text-5xl font-bold text-white mt-10">
                            My skills
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={0}
                    sticky={{ start: 3, end: 4.5 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <div className="text-2xl font-semibold text-transparent mt-32">
                            <p className="bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-wide">
                                LANGUAGES
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={0}
                    sticky={{ start: 4, end: 4.5 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <div className="text-2xl font-semibold text-transparent mt-48">
                            <p className="bg-clip-text bg-gradient-to-l from-green-400 to-green-900">
                                C#
                            </p>
                            <p className="bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">
                                PHP
                            </p>
                            <p className="bg-clip-text bg-gradient-to-tr from-yellow-100 to-yellow-400">
                                Python
                            </p>
                            <p className="bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                Typescript
                            </p>
                            <p className="bg-clip-text bg-gradient-to-bl from-yellow-200 to-yellow-600">
                                JavaScript
                            </p>
                            <p className="bg-clip-text bg-gradient-to-bl from-yellow-600 to-yellow-800">
                                HTML
                            </p>
                            <p className="bg-clip-text bg-gradient-to-bl from-red-500 to-pink-500">
                                CSS
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={0}
                    sticky={{ start: 6, end: 7.5 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <div className="text-2xl font-semibold text-transparent mt-32">
                            <p className="bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 tracking-wide">
                                TECHNOLOGIES
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={4}
                    speed={0}
                    sticky={{ start: 7, end: 7.5 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <div className="text-2xl font-semibold text-transparent mt-44">
                            <p className="bg-clip-text bg-gradient-to-l from-green-400 to-blue-500">
                                Cloud Computing (DigitalOcean)
                            </p>
                            <p className="bg-clip-text bg-gradient-to-r from-blue-400 to-blue-800">
                                Docker
                            </p>
                            <p className="bg-clip-text bg-blue-400">
                                React + React Native
                            </p>
                            <p className="bg-clip-text bg-gradient-to-bl from-red-500 to-yellow-800">
                                Linux
                            </p>
                            <p className="bg-clip-text bg-gradient-to-bl from-yellow-200 to-yellow-600">
                                AI - Machine Learning
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={0}
                    sticky={{ start: 9, end: 11 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <p className="text-5xl font-bold text-white mt-10">
                            My projects
                        </p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3}
                    speed={0}
                    sticky={{ start: 10, end: 11 }}
                >
                    <div className="grid grid-rows-3 text-center content-center">
                        <div className="text-2xl font-semibold text-transparent mt-32">
                            <p className="bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                <span style={{ color: "#84c341" }}>IFATC</span>
                                .org
                            </p>
                            <p className="bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                Various other open-source projects, see below
                            </p>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={12} speed={0}>
                    <div className="grid grid-rows-3 text-center content-center">
                        <p className="text-4xl font-bold mt-10">Contact me</p>
                        <p className="text-xl font-medium mt-1 mb-5">
                            Please see my GitHub profile for other projects that
                            I&apos;m working on, or alternatively, feel free to
                            shoot me an email.
                        </p>
                        <div className="mx-auto inline-flex space-x-4">
                            <a
                                href="https://github.com/rebal15"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="mailto:lrebato10@gmail.com">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Index;
