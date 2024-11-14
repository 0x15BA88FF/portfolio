import Card from '@/components/Card';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillLaptopFill } from 'react-icons/bs';
import { AiOutlineDesktop } from 'react-icons/ai';
import { FaDatabase, FaEnvelope, FaMobile, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

import Link from 'next/link';
import Image from "next/image";
import SkillTree from '@/components/SkillTree';

export default function About() {
    return (
        <section className="h-full lg:flex lg:h-screen p-4 lg:p-0 lg:px-4 gap-8 p-4 overflow-y-scroll backdrop-blur">
            <div className="lg:w-3/12 lg:h-full flex flex-col gap-4 py-4 lg:overflow-scroll">
                <div className="flex gap-4 items-center lg:flex-col lg:items-start">
                    <Image width={60} height={60} src="/avatar.png" alt="pascal nkornyui" className="lg:w-[200px] lg:h-[200px] border-2 border-primary rounded-full md:rounded-lg" />
                    <div>
                        <h2 className="text-2xl font-bold pointer-events-auto">Pascal Nkornyui . <span className="text-base font-normal">He/Him</span></h2>
                        <p className="pointer-events-auto">@0x15b88FF</p>
                    </div>
                </div>
                <p className="text-base pointer-events-auto">building software, taking advantage of the data I can get my hands on 📱.. code to find n&apos; solve problems 🐱‍💻</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 pointer-events-auto">
                        <HiLocationMarker className="w-[18px] h-[18px]"/>
                        <p>Accra, Ghana</p>
                    </div>
                    <Link href="tel:+233545685910" className="flex items-center gap-2 hover:text-primary pointer-events-auto">
                        <FaPhone className="w-[18px] h-[18px]"/>
                        <p>Contact</p>
                    </Link>
                    <Link href="mailto:15ba88+contact@proton.me" className="flex items-center gap-2 hover:text-primary pointer-events-auto">
                        <FaEnvelope className="w-[18px] h-[18px]"/>
                        <p>Email</p>
                    </Link>
                    <Link href="https://github.com/0x15BA88FF" target="_blank" className="flex items-center gap-2 hover:text-primary pointer-events-auto">
                        <FaGithub className="w-[18px] h-[18px]"/>
                        <p>Github</p>
                    </Link>
                    <Link href="https://linkedin.com/in/pascall-de-creator" target="_blank" className="flex items-center gap-2 hover:text-primary pointer-events-auto">
                        <FaLinkedin className="w-[18px] h-[18px]"/>
                        <p>LinkedIn</p>
                    </Link>
                </div>

                <Link href="/resume.pdf" target="_blank" className="p-3 border-2 border-primary bg-primary/20 hover:bg-primary/40 rounded-lg flex items-center justify-center pointer-events-auto">View CV</Link>
            </div>

            <div className="flex flex-col gap-8 pt-4 pb-28 overflow-y-scroll lg:w-9/12 pointer-events-auto">
                <div className="w-full flex flex-col gap-4">
                    <h1 className="text-4xl font-semibold">Contributions To</h1>
                    <div className="w-full flex flex-wrap gap-8 items-center justify-center p-4 bg-background-800/60 border-2 border-primary rounded-lg">
                        <Image className="lg:w-[130px]" width={100} height={20} src="/contribs/microsoft.png" alt="microsoft" />
                        <Image className="lg:w-[130px]" width={100} height={20} src="/contribs/vercel.png" alt="vercel" />
                        <Image className="lg:w-[130px]" width={100} height={20} src="/contribs/tailwind.png" alt="tailwindcss" />
                        <Image className="lg:w-[130px]" width={100} height={20} src="/contribs/godot.png" alt="godot" />
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-semibold">What I Do</h1>
                    <div className="flex flex-wrap items-center gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:grid-flow-row sm:items-stretch">
                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-background-800/60 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-900/40 rounded-full"><BsFillLaptopFill /></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Frontend Developer.</h3>
                                <p>Design and develop user-facing software, including websites, mobile apps, and interactive interfaces, using programming languages and tools.</p>
                            </div>
                        </Card>
                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-background-800/60 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-900/40 rounded-full"><FaDatabase /></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Backend Developer.</h3>
                                <p>Develops and maintains server-side applications, APIs, and databases for web and mobile applications.</p>
                            </div>
                        </Card>
                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-background-800/60 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-900/40 rounded-full"><FaMobile /></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Mobile App Developer.</h3>
                                <p>Develops mobile applications for various platforms to meet business and customer needs.</p>
                            </div>
                        </Card>
                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-background-800/60 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-900/40 rounded-full"><AiOutlineDesktop /></div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">Desktop App Developer.</h3>
                                <p>Design and develop desktop applications with proficiency in programming languages and problem-solving skills.</p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-semibold">My Skills</h1>
                    <SkillTree />
                </div>
            </div>
        </section>
    );
}
