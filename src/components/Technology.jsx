import { RiReactjsLine } from "react-icons/ri"

import { FaJs } from "react-icons/fa"
import { DiHtml5 } from "react-icons/di"
import { DiCss3 } from "react-icons/di"
import { TbSql } from "react-icons/tb"
import { TbBrandCSharp } from "react-icons/tb";
// import { SiCsharp } from "react-icons/si";



const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div 
           
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCSharp className="text-5xl text-cyan-400"/>
            </div>
            <div 
           
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbSql className="text-5xl "/>
            </div>
            <div 
           
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-red-700"/>
            </div>
            <div 
           
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className="text-5xl text-yellow-500"/>
            </div>
            <div 
           
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiHtml5 className="text-5xl text-orange-400"/>
            </div>
            <div 
           
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiCss3 className="text-5xl text-cyan-500"/>
            </div>
        </div>
    </div>
  )
}

export default Technology