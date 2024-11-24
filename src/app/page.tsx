import { prefix } from "@/prefix";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <div className="relative" style={{ backgroundColor: "#5a848c" }}>
        <Image
          src={`${prefix}/images/hero-image.jpg`}
          alt=""
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={5000}
          height={3000}
        />
        <div className="absolute top-1/3 w-1/3 left-16 flex flex-col gap-2">
          <span className="text-xl font-medium">{"WEBSITES > PORTFOLIOS"}</span>
          <h1 className="font-bold text-6xl pr-4">Create a portfolio website</h1>
          <div className="pr-24 flex flex-col gap-4 items-start">
            <h2 className="font-semibold text-xl leading-6">{"Showcase your work online with a portfolio website. Get started with a professionally designed template that can be customized to fit your brand."}</h2>
            <a href="/pdf/Naiyar_resume.pdf" download="Naiyar_Imam" className="no-underline bg-white text-slate-700 px-10 py-4">{"DOWNLOAD CV"}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
