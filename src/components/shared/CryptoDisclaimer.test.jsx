import { render, screen } from '@testing-library/react';
import CryptoDisclaimer from './CryptoDisclaimer';
import { describe, it, test, expect } from 'vitest';


describe('CryptoDisclaimer Component', () => {
  
  test('should render the alert', () => {
    render(<CryptoDisclaimer />);
  
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('should display the title "Cryptoasset Disclaimer"', () => {
    render(<CryptoDisclaimer />);
  
    expect(screen.getByText('Cryptoasset Disclaimer')).toBeInTheDocument();
  });

  test('should display the correct disclaimer message', () => {
    render(<CryptoDisclaimer />);
    
    expect(screen.getByText(/Trading\/Minting crypto-assets carries a high level of risk/)).toBeInTheDocument();
    expect(screen.getByText(/you could sustain a loss of some or all of your initial investment/)).toBeInTheDocument();
  });

  test('should have warning severity class', () => {
    render(<CryptoDisclaimer />);
 
    const alertElement = screen.getByRole('alert');
    expect(alertElement).toHaveClass('MuiAlert-outlined');
    expect(alertElement).toBeInTheDocument('MuiAlert-standardWarning');
  });
});
