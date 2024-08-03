import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import Link from "next/link";

export default function Navbar() {
    const menuRef = useRef();
    const path = usePathname();
    const indicatorRef = useRef();

    useEffect(_ => {
        const margin = 20;
        const linkMap = [ "/", "/works", "/achievements", "/about" ];

        const menu = menuRef.current;
        const indicator = indicatorRef.current;
        const navLinks = menu.getElementsByClassName("nav-link");
        const activeLink = navLinks[linkMap.findIndex(link => link === path) || 0];

        indicator.style.transform = `
            translate(${ activeLink.offsetLeft + margin }px, 0px) 
            scale(${ activeLink.offsetWidth / menu.offsetWidth - (margin / menu.offsetWidth) * 2 }, 1)
        `;
    }, [path]);

    return (
        <motion.div className="fixed left-0 right-0 bottom-0 transform" animate={{ scale: 1 }} initial={{ scale: 0 }}>
            <nav ref={ menuRef } className="fixed left-0 right-0 bottom-0 transform z-50 xs:bottom-8 xs:left-1/2 xs:right-auto xs:-translate-x-1/2">
                <div className="relative bg-background-overlay/40 z-20 overflow-hidden xs:rounded-lg backdrop-blur-xl">
                    <div className="relative w-full">
                        <div className="flex items-center justify-between gap-2">
                            <Link className="nav-link p-4 pb-4" href="/">Home</Link>
                            <Link className="nav-link p-4 pb-4" href="/works">Work</Link>
                            <Link className="nav-link p-4 pb-4" href="/achievements">Achievements</Link>
                            <Link className="nav-link p-4 pb-4" href="/about">About</Link>
                        </div>
                        <div ref={ indicatorRef } className="bg-primary absolute left-0 bottom-1/4 w-full h-[3px] origin-left transition-all" />
                    </div>
                </div>
            </nav>
        </motion.div>
    );
};
