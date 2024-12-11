import { SubSection } from '@/components/sections/subSection/sub-section'
import { IResume } from '@/interfaces/IResume'
import React from 'react'

function Experience({resumeMeData}: {resumeMeData: IResume}) {
  return (
    <SubSection title={resumeMeData.experienceSectionTitle} className=''>
          <div className='flex flex-col gap-12'>
              {resumeMeData.experience.map((exp, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <div className='flex flex-col xl:flex-row justify-between '>
                      <h3 className="text-secondary">
                        {exp.role} at {exp.company}:
                      </h3>
                      <p className="text-primary text-sm min-w-max">({exp.period})</p>
                  </div>
                  <p>{exp.description}</p>
                  <ul className="list-disc list-inside mt-2 text-fonts">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
      </SubSection>
  )
}

export default Experience