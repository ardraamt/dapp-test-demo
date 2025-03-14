import { render, screen } from '@testing-library/react';
import { describe, it, test, expect } from 'vitest';
import PartnersSection from './PartnersSection';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PartnersSection', () => {
  test('renders partner logos with correct links and alt text', () => {
    render(
      <Router>
        <PartnersSection />
      </Router>
    );

    const binanceLogo = screen.getByAltText('binancechain');
    expect(binanceLogo).toBeInTheDocument();
    expect(binanceLogo).toHaveAttribute('src', expect.stringContaining('binancechain.svg'));

    const coinmarketcapLogo = screen.getByAltText('coinmarketcap');
    expect(coinmarketcapLogo).toBeInTheDocument();
    expect(coinmarketcapLogo).toHaveAttribute('src', expect.stringContaining('coinmarketcap.svg'));

    const certikLogo = screen.getByAltText('certik');
    expect(certikLogo).toBeInTheDocument();
    expect(certikLogo).toHaveAttribute('src', expect.stringContaining('certik.svg'));

    const fairyproofLogo = screen.getByAltText('fairyproof');
    expect(fairyproofLogo).toBeInTheDocument();
    expect(fairyproofLogo).toHaveAttribute('src', expect.stringContaining('fairyproof.png'));

    const binanceLink = screen.getByAltText('binancechain').closest('a');
    expect(binanceLink).toBeInTheDocument('href', expect.stringContaining('binancechain'));

    const coinmarketcapLink = screen.getByAltText('coinmarketcap').closest('a');
    expect(coinmarketcapLink).toBeInTheDocument('href', expect.stringContaining('coinmarketcap'));

    const certikLink = screen.getByAltText('certik').closest('a');
    expect(certikLink).toBeInTheDocument('href', expect.stringContaining('certik'));

    const fairyproofLink = screen.getByAltText('fairyproof').closest('a');
    expect(fairyproofLink).toBeInTheDocument('href', expect.stringContaining('fairyproof'));
  });

  it('applies correct grayscale filter to images', () => {
    render(
      <Router>
        <PartnersSection />
      </Router>
    );

    const binanceLink = screen.getByAltText('binancechain').closest('a');
    expect(binanceLink).toBeInTheDocument('href', 'https://www.binance.org');

    const coinmarketcapLink = screen.getByAltText('coinmarketcap').closest('a');
    expect(coinmarketcapLink).toBeInTheDocument('href', 'https://coinmarketcap.com');

    const certikLink = screen.getByAltText('certik').closest('a');
    expect(certikLink).toBeInTheDocument('href', 'https://www.certik.org');

    const fairyproofLink = screen.getByAltText('fairyproof').closest('a');
    expect(fairyproofLink).toBeInTheDocument('href', 'https://fairyproof.io');
  });
});
