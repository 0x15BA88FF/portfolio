import Head from "next/head";
import "@/style/globals.css";
import Navbar from "@/components/Navbar";
import Spline from '@splinetool/react-spline';
import OuterCursor from "@/components/OuterCursor";


export default function App({ Component, pageProps: { ...pageProps } }) {
    return (
        <>
            <Head>
                <title>Pascal Nkornyui Portfolio</title>
            </Head>
            <main className="w-screen h-screen text-text-50 bg-background-500 overflow-hidden">
                <Spline className="fixed h-screen w-screen z-10" scene="/scene.splinecode" />
                <section className="fixed z-20 w-full h-full pointer-events-none">
                    <Component {...pageProps} />
                </section>
                <OuterCursor />
                <Navbar />
            </main>
        </>
    );
}
