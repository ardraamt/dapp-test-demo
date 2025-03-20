import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import Address from './Address';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';
import Blockie from  '../Blockie';

// Mocking useMoralisDapp hook
vi.mock('../../providers/MoralisDappProvider/MoralisDappProvider', () => ({
  useMoralisDapp: vi.fn(),
}));

// Mocking Blockie component
vi.mock('../Blockie', () => ({
  __esModule: true,
  default: () => <div>Blockie Avatar</div>,
}));

// Mock clipboard API
beforeAll(() => {
  Object.defineProperty(global, 'navigator', {
    value: {
      clipboard: {
        writeText: vi.fn(),
      },
    },
  });
});

describe('Address Component', () => {
  beforeEach(() => {
    useMoralisDapp.mockReturnValue({
      walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    });
  });

  test('renders the address correctly', () => {
    render(<Address />);

    const address = screen.getByText('0x1234567890abcdef1234567890abcdef12345678');
    expect(address).toBeInTheDocument();
  });

  test('renders the address with ellipsis if size is passed', () => {
    render(<Address size={10} />);

    const address = screen.getByText(/0x12345678/);
    expect(address).toBeInTheDocument();
  });

  test('renders Blockie avatar when avatar prop is left', () => {
    render(<Address avatar="left" />);

    const blockieAvatar = screen.getByText('Blockie Avatar');
    expect(blockieAvatar).toBeInTheDocument();
  });

  test('renders Blockie avatar when avatar prop is right', () => {
    render(<Address avatar="right" />);

    const blockieAvatar = screen.getByText('Blockie Avatar');
    expect(blockieAvatar).toBeInTheDocument();
  });

  test('does not render Blockie when avatar prop is not provided', () => {
    render(<Address />);

    const blockieAvatar = screen.queryByAltText('Blockie Avatar');
    expect(blockieAvatar).not.toBeInTheDocument();
  });

  test('renders copy icon if copyable prop is true', () => {
    render(<Address copyable />);

    const copyIcon = screen.getByTitle('Copy Address');
    expect(copyIcon).toBeInTheDocument();
  });

  test('renders check icon after clicking copy icon', async () => {
    render(<Address copyable />);

    const copyIcon = screen.getByTitle('Copy Address');
    fireEvent.click(copyIcon);

    await waitFor(() => {
      const checkIcon = screen.getByTitle('Copied!');
      expect(checkIcon).toBeInTheDocument();
    });
  });

  test('copies address to clipboard when copy icon is clicked', async () => {
    render(<Address copyable />);

    const copyIcon = screen.getByTitle('Copy Address');
    fireEvent.click(copyIcon);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        '0x1234567890abcdef1234567890abcdef12345678'
      );
    });
  });

  test('does not render copy or check icon if copyable prop is false', () => {
    render(<Address copyable={false} />);

    const copyIcon = screen.queryByTitle('Copy Address');
    const checkIcon = screen.queryByTitle('Copied!');

    expect(copyIcon).not.toBeInTheDocument();
    expect(checkIcon).not.toBeInTheDocument();
  });
});
