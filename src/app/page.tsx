import { prefix } from "@/prefix";
import Image from "next/image";


export default function Home() {
  return (
    <div className="relative h-full" style={{ backgroundColor: "#5a848c" }}>
      <div className="absolute rounded-sm bg-white text-black bg-opacity-50 top-20 left-5 md:bg-none md:bg-opacity-0 md:top-1/3 md:w-1/3 md:left-16 md:text-white flex flex-col gap-2">
        <span className="text-lg font-bold md:text-xl md:font-medium">{"WEBSITES > PORTFOLIOS"}</span>
        <h1 className="font-bold text-6xl pr-4">Create a portfolio website</h1>
        <div className="pr-24 flex flex-col gap-4 items-start">
          <h2 className="font-semibold text-xl leading-6">{"Showcase your work online with a portfolio website. Get started with a professionally designed template that can be customized to fit your brand."}</h2>
          <a href={`${prefix}/pdf/Naiyar_resume.pdf`} download="Naiyar_Imam" className="no-underline bg-white text-slate-700 px-10 py-4">{"DOWNLOAD CV"}</a>
        </div>
      </div>
      <div className="h-screen md:h-auto">
        <Image
          src={`${prefix}/images/hero-image.jpg`}
          alt=""
          className="h-3/4 w-full object-cover object-[center_bottom] md:w-full md:h-auto"
          width={5000}
          height={200}
        />
      </div>
    </div>
  );
}
