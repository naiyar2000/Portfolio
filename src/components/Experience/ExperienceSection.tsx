import React, { useRef, useEffect, useState } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'
import TransitionComponent from '../AnimatedComponents/TransitionComponent'

type ExperienceType = {
  title: string;
  company: string;
  date: string;
  description: string;
  type: 'work' | 'education';
}

const experiences: ExperienceType[] = [
  {
    title: 'Full Stack Developer',
    company: 'Mercedes-Benz Research and Development',
    date: 'Nov 2023 - Present',
    description: `Delivered a React app to production, migrated to AWS serverless architecture, and boosted team efficiency by 20% with GitHub Copilot.`,
    type: 'work'
  },
  {
    title: 'Full Stack Developer',
    company: 'Incture Technologies',
    date: 'Jul 2022 - Nov 2023',
    description: `Modernized legacy code, developed scalable APIs, and implemented automated testing to enhance performance by 20%.`,
    type: 'work'
  },
  {
    title: 'Freelance Project: Prayas Booking App',
    company: 'Self-Employed',
    date: 'May 2021 - Dec 2021',
    description: `Built a booking app with Flutter and React, integrating Firebase for real-time notifications and secure authentication.`,
    type: 'work'
  },
  {
    title: 'Bachelors Degree in Electrical Engineering',
    company: 'Veer Surendra Sai University of Technology',
    date: 'Graduated 2022',
    description: `Graduated with an 8.3 GPA, excelling in problem-solving and analytical skills.`,
    type: 'education'
  }
];



const ExperienceCard = ({ title, company, date, description, type }: ExperienceType) => {
  const Icon = type === 'work' ? Briefcase : GraduationCap

  return (
    <TransitionComponent transitionProps={{ transitionType: 'down-to-top', threshold: 0.8 }}>
      <div className="experience-card bg-glass-card cursor-pointer">

        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md">
            <Icon className="text-white w-6 h-6" />
          </div>
          <h3 className="ml-4 text-xl font-bold text-white">{title}</h3>
        </div>
        <span className="block text-sm text-gray-400 mb-2">{company} • {date}</span>
        <p className="text-gray-300">{description}</p>
      </div>
    </TransitionComponent>
  )
}

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [lineHeight, setLineHeight] = useState(0)
  const [dotActive, setDotActive] = useState<number[]>([])

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight / 2) {
        const distancePastMiddle = windowHeight / 2 - sectionTop
        const progress = Math.min(distancePastMiddle / sectionHeight, 1) * 100
        setLineHeight(progress)

        // Check if each experience card is past the "cross" point
        const experienceCards = sectionRef.current.querySelectorAll('.experience-card')
        const activeDots = Array.from(experienceCards).reduce<number[]>((acc, card, index) => {
          const cardTop = card.getBoundingClientRect().top
          if (cardTop < windowHeight / 2) acc.push(index)
          return acc
        }, [])
        setDotActive(activeDots)
      } else {
        setLineHeight(0)
      }
    }

    const throttledScroll = () => {
      if (animationFrameId) return
      animationFrameId = requestAnimationFrame(() => {
        handleScroll()
        animationFrameId = 0
      })
    }

    window.addEventListener('scroll', throttledScroll)
    handleScroll() // Run once on mount

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id="experience" className="py-16" ref={sectionRef}>
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">Experience</h2>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Central timeline line with animated fill */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#050506] via-[#0a1f1f] to-[#000000]"
          >
            <div
              className="absolute left-0 w-full bg-gradient-to-b from-blue-500 to-purple-600 transition-all ease-in-out"
              style={{ height: `${lineHeight}%`, width: '4px' }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <ExperienceCard
                    title={exp.title}
                    company={exp.company}
                    date={exp.date}
                    description={exp.description}
                    type={exp.type}
                  />
                </div>
                <div className="w-full md:w-1/12 flex justify-center relative">
                  <div className={`absolute w-6 h-6 rounded-full border-4 shadow-lg top-1/2 transform -translate-y-1/2 
                    ${dotActive.includes(index)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 ring-4 ring-blue-500'
                      : 'bg-gray-500'} 
                  `}></div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
