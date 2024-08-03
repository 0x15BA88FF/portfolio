'use client';

import { useEffect, useState } from "react";

import Link from "next/link";

export default function Home() {
	const [role, setRole] = useState("Websites");

    useEffect(() => {
        const roles = ["Software", "Designs", "Apps", "Websites"];
        let roleIndex = 0;

        const intervalId = setInterval(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            setRole(roles[roleIndex]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
			<section className="h-full w-full flex container mx-auto items-center justify-center">
				<div className="flex flex-col gap-4 justify-center w-max">
					<span className="text-primary font-bold">Hi there, I am</span>
					<h1 className="text-6xl font-bold">Pascal Nkornyui</h1>
					<h1 className="text-6xl text-text-100 font-bold max-w-max">And I Build <i className="min-w-56 text-gradient">{ `{ ${ role } }` }</i>.</h1>
					<p className="max-w-lg sm:text-xl">I&apos;m a software developer based in Ghana specializing in building and designing exceptional programs and software for web, mobile and desktop.</p>
					<Link className="w-max py-3 px-8 sm:py-4 sm:px-10 border-2 rounded-md font-bold border-primary hover:bg-primary/40" href="/about">About Me</Link>
				</div>
			</section>
    );
};
