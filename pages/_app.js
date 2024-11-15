import Head from "next/head";
import "@/style/globals.css";
import Navbar from "@/components/Navbar";
import OuterCursor from "@/components/OuterCursor";


export default function App({ Component, pageProps: { ...pageProps } }) {
    return (
        <>
            <Head>
                <title>Pascal Nkornyui Portfolio</title>
            </Head>
            <main className="w-screen h-screen text-text-50 bg-background-800 overflow-hidden">
                <section className="fixed z-20 w-full h-full pointer-events-none">
                    <Component {...pageProps} />
                </section>
                <OuterCursor />
                <Navbar />
            </main>
        </>
    );
}
