'use client';

import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import OuterCursor from "@/components/OuterCursor";
import Spline from '@splinetool/react-spline/next';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="w-screen h-screen text-text-50 bg-background-base overflow-hidden">
                <div className="fixed h-screen w-screen -z-10"><Spline scene="/scene.splinecode" /></div>
                <div className="w-full h-full">{ children }</div>
                <OuterCursor />
                <Navbar />
            </body>
        </html>
    );
}
