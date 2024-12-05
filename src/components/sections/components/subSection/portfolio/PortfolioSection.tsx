import { MainSection } from '@/components/sections/ui/MainSection'
import React from 'react'
import { PortfolioSortSection } from './PortfolioSortSection'
import portfolioData from '@/information-on-page/04-portfolio.json'

function PortfolioSection() {
  return (
    <MainSection title="Portfolio">
      <PortfolioSortSection portfolioData={portfolioData[0]} />
    </MainSection>
  )
}

export default PortfolioSection