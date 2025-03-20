import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import Chains from './Chains';
import { useChain } from 'react-moralis';

vi.mock('react-moralis', () => ({
  useChain: vi.fn(),
}));

describe('Chains Component', () => {
  beforeEach(() => {
    useChain.mockReturnValue({
      switchNetwork: vi.fn(),
      chainId: '0x1',
      chain: { name: 'Ethereum' },
    });
  });

  it('should render the Chains component without crashing', () => {
    render(<Chains />);
    const ethButton = screen.getByText('ETH');
    expect(ethButton).toBeInTheDocument();
  });

  it('should display the correct network options in the dropdown', () => {
    render(<Chains />);

    fireEvent.click(screen.getByRole('button'));

    const dropdownMenu = screen.getByRole('menu');
    expect(dropdownMenu).toHaveTextContent('ETH');
    expect(dropdownMenu).toHaveTextContent('BSC');
  });

  it('should display the correct icon and name for the selected network', () => {
    render(<Chains />);

    const ethButton = screen.getByRole('button');
    expect(ethButton).toHaveTextContent('ETH');
  });

  it('should call switchNetwork when a menu item is clicked', async () => {
    const switchNetwork = vi.fn();
    useChain.mockReturnValue({
      switchNetwork,
      chainId: '0x1',
      chain: { name: 'Ethereum' },
    });

    render(<Chains />);

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('BSC'));

    await waitFor(() => {
      expect(switchNetwork).toHaveBeenCalledWith('0x38');
    });
  });

  it('should update the button when the chainId changes', async () => {
    const switchNetwork = vi.fn();
    const { rerender } = render(<Chains />);

    const ethButton = screen.getByRole('button');
    expect(ethButton).toHaveTextContent('ETH');

    useChain.mockReturnValue({
      switchNetwork,
      chainId: '0x38',
      chain: { name: 'Binance Smart Chain' },
    });

    rerender(<Chains />);

    const bscButton = screen.getByRole('button');
    expect(bscButton).toHaveTextContent('BSC');
  });

  it('should fallback to ETH if no chainId is provided', () => {
    useChain.mockReturnValue({
      switchNetwork: vi.fn(),
      chainId: null,
      chain: null,
    });

    render(<Chains />);

    const ethButton = screen.getByRole('button');
    expect(ethButton).toBeInTheDocument('ETH');
  });
});
