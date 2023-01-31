import React, { createContext, useEffect, useState } from "react";

import LocomotiveScroll from "locomotive-scroll";

export const SmoothScrollContext = createContext<{
    scroll: LocomotiveScroll | null;
}>({
    scroll: null,
});

export const SmoothScrollProvider = ({ children, options }) => {
    const [scroll, setScroll] = useState<LocomotiveScroll | null>(null);

    useEffect(() => {
        if (!scroll) {
            (async () => {
                try {
                    const LocomotiveScroll = (await import("locomotive-scroll"))
                        .default;

                    setScroll(
                        new LocomotiveScroll({
                            el:
                                document.querySelector(
                                    "[data-scroll-container]"
                                ) ?? undefined,
                            ...options,
                        })
                    );
                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`);
                }
            })();
        }

        return () => {
            scroll && scroll.destroy();
        };
    }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <SmoothScrollContext.Provider value={{ scroll }}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
