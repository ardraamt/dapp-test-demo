import { render, screen } from '@testing-library/react';
import { EthereumLogo, BinanceLogo } from './NetworkLogos'; 
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom'; 

describe('Network Logos', () => {
  test('should render EthereumLogo with correct image and alt text', () => {
    render(<EthereumLogo width={50} />); 

    const ethereumImage = screen.getByAltText('Ethereum Logo');
    expect(ethereumImage).toBeInTheDocument();

    expect(ethereumImage).toHaveAttribute('width', '50');
  });

  test('should render BinanceLogo with correct image and alt text', () => {
    render(<BinanceLogo width={40} />); 
    
    const binanceImage = screen.getByAltText('Binance Logo');
    expect(binanceImage).toBeInTheDocument();

    expect(binanceImage).toHaveAttribute('width', '40');
  });

  test('should render default width for EthereumLogo and BinanceLogo when no width is passed', () => {
    render(<EthereumLogo />);
    render(<BinanceLogo />);

    const ethereumImage = screen.getByAltText('Ethereum Logo');
    const binanceImage = screen.getByAltText('Binance Logo');

    expect(ethereumImage).toHaveAttribute('width', '25');
    expect(binanceImage).toHaveAttribute('width', '25');
  });
});
