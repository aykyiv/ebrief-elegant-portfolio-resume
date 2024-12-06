import { MainSection } from '@/components/sections/MainSection'
import React from 'react'
import { PortfolioSortSection } from './PortfolioSortSection'
import { IProjectItem } from '@/interfaces/IPortfolio'

function PortfolioSection({ portfolioData }: { portfolioData: IProjectItem }) {
  return (
    <MainSection title={portfolioData.title} className='mt-[140px]'>
      <PortfolioSortSection portfolioData={portfolioData} />
    </MainSection>
  )
}

export default PortfolioSection