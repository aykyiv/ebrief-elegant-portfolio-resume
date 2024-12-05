import { SubSection } from '@/components/sections/ui/sub-section'
import { IResume } from '@/interfaces/IResume'
import React from 'react'

function Education({ resumeMeData }: { resumeMeData: IResume }) {
  return (
    <div>
        <SubSection title="Education">
        
          {resumeMeData.education.map((edu, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <div className="flex flex-row justify-between">
                  <h3 className="text-secondary">
                    {edu.concentration || edu.specialization}:
                  </h3>
                  <p className="text-primary text-sm">({edu.years})</p>
              </div>
              <p className="text-fonts">{edu.institution}</p>
            </div>
          ))}
        
      </SubSection>
    </div>
  )
}

export default Education