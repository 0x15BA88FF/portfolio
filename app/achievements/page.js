import Image from "next/image";
import Link from "next/link"

const Works = () => {
    return (
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll">
            <h1 className="text-3xl text-center font-semibold">My Achivements</h1>
            <div className="w-full flex flex-col sm:grid grid-col-3 grid-col-1 gap-4">
                <Link className="project-card bg-secondary-600 aspect-video sm:col-span-2 rounded-lg" href="./">
                    <Image className="h-max w-max rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (2).png"></Image>
                </Link>
                <Link className="project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image className="h-max w-max rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (3).png"></Image>
                </Link>
                <Link className="project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image className="h-max w-max rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (4).png"></Image>
                </Link>
                <Link className="img-02 project-card bg-secondary-600 sm:row-span-2 rounded-lg" href="./">
                </Link>
                <Link className="project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image className="h-max w-max rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (6).png"></Image>
                </Link>
                <Link className="project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg" href="./">
                    <Image className="h-max w-max rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (5).png"></Image>
                </Link>
            </div>
        </section>
    );
}

export default Works;