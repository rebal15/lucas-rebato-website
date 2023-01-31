import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import CursorContextProvider from "../context/CursorContext";
import CustomCursor from "../components/CustomCursor";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <CursorContextProvider>
                <Component {...pageProps} />
            </CursorContextProvider>
        </>
    );
}
export default App;
