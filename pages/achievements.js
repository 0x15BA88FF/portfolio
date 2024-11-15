import useSWR from "swr"
import { useState } from "react";

import Image from "next/image";
import Card from "@/components/Card";
import InfoPanel from "@/components/InfoPanel";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Achivements() {
    const { data, error, isLoading } = useSWR('/api/achivements', fetcher);
    const [ achivementIdx, setAchivementIdx ] = useState(0);
    const [ isVisible, setIsVisible ] = useState(false);

    if (error) return <p>Error loading projects.</p>;
    if (isLoading) return <p>Loading...</p>;
    if (data) return (
      <>
        <section className="w-full h-full flex flex-col gap-4 p-4 pb-28 overflow-y-scroll backdrop-blur">
            <h1 className="text-3xl text-center font-semibold">My Achivements</h1>
            <div className="w-full md:w-[770px] flex flex-col sm:grid grid-col-3 grid-col-1 gap-4 mx-auto pointer-events-auto">
                {data.map((achivement, idx) => (
                    <Card key={idx} className="bg-background-800 rounded-2xl overflow-hidden">
                        <Image onClick={_ => {setAchivementIdx(idx); setIsVisible(true)}} width={770} height={450} src={achivement.images[0]} alt={achivement.name} className="h-full w-full" />
                    </Card>
                ))} 
            </div>
        </section>
        {isVisible && <InfoPanel visible={isVisible} close={setIsVisible} data={data[achivementIdx]} /> }
      </>
    );
}
