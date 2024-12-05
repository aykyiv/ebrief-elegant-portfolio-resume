import { SubSection } from '@/components/sections/ui/sub-section'
import { IResume } from '@/interfaces/IResume'
import React from 'react'

function Experience({resumeMeData}: {resumeMeData: IResume}) {
  return (
    <SubSection title="Experience" className=''>
          <div className='flex flex-col gap-6'>
              {resumeMeData.experience.map((exp, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <div className='flex flex-row justify-between'>
                      <h3 className="text-secondary">
                        {exp.role} at {exp.company}:
                      </h3>
                      <p className="text-primary text-sm">({exp.period})</p>
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