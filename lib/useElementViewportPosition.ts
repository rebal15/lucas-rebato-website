import { useEffect, useState } from "react";

// * based on: https://gist.github.com/coleturner/34396fb826c12fbd88d6591173d178c2
const useElementViewportPosition = (ref: React.RefObject<HTMLElement>) => {
    const [position, setPosition] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        if (!ref || !ref.current) return;

        const pageHeight = document.body.scrollHeight;
        const start = ref.current.offsetTop;
        const end = start + ref.current.offsetHeight;

        setPosition([start / pageHeight, end / pageHeight]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { position };
};

export default useElementViewportPosition;
