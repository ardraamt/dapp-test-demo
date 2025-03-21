import { render, screen } from '@testing-library/react';
import { describe, it, test, expect, vi, beforeEach } from 'vitest';
import Assets from './Assets';
import { useERC20Balance } from 'hooks/useERC20Balance';
import { useMoralis } from 'react-moralis';

vi.mock('hooks/useERC20Balance');
vi.mock('react-moralis');

describe('Assets Component', () => {
  test('should display assets correctly when data is available', () => {
    useERC20Balance.mockReturnValue({
      assets: [
        {
          symbol: 'ETH',
          balance: '1000000000000000000', 
          logo: 'https://example.com/logo.png',
          decimals: 18,
        },
        {
          symbol: 'USDT',
          balance: '2000000000', 
          logo: 'https://example.com/logo.png',
          decimals: 6,
        },
      ],
    });

    useMoralis.mockReturnValue({
      Moralis: {
        Units: {
          FromWei: (value, decimals) => {
            return parseFloat(value) / Math.pow(10, decimals); 
          },
        },
      },
    });

    render(<Assets />);

    expect(screen.getByText('ETH')).toBeInTheDocument();
  
    expect(screen.getByText('USDT')).toBeInTheDocument();
   
  });

  test('should display "No Data" when there are no assets', () => {
    useERC20Balance.mockReturnValue({
      assets: null,
    });

    render(<Assets />);
    expect(screen.getByText('No Data')).toBeInTheDocument();
  });
});
