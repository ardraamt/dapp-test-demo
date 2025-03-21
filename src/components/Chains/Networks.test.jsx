import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Networks from './Networks';
import { useMoralis, useChain } from 'react-moralis';
import { vi } from 'vitest';

vi.mock('react-moralis', () => ({
  useMoralis: vi.fn(),
  useChain: vi.fn(),
}));

describe('Networks component', () => {
  beforeEach(() => {
    useMoralis.mockReset();
    useChain.mockReset();
  });

  test('renders Networks component when user is authenticated', () => {
    useMoralis.mockReturnValue({ isAuthenticated: true });
    useChain.mockReturnValue({ switchNetwork: vi.fn(), chainId: '0x3' });

    render(<Networks />);

    const chip = screen.getByRole('button');
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent('ETH');
  });


  test('opens menu and selects a network', async () => {
    const switchNetworkMock = vi.fn();
    useMoralis.mockReturnValue({ isAuthenticated: true });
    useChain.mockReturnValue({ switchNetwork: switchNetworkMock, chainId: '0x3' });

    render(<Networks />);

    const chip = screen.getByRole('button');
    fireEvent.click(chip);

    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(2);
    const bscMenuItem = screen.getByText('BSC Mainnet');
    fireEvent.click(bscMenuItem);

    await waitFor(() => expect(switchNetworkMock).toHaveBeenCalledWith('0x61'));
  });

  test('shows correct network icon and symbol in the Chip', () => {
    useMoralis.mockReturnValue({ isAuthenticated: true });
    useChain.mockReturnValue({ switchNetwork: vi.fn(), chainId: '0x3' });

    render(<Networks />);

    const chip = screen.getByRole('button');
    expect(chip).toHaveTextContent('ETH'); 
    
  });
});
