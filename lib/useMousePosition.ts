import { useEffect, useState } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMoveHandler = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            setMousePosition({ x: clientX, y: clientY });
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return mousePosition;
}
