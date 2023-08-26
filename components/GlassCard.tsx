import { ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useCursor } from "../context/CursorContext";

interface GlassCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
    tags: string[];
}

const GlassCard = ({
    title,
    description,
    link,
    image,
    tags,
}: GlassCardProps) => {
    const { hoverCursor, defaultCursor } = useCursor();

    return (
        <div>
            <div className="w-full h-full relative">
                <div className="hidden lg:block border border-primary rounded-lg lg:w-4/5 mx-auto mb-6 lg:mb-0 lg:mr-auto lg:relative">
                    <span className="absolute top-0 left-0 w-full h-full bg-black rounded-lg bg-opacity-70"></span>
                    <img
                        className="my-auto shadow-lg rounded-lg group-hover:opacity-75 w-full"
                        src={image}
                        alt="Featured Photo"
                    />
                </div>

                <div className="lg:top-1/4 lg:w-4/5 lg:absolute lg:right-1/4 border-primary border-2 bg-opacity-50 p-5 rounded-lg shadow-lg backdrop-filter backdrop-blur-2xl h-full lg:h-auto">
                    <div className="border border-primary rounded-lg mx-auto mb-6 lg:hidden">
                        <img
                            className="my-auto shadow-lg rounded-lg group-hover:opacity-75 w-full"
                            src={image}
                            alt="Featured Photo"
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="flex flex-wrap gap-y-3 items-center">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-purple-100 bg-opacity-10 text-purple-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-purple-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-lg leading-6 font-semibold font-sans text-primary">
                            {title}
                        </h4>

                        <p className="mt-3 text-sm font-normal text-primary text-opacity-70 leading-5">
                            {description}
                        </p>

                        <div className="mt-5 flex items-center font-sans">
                            <Link
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                onMouseOver={hoverCursor}
                                onMouseLeave={defaultCursor}
                                className=" border border-primary text-primary font-semibold px-3 py-1.5 rounded-lg inline-flex"
                            >
                                Visit
                                <ExternalLinkIcon className="w-5 h-5 my-auto ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlassCard;
