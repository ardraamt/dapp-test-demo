import { render, screen, fireEvent } from '@testing-library/react';
import Unauthenticated from './Unauthenticated';
import { vi } from 'vitest';
import WalletProviders from './NetworkWalletProviders'; 

vi.mock('./NetworkWalletProviders', () => ({
  __esModule: true,
  default: ({ walletProvidersDialogOpen, handleWalletProvidersDialogToggle }) => (
    <div>
      {walletProvidersDialogOpen && (
        <div>
          <button onClick={handleWalletProvidersDialogToggle}>Close Dialog</button>
        </div>
      )}
    </div>
  ),
}));

describe('Unauthenticated', () => {
  test('renders Wallet Connect button', () => {
    render(<Unauthenticated />);

    const button = screen.getByRole('button', { name: /Wallet Connect/i });
    expect(button).toBeInTheDocument();
  });

  test('opens WalletProviders dialog when button is clicked', () => {
    render(<Unauthenticated />);

    const button = screen.getByRole('button', { name: /Wallet Connect/i });
    fireEvent.click(button);

   
    const closeDialogButton = screen.getByText('Close Dialog');
    expect(closeDialogButton).toBeInTheDocument();
  });

  test('closes WalletProviders dialog when close button is clicked', () => {
    render(<Unauthenticated />);

    const button = screen.getByRole('button', { name: /Wallet Connect/i });
    fireEvent.click(button); 

    const closeDialogButton = screen.getByText('Close Dialog');
    fireEvent.click(closeDialogButton); 
    expect(closeDialogButton).not.toBeInTheDocument();
  });
});
