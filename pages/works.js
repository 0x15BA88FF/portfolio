import Link from "next/link"
import Image from "next/image";

export default function Works() {
    return (
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll backdrop-blur-xl">
            <h1 className="text-3xl text-center font-semibold">My Works & contributions</h1>
            <div className="w-full md:w-[770px] flex flex-col sm:grid grid-col-3 grid-col-1 gap-4 mx-auto pointer-events-auto">
                <Link href="./" className="project-card bg-primary aspect-video sm:col-span-2 rounded-lg">
                    <Image width={1600} height={900} src="/projects/project (2).png" alt="test" className="h-max w-max rounded-lg" />
                </Link>
                <Link className="project-card bg-primary aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image width={1600} height={900} src="/projects/project (3).png" alt="test"  className="h-max w-max rounded-lg" />
                </Link>
                <Link className="project-card bg-primary aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image width={1600} height={900} src="/projects/project (4).png" alt="test" className="h-max w-max rounded-lg" />
                </Link>
                <Link href="./" className="project-img-02 project-card bg-primary sm:row-span-2 rounded-lg">
                </Link>
                <Link href="./" className="project-card bg-primary aspect-video sm:aspect-auto rounded-lg">
                    <Image width={1600} height={900} src="/projects/project (5).png" alt="test" className="h-max w-max rounded-lg" />
                </Link>
                <Link className="project-card bg-primary aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image width={1600} height={900} src="/projects/project (6).png" alt="test" className="h-max w-max rounded-lg" />
                </Link>
            </div>
        </section>
    );
}
