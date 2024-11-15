'use client';

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Markdown from 'react-markdown'
import { FaLink } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';

export default function InfoPanel({ close, data }) {
  const [ imageIdx, setImageIdx ] = useState(0);

  return (
    <>
      <div onClick={_ => close() && setImageIdx(0)} className="fixed top-0 left-0 w-screen h-screen bg-background-950/60 backdrop-blur pointer-events-auto" />
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center pt-8 overflow-y-scroll">
        <div className="w-full max-w-[850px] flex flex-col flex-grow gap-4 p-4 pb-28 bg-background-700 rounded-t-3xl pointer-events-auto">
          <div className="w-max absolute flex gap-2 self-end p-2">
            { data.link && <Link href={data.link} className="p-4 bg-background-950/80 rounded-xl hover:bg-background-950"><FaLink /></Link> }
            <button onClick={_ => close() && setImageIdx(0)} className="p-4 bg-background-950/80 rounded-xl hover:bg-background-950"><MdClose /></button>
          </div>
          <Image width={770} height={450} src={data.images[imageIdx]} alt={data.title} className="w-full aspect-video rounded-2xl" />
          {data.images.length > 1 && 
            <div className="w-full flex gap-4 overflow-x-scroll">
              {data.images.map((image, idx) => (
                <Image onClick={_ => setImageIdx(idx)} key={idx} width={160} height={80} src={image} alt={data.title} className="aspect-video rounded-xl" />
              ))}
            </div>
          }
          <hr className="border-background-600" />
          <h1 className="text-5xl text-white font-semibold pb-4">{data.title}</h1>
          <article className="prose prose-invert">
            <Markdown>{data.description}</Markdown>
          </article>
        </div>
      </div>
    </>
  )
};
