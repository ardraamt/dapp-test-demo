import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowToSection from './HowToSection'; 

describe('HowToSection', () => {
  it('renders the title, description, buttons, and steps correctly', () => {
    render(<HowToSection />);

    const title = screen.getByText(/How to get \$ELO/);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/Let's Get started/);
    expect(description).toBeInTheDocument();

    const step1Button = screen.getByRole('button', { name: /Choose your network/ });
    expect(step1Button).toBeInTheDocument();

    const step2Button = screen.getByRole('button', { name: /Create a MetaMask Wallet/ });
    expect(step2Button).toBeInTheDocument();

    const step3Button = screen.getByRole('button', { name: /Send BEP20 \$BNB to MetaMask/ });
    expect(step3Button).toBeInTheDocument();

    const step4Button = screen.getByRole('button', { name: /Click On Pre-Sale/ });
    expect(step4Button).toBeInTheDocument();

    const step5Button = screen.getByRole('button', { name: /Swap BEP20 \$BNB to \$ELO/ });
    expect(step5Button).toBeInTheDocument();

    const step6Button = screen.getByRole('button', { name: /Claim \$ELO/ });
    expect(step6Button).toBeInTheDocument();

    fireEvent.click(step1Button);

    const description1 = screen.getByText(
      '$ELO is available in BSC, Binance Smart Chain networks. Choose your network from here BSC “DROP DOWN MENU” “Same as in toolbar” to participate in $ELO pre-sale'
    );
    expect(description1).toBeInTheDocument();

    const gotItButton1 = screen.getByText('Got It');
    fireEvent.click(gotItButton1);

    const step2AfterNext = screen.getByText('Create a MetaMask Wallet');
    expect(step2AfterNext).toBeInTheDocument();

    const previousButton = screen.getAllByText('previous step');
    expect(previousButton[0]).toBeInTheDocument();
    
    const step1AfterBack = screen.getByText('Choose your network');
    expect(step1AfterBack).toBeInTheDocument();

    fireEvent.click(step6Button);

    const againButton = screen.getByText('Again');
    fireEvent.click(againButton);

    const step1AfterReset = screen.getByText('Choose your network');
    expect(step1AfterReset).toBeInTheDocument();
  });
});
