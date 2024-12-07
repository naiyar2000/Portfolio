"use client";
import React from 'react';
import TransitionComponent from '../AnimatedComponents/TransitionComponent';
// import { useAboutStore } from '@/store/aboutStore';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { prefix } from '@/prefix';

const scrollingSection: {
  title: string,
  desc: string,
}[] = [
    {
      title: "Transforming Ideas into Interactive Experiences",
      desc: "Specializing in React.js, Next.js, Tailwind CSS, and Material UI, I create dynamic, responsive web applications. With a strong foundation in JavaScript, I build user interfaces that are visually appealing and highly functional, ensuring cross-browser compatibility and optimal performance.",
    },
    {
      title: "Bringing Web to Life with 3D Visuals",
      desc: "Using Three.js, I create immersive 3D experiences directly in the browser. My work with 3D models and animations adds a new dimension to web development, making websites more engaging and interactive.",
    },
    {
      title: "Building Robust Applications from Frontend to Backend",
      desc: "Proficient in backend development with Node.js and Java, I design robust server-side solutions using Spring Boot. My full-stack expertise allows me to develop seamless, scalable web applications, from database design to API integration.",
    },
  ]

const AboutSection = () => {

  // const { aboutPageData, loading, setAboutPageData } = useAboutStore();
  // useEffect(() => {
  //   setAboutPageData()
  // }, [])

  return (
    <div className="relative w-full flex flex-col gap-6 py-8 md:flex-row text-slate-200">
      <div className="flex flex-col justify-center items-center md:sticky top-20 h-screen flex-1">
        <div className="flex flex-col h-3/4 gap-1 items-center">
          <h1 className="text-3xl md:text-5xl font-bold">{"Welcome to My Portfolio"}</h1>
          {/* <ThreeDSection
            isAvatar={true}
            isControlEnabled={false}
            initialPosition={[0, -6, 3, 3.8]} /> */}
          <div className="w-full">
            <DotLottieReact
            className='w-full'
              src={`${prefix}/animatedSVG.lottie`}
              loop
              autoplay
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center font-bold">
        {
          // !loading && 
          <div className="px-5 md:w-3/4 flex flex-col gap-24 md:py-24 justify-center items-center">
            {
              scrollingSection?.map((item) => {
                return <TransitionComponent key={item.title} transitionProps={{ transitionType: 'down-to-top', threshold: 0.2 }}>
                  <div className={`relative flex flex-col box-content justify-start w-full border-t-2 border-t-slate-300 pt-2 md:pt-6 md:min-h-72`}>
                    <div className="animated-bar"></div>
                    <div className="flex flex-col gap-6 md:w-full">
                      <h1 className="text-2xl md:text-4xl">{item.title}</h1>
                      {/* <h1 className="text-lg md:text-lg text-slate-400">{item.description}</h1> */}
                      <h1 className="text-lg md:text-lg text-slate-400">{item.desc}</h1>
                    </div>
                  </div>
                </TransitionComponent>
              }
              )
            }
          </div>
        }
      </div>
    </div>
  );
};

export default AboutSection;
