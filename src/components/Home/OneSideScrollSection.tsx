import useInView from '@/hooks/useInView';
import { prefix } from '@/prefix';
import Image from 'next/image';
import React from 'react';
import TransitionComponent from '../AnimatedComponents/TransitionComponent';

let scrollingSection: {
  title: string,
  desc: string,
}[] = [
    {
      title: "Tell your story with an about page.",
      desc: "Add an “About Me” page to your portfolio website to share your bio and tell your story. You can even display your resume or CV.",
    },
    {
      title: "Let visitors get in touch through a contact page.",
      desc: "Make it easy for potential clients, employers, and collaborators to get in touch by including your email address or creating a form to be filled out directly on your site.",
    },
    {
      title: "Reach your audience with email and social media tools.",
      desc: "Share new work directly with your audience by using Squarespace Email Campaigns. Add social media integrations to your site and format posts with our Image Resizer to share your work.",
    },
  ]

const OneSideScrollSection = () => {



  return (
    <div className="relative w-full flex">
      <div className="sticky-section flex flex-col justify-center items-center sticky top-20 h-screen flex-1">
        <div className="flex flex-col h-3/4 gap-16">
          <h1 className="text-5xl font-bold">{"Expand your network"}</h1>
          <Image
            src={`${prefix}/images/email-2-750w.jpg`}
            alt=''
            width={480}
            height={450}
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center font-bold">
        <div className="w-3/4 flex flex-col gap-24 py-24 justify-center items-center">
          {
            scrollingSection.map((item) => {
              return <TransitionComponent key={item.title} transitionProps={{ transitionType: 'down-to-top', threshold: 0.6 }}>
                <div className={`relative flex flex-col box-content justify-center w-full border-t-2 border-t-slate-300 pt-4 min-h-96`}>
                  <div className="animated-bar"></div>
                  <div className="flex flex-col gap-6 w-4/5">
                    <h1 className="text-4xl">{item.title}</h1>
                    <h1 className="text-2xl">{item.desc}</h1>
                  </div>
                </div>
              </TransitionComponent>
            }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default OneSideScrollSection;
