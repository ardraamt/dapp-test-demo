import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TokenomicsSection from './TokenomicsSection';

describe('TokenomicsSection', () => {
  it('renders the title and description correctly', () => {
    render(<TokenomicsSection />);

    const title = screen.getByText('Tokenomics');
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/During the presale, you will have the option to buy \$ELO/i);
    expect(description).toBeInTheDocument();

    const totalSupply = screen.getByText('1B - 1,000,000,000');
    expect(totalSupply).toBeInTheDocument();

    const totalSupplyText = screen.getByText('Total Supply');
    expect(totalSupplyText).toBeInTheDocument();
  });

  it('renders tokenomics statistics with progress bars correctly', () => {
    render(<TokenomicsSection />);

    const tokenomicsLabel = screen.getByText('Tokenomic Statistics');
    expect(tokenomicsLabel).toBeInTheDocument();

    const statisticLabels = [
      'Presale',
      'DEX',
      'CEX reserved',
      'Staking',
      'Team',
      'Reward for Ordering',
      'Reward for Customers',
      'Airdrop',
    ];

    statisticLabels.forEach((label) => {
      const labelElement = screen.getByText(label);
      expect(labelElement).toBeInTheDocument();
    });

    const progressBars = screen.getAllByRole('progressbar');
    expect(progressBars.length).toBe(statisticLabels.length);

    const progressValues = [10, 10, 10, 25, 10, 25, 5, 5];
    progressBars.forEach((progressBar, index) => {
      expect(progressBar).toHaveAttribute('aria-valuenow', progressValues[index].toString());
    });
  });

  it('displays the correct value for each statistic', () => {
    render(<TokenomicsSection />);

    const percentageElements = screen.getAllByText(/%/); 

    const statisticsValues = ['10%', '10%', '10%', '25%', '10%', '25%', '5%', '5%'];

    statisticsValues.forEach((value) => {
    const percentageElement = percentageElements.find((el) => el.textContent === value);
    expect(percentageElement).toBeInTheDocument()
    });
  });
});
