import { render, screen } from '@testing-library/react';
import { MetamaskLogo, WalletConnectLogo } from './WalletLogos'; 
import '@testing-library/jest-dom'; 
describe('Wallet Logos', () => {
  test('should render MetamaskLogo with correct image and alt text', () => {
    render(<MetamaskLogo width={50} />);

    const metamaskImage = screen.getByAltText('Metamask Logo');
    expect(metamaskImage).toBeInTheDocument();

    expect(metamaskImage).toHaveAttribute('src', expect.stringContaining('wallet-logos/metamask.svg'));

    expect(metamaskImage).toHaveAttribute('width', '50');
  });

  test('should render WalletConnectLogo with correct image and alt text', () => {
    render(<WalletConnectLogo width={40} />); 

    const walletConnectImage = screen.getByAltText('Wallet Connect Logo');
    expect(walletConnectImage).toBeInTheDocument();

    expect(walletConnectImage).toHaveAttribute('width', '40');
  });

  test('should render default width for MetamaskLogo and WalletConnectLogo when no width is passed', () => {
    render(<MetamaskLogo />);
    render(<WalletConnectLogo />);

    const metamaskImage = screen.getByAltText('Metamask Logo');
    const walletConnectImage = screen.getByAltText('Wallet Connect Logo');

    expect(metamaskImage).toHaveAttribute('width', '25');
    expect(walletConnectImage).toHaveAttribute('width', '25');
  });
});
