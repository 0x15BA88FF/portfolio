import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const roles = ["Websites", "Software", "Designs", "Apps"];
  const [role, setRole] = useState(roles[0]);

  useEffect(_ => {
    let roleIndex = 0;

    const intervalId = setInterval(_ => {
      roleIndex = (roleIndex + 1) % roles.length;
      setRole(roles[roleIndex]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

    return (
			<section className="h-full w-full container flex items-center justify-center mx-auto pointer-events-none">
				<div className="w-max flex flex-col justify-center gap-4 p-4">
					<span className="text-primary font-bold">Hi there, I am</span>
					<h1 className="text-4xl sm:text-6xl font-bold">Pascal Nkornyui</h1>
					<h1 className="text-4xl sm:text-6xl text-text-100 font-bold max-w-max">And I Build <i className="min-w-56 text-gradient">{ `{ ${ role } }` }</i>.</h1>
					<p className="max-w-lg sm:text-xl">I&apos;m a software developer based in Ghana specializing in building and designing exceptional programs and software for web, mobile and desktop.</p>
					<Link href="/about" className="w-max py-3 px-8 sm:py-4 sm:px-10 font-bold border-primary border-2 rounded-md pointer-events-auto hover:bg-primary/40">About Me</Link>
				</div>
			</section>
    );
};
