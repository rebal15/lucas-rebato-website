import { Variants, motion, useMotionValue, useSpring } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export enum CursorType {
    Default,
    Hovered,
    Hidden,
}

const CustomCursor = ({ type = CursorType.Default }: { type?: CursorType }) => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 40, stiffness: 500 };

    const onMouseMove = useCallback(
        (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;
            cursorX.set(x - (type === CursorType.Hovered ? 32 : 16));
            cursorY.set(y - (type === CursorType.Hovered ? 32 : 16));
        },
        [cursorX, cursorY, type]
    );

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, [onMouseMove]);

    const xSpring = useSpring(cursorX, springConfig);
    const ySpring = useSpring(cursorY, springConfig);

    const cursorVariants: Variants = {
        initial: {
            width: "32px",
            height: "32px",
            borderRadius: "16px",
        },
        hover: {
            width: "64px",
            height: "64px",
            borderRadius: "32px",
            background: "transparent",
        },
    };

    return (
        <motion.span
            layoutId="mainCursor"
            animate={type === CursorType.Hovered ? "hover" : "initial"}
            variants={cursorVariants}
            style={{
                opacity: type != CursorType.Hidden ? 1 : 0,
                translateX: xSpring,
                translateY: ySpring,
            }}
            className="fixed left-0 top-0 pointer-events-none z-50 border border-primary mix-blend-difference"
        ></motion.span>
    );
};

export default CustomCursor;
