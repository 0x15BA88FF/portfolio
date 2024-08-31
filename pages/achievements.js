import Image from "next/image";
import Link from "next/link"
import Card from "@/components/Card";

export default function Achivements() {
    return (
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll">
            <h1 className="text-3xl text-center font-semibold">My Achivements</h1>
            <div className="w-full flex flex-col sm:grid grid-col-3 grid-col-1 gap-4 pointer-events-auto">
                <Link className="sm:col-span-2" href="./">
                    <Card sesitivity={ 0.03 } className="bg-primary aspect-video rounded-lg">
                        <Image className="h-max w-max rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (2).png"></Image>
                    </Card>
                </Link>

                <Link href="./" className="aspect-video">
                    <Card className="w-full h-full bg-primary rounded-lg">
                        <Image className="h-full w-full rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (3).png"></Image>
                    </Card>
                </Link>
                <Link href="./" className="aspect-video">
                    <Card className="w-full h-full bg-primary rounded-lg">
                        <Image className="h-full w-full rounded-lg" alt="test" width={1600} height={900} src="/achivements/cert (4).png"></Image>
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