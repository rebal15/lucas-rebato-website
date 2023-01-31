import "../styles/globals.css";

import type { AppProps } from "next/app";
import CursorContextProvider from "../context/CursorContext";

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
