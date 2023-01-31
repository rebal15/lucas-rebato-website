import CustomCursor, { CursorType } from "../components/CustomCursor";
import React, { createContext, useContext, useState } from "react";

interface CursorContextType {
    cursorType: CursorType;
    changeCursor: (cursorType: CursorType) => void;

    hoverCursor: () => void;
    defaultCursor: () => void;
    hideCursor: () => void;
}

export const CursorContext = createContext<CursorContextType | undefined>(
    undefined
);

const CursorContextProvider = ({
    children,
}: {
    children: React.ReactNode | React.ReactNode[];
}) => {
    const [cursorType, setCursorType] = useState(CursorType.Default);

    const changeCursor = (cursorType: CursorType) => {
        setCursorType(cursorType);
    };

    const hoverCursor = () => {
        setCursorType(CursorType.Hovered);
    };

    const defaultCursor = () => {
        setCursorType(CursorType.Default);
    };

    const hideCursor = () => {
        setCursorType(CursorType.Hidden);
    };

    return (
        <CursorContext.Provider
            value={{
                cursorType,
                changeCursor,
                hoverCursor,
                defaultCursor,
                hideCursor,
            }}
        >
            <CustomCursor type={cursorType} />
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => {
    const currentUserContext = useContext(CursorContext);

    if (!currentUserContext) {
        throw new Error(
            "useCursor has to be used within CursorContextProvider"
        );
    }

    return currentUserContext;
};

export default CursorContextProvider;
