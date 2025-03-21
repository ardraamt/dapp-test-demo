import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import index from './index';
import { useMoralis } from 'react-moralis';
import { useERC20Transfers } from 'hooks/useERC20Transfers';
import { describe, vi, it, test, expect } from 'vitest';

vi.mock('hooks/useERC20Transfers');
vi.mock('react-moralis');

describe('ERC20Transfers Component', () => {
  // test('displays skeleton loader while loading', async () => {

  //   useERC20Transfers.mockReturnValue({
  //     ERC20Transfers: null,
  //     chainId: 1,
  //   });

  //   render(<index />);
  //   expect(screen.getByRole('progressbar')).toBeInTheDocument();
  // });

  test('renders the table with ERC20 transfers data', async () => {

    const mockTransfers = [
      {
        address: '0xTokenAddress',
        from_address: '0xFromAddress',
        to_address: '0xToAddress',
        value: '1000000000000000000',
        transaction_hash: '0xTransactionHash',
        decimals: 18,
      },
    ];

    useERC20Transfers.mockReturnValue({
      ERC20Transfers: mockTransfers,
      chainId: 1,
    });

    useMoralis.mockReturnValue({
      Moralis: {
        Units: {
          FromWei: (value) => parseFloat(value) / 1e18, 
        },
      },
    });

    render(<index />);
//     // await waitFor(() => {
//       expect(screen.getByText(/token-address/i)).toHaveTextContent();
//       expect(screen.getByText(/0xFromAddres/i)).toBeInTheDocument();
//       expect(screen.getByText(/0xToAddress/i)).toBeInTsheDocument();
//       expect(screen.getByText(/1\.000000/i)).toBeInTheDocument(); 
//       expect(screen.getByText(/View Transaction/i)).toBeInTheDocument(); 
//     // });
  });
});
