import Image from 'next/image'
import React from 'react'

interface SkillCarousel {
  skill: string
  image: string
}

interface SkillsCarouselProps {
  skills: SkillCarousel[]
}

export function SkillsCarousel({ skills }: SkillsCarouselProps) {
  return (
    <div className="  absolute bottom-[-180px] -left-[60%] z-10   bg-primary overflow-hidden">
      <div className="flex animate-carousel  ">
        {[...skills, ...skills].map((skill, index) => (
          <div key={`${skill.skill}-${index}`} className='w-[140px] mx-4 p-4 flex justify-center items-center'>
                <Image
                  src={skill.image}
                  alt={skill.skill}
                  width={32}
                  height={32}
                  className=" w-[140px] h-[140px]"
                />
            </div>
        ))}
      </div>
    </div>
  )
}