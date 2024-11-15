import useSWR from "swr";
import { useState } from "react";

import Image from "next/image";
import Card from "@/components/Card";
import InfoPanel from "@/components/InfoPanel";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Works() {
    const { data, error, isLoading } = useSWR('/api/projects', fetcher);
    const [ isVisible, setIsVisible ] = useState(false);
    const [ projectIdx, setProjectIdx ] = useState(0);

    if (error) return <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-8"><p className="text-xl text-[#f38ba8] font-semibold">That doesn&apos;t look good :/</p></div>;
    if (isLoading) return <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-8"><div className="w-10 h-10 bg-primary animate-bounce rounded-full" /></div>;
    if (data) return (
      <>
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll backdrop-blur">
            <h1 className="text-3xl text-center font-semibold">My Works & contributions</h1>
            <div className="w-full md:w-[770px] flex flex-col sm:grid grid-col-3 grid-col-1 gap-4 mx-auto pointer-events-auto">
                {data.map((project, idx) => (
                    <Card key={idx} className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image onClick={_ => {setProjectIdx(idx); setIsVisible(true)}} width={770} height={450} src={project.images[0]} alt={project.name} className="h-full w-full" />
                    </Card>
                ))} 
            </div>
        </section>
        {isVisible && <InfoPanel visible={isVisible} close={setIsVisible} data={data[projectIdx]} /> }
      </>
    );
}
