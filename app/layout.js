'use client';

import { usePathname } from 'next/navigation';
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import OuterCursor from "@/components/OuterCursor";
import Spline from '@splinetool/react-spline/next';
import { motion, AnimatePresence } from 'framer-motion';

export default function RootLayout({ children }) {
    const variants = {
        in: {
            y: "100%",
            scale: 0.8,
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        out: {
            y: "-100%",
            scale: 0.8,
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        center: {
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    const pathname = usePathname();

    return (
        <html lang="en">
            <body className="w-screen h-screen text-text-50 bg-background-800 overflow-hidden">
                <div className="fixed h-screen w-screen -z-10">
                    <Spline scene="/scene.splinecode" />
                </div>
                <AnimatePresence mode="wait" initial={ false }>
                    <motion.div key={pathname} className="w-full h-full" variants={variants} initial="in" animate="center" exit="out" >
                        <div className="w-full h-full">
                            {children}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <OuterCursor />
                <Navbar />
            </body>
        </html>
    );
}
