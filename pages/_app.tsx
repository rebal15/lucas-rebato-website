import "../styles/globals.css";

import type { AppProps } from "next/app";
import CursorContextProvider from "../context/CursorContext";
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-0V5MGZY4SZ"
            />
            <Script id="ga-config">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-0V5MGZY4SZ');
                `}
            </Script>
            <CursorContextProvider>
                <Component {...pageProps} />
            </CursorContextProvider>
        </>
    );
}
export default App;
