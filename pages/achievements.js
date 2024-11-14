import Link from "next/link"
import Image from "next/image";
import Card from "@/components/Card";

export default function Achivements() {
    return (
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll backdrop-blur-xl">
            <h1 className="text-3xl text-center font-semibold">My Achivements</h1>
            <div className="w-full md:w-[770px] flex flex-col sm:grid grid-col-3 grid-col-1 gap-4 mx-auto pointer-events-auto">
                <Link href="./" className="sm:col-span-2">
                    <Card sesitivity={ 0.03 } className="aspect-video bg-primary rounded-lg">
                        <Image width={1600} height={900} src="/achivements/cert (2).png" alt="test" className="h-max w-max rounded-lg" />
                    </Card>
                </Link>

                <Link href="./" className="aspect-video">
                    <Card className="w-full h-full bg-primary rounded-lg">
                        <Image className="h-full w-full rounded-lg" width={1600} height={900} src="/achivements/cert (3).png" alt="test" />
                    </Card>
                </Link>
                <Link href="./" className="aspect-video">
                    <Card className="w-full h-full bg-primary rounded-lg">
                        <Image width={1600} height={900} src="/achivements/cert (4).png" alt="test" className="h-full w-full rounded-lg" />
                    </Card>
                </Link>
                <Link href="./" className="w-full h-full sm:row-span-2">
                    <Card className="w-full h-full bg-primary rounded-lg">
                    </Card>
                </Link>
                <Link href="./" className="aspect-video">
                    <Card className="w-full h-full bg-primary rounded-lg">
                        <Image className="h-full w-full rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (6).png"></Image>
                    </Card>
                </Link>
                <Link href="./" className="aspect-video">
                    <Card className="w-full h-full bg-primary rounded-lg">
                        <Image className="h-full w-full rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (5).png"></Image>
                    </Card>
                </Link>
            </div>
        </section>
    );
}
