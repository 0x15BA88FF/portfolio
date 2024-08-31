import { HiLocationMarker } from 'react-icons/hi';
import { BsFillLaptopFill } from 'react-icons/bs';
import { FaDatabase, FaMobile, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { AiOutlineDesktop } from 'react-icons/ai';
import Card from '@/components/Card';
// import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiPython, SiNodedotjs, SiFirebase, SiDjango, SiWebassembly,  SiMongodb, SiExpress, SiReact, SiRedux, SiNextdotjs, SiVuedotjs, SiTailwindcss, SiBootstrap } from 'react-icons/si';

import Link from 'next/link';
import Image from "next/image";
import SkillTree from '@/components/SkillTree';

export default function About() {
    return (
        <section className="p-2 lg:flex lg:h-screen lg:p-0 lg:px-4 gap-4 backdrop-blur-md">
            <div className="my-4 flex flex-col gap-4 lg:w-3/12 lg:h-full lg:overflow-scroll lg:p-4">
                <div className="flex gap-4 items-center lg:flex-col lg:items-start">
                    <Image width={60} height={60} src="/avatar.png" alt="pascal nkornyui" className="rounded-full lg:w-[200px] lg:h-[200px]" />
                    <div>
                        <h2 className="text-2xl font-bold pointer-events-auto">Pascal Nkornyui . <span className="font-normal">He / Him</span></h2>
                        <p className="pointer-events-auto">@0x15b88</p>
                    </div>
                </div>
                <p className="text-base pointer-events-auto">building software, taking advantage of the data I can get my hands on 📱.. code to find n&apos; solve problems 🐱‍💻</p>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 pointer-events-auto">
                        <HiLocationMarker className="w-[24px] h-[24px]"/>
                        <p>Accra, Ghana.</p>
                    </div>

                    <Link href="https://github.com/pascall-de-creator" className="flex items-center gap-2 pointer-events-auto">
                        <FaGithub className="w-[24px] h-[24px]"/>
                        <p>Github.</p>
                    </Link>

                    <Link href="https://github.com/pascall-de-creator" className="flex items-center gap-2 pointer-events-auto">
                        <FaLinkedin className="w-[24px] h-[24px]"/>
                        <p>LinkedIn.</p>
                    </Link>

                    <Link href="tel:0000000000" className="flex items-center gap-2 pointer-events-auto">
                        <FaPhone className="w-[24px] h-[24px]"/>
                        <p>Contact.</p>
                    </Link>
                </div>

                <Link href="/resume.pdf" className="p-4 border-2 border-primary bg-primary/40 rounded-lg flex items-center justify-center pointer-events-auto">View CV</Link>
            </div>

            <div className="flex flex-col gap-8 p-4 pb-28 overflow-y-scroll lg:w-9/12 pointer-events-auto">
                <div className="w-full p-4 flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-semibold">Contributions To</h1>
                    <div className="w-full flex flex-wrap gap-4 items-center justify-center p-4 bg-primary/40 border-2 border-primary rounded-lg">
                        <Image className="lg:w-[130px]" width={100} height={20} src="/microsoft.png" alt="microsoft" />
                        <Image className="lg:w-[130px]" width={100} height={20} src="/vercel.png" alt="vercel" />
                        <Image className="lg:w-[130px]" width={100} height={20} src="/tailwind.png" alt="tailwindcss" />
                        <Image className="lg:w-[130px]" width={100} height={20} src="/godot.png" alt="godot" />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-semibold">What I Do</h1>
                    <div className="flex flex-wrap items-center gap-4 lg:grid lg:grid-cols-3 lg:grid-flow-row lg:items-stretch">
                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-primary/40 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-base/20 rounded-full">
                                <BsFillLaptopFill />
                            </div>
                            <div>
                                <h3>Frontend Developer.</h3>
                                <p>Design and develop user-facing software, including websites, mobile apps, and interactive interfaces, using programming languages and tools.</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-primary/40 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-base/20 rounded-full">
                                <FaDatabase />
                            </div>
                            <div>
                                <h3>Backend Developer.</h3>
                                <p>Develops and maintains server-side applications, APIs, and databases for web and mobile applications.</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-primary/40 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-base/20 rounded-full">
                                <FaMobile />
                            </div>
                            <div>
                                <h3>Mobile App Developer.</h3>
                                <p>Develops mobile applications for various platforms to meet business and customer needs.</p>
                            </div>
                        </Card>

                        <Card className="flex flex-col gap-4 p-4 pt-20 border-2 border-primary bg-primary/40 rounded-lg">
                            <div className="w-max h-max p-4 bg-background-base/20 rounded-full">
                                <AiOutlineDesktop />
                            </div>
                            <div>
                                <h3>Desktop App Developer.</h3>
                                <p>Design and develop desktop applications with proficiency in programming languages and problem-solving skills.</p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-2xl font-semibold">My Skills</h1>
                    <SkillTree />
                </div>
            </div>
        </section>
    );
}