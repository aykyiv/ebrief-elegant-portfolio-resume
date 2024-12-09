// __tests__/PortfolioSection.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import PortfolioSection from '@/components/sections/subSection/portfolio/PortfolioSection';
import { IProjectItem } from '@/interfaces/IPortfolio';
import mockPortfolioData from '../information-on-page/04-portfolio.json';

describe('PortfolioSection', () => {
  test('renders nothing when portfolioData is not provided', () => {
    // We'll use null or undefined to simulate no data
    const { container } = render(<PortfolioSection portfolioData={null as unknown as IProjectItem} />);
    
    // Check that the container is effectively empty
    expect(container.firstChild).toBeNull();
  });

  test('renders correctly when portfolioData is provided', () => {

    const { getByText } = render(<PortfolioSection portfolioData={mockPortfolioData[0]} />);
    
    // Check if the title is rendered
    expect(getByText('Portfolio')).toBeInTheDocument();
  });
});