import { render, screen } from '@testing-library/react';
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import NativeBalance from './NativeBalance';
import { useMoralis, useNativeBalance } from 'react-moralis';
import { Chip } from '@mui/material';

vi.mock('react-moralis', () => ({
  useMoralis: vi.fn(),
  useNativeBalance: vi.fn(),
}));

describe('NativeBalance Component', () => {
//   test('does not render if user is not authenticated', () => {
//     useMoralis.mockReturnValue({
//       isAuthenticated: false,
//     });

//     render(<NativeBalance />);

//     const chipElement = screen.queryByRole('button');
//     expect(chipElement).toBeInTheDocument();
//   });

  test('renders formatted balance when user is authenticated', () => {
    const mockBalance = { formatted: '10.25' };

    useMoralis.mockReturnValue({
      isAuthenticated: true,
    });
    useNativeBalance.mockReturnValue({
      data: mockBalance,
    });

    render(<NativeBalance />);

    const chipElement = screen.getByText(mockBalance.formatted);
    expect(chipElement).toBeInTheDocument();
    expect(chipElement).toHaveTextContent(mockBalance.formatted);
  });

  test('renders balance with correct styles', () => {
    const mockBalance = { formatted: '50.00' };

    useMoralis.mockReturnValue({
      isAuthenticated: true,
    });
    useNativeBalance.mockReturnValue({
      data: mockBalance,
    });

    render(<NativeBalance />);
    const chipElement = screen.getByText(mockBalance.formatted); 
    expect(chipElement).toBeInTheDocument();    
  });
});
