import React from 'react'
import { SubSection } from '../../sub-section'
import { ServiceCard } from '../service-card'
import { IWhatIDo } from '@/interfaces/IWhatIDo'

function WhatIDoSubSection({aboutMeData}: {aboutMeData: IWhatIDo}) {
  return (
    <SubSection title={aboutMeData.whatIDoTitle}>
        <div className="flex flex-col gap-12 ">
          {aboutMeData.whatIDo.map((card, index) => (
            <div key={index} className="group relative ">
              <ServiceCard
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={index}
                className="flex flex-col gap-4 xl:flex-row relative z-20 rounded-[5px]"
              />
              <div
                className={`absolute -left-2 rounded-sm -top-2 bottom-0 w-[354px] xl:w-[80px] h-[80px] transition-all duration-500 xl:group-hover:w-[860px]  xl:group-hover:h-[115px] z-10 ${
                  index % 2 === 1 ? "bg-secondary" : "bg-primary"
                }`}
              />
            </div>
          ))}
        </div>
      </SubSection>
  )
}

export default WhatIDoSubSection