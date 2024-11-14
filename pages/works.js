import Link from "next/link"
import Image from "next/image";
import Card from "@/components/Card";

export default function Works() {
    return (
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll backdrop-blur">
            <h1 className="text-3xl text-center font-semibold">My Works & contributions</h1>
            <div className="w-full md:w-[770px] flex flex-col sm:grid grid-col-3 grid-col-1 gap-4 mx-auto pointer-events-auto">
                <Link href="./">
                    <Card className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image width={1600} height={900} src="/projects/project (2).png" alt="test" className="h-full w-full" />
                    </Card>
                </Link>

                <Link href="./">
                    <Card className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image width={1600} height={900} src="/projects/project (3).png" alt="test" className="h-full w-full" />
                    </Card>
                </Link>

                <Link href="./">
                    <Card className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image width={1600} height={900} src="/projects/project (4).png" alt="test" className="h-full w-full" />
                    </Card>
                </Link>

                <Link href="./">
                    <Card className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image width={1600} height={900} src="/projects/project (5).png" alt="test" className="h-full w-full" />
                    </Card>
                </Link>
    
                <Link href="./">
                    <Card className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image width={1600} height={900} src="/projects/project (6).png" alt="test" className="h-full w-full" />
                    </Card>
                </Link>
            </div>
        </section>
    );
}
