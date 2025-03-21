import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import Ramper from './Ramper';
import { useMoralis } from 'react-moralis';

vi.mock('react-moralis', () => ({
  useMoralis: vi.fn(),
}));

describe('Ramper Component', () => {
  it('should render an iframe', async () => {
   
    useMoralis.mockReturnValue({
      Moralis: {
        Plugins: {
          fiat: {
            buy: vi.fn().mockResolvedValue({ data: 'https://dummy-url.com' }),
          },
        },
      },
    });

    render(<Ramper />);

    await waitFor(() => screen.getByTitle('ramper'));

    const iframe = screen.getByTitle('ramper');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://dummy-url.com');
    expect(iframe).toHaveStyle('width: 420px');
  });

//   it('should not render iframe if Moralis plugin is not available', async () => {
//     useMoralis.mockReturnValue({
//       Moralis: {
//         Plugins: {},
//       },
//     });

//     render(<Ramper />);

//     const iframe = screen.queryByTitle('ramper');
//     expect(iframe).not.toBeInTheDocument();
//   });

//   it('should handle plugin errors gracefully', async () => {

//     useMoralis.mockReturnValue({
//       Moralis: {
//         Plugins: {
//           fiat: {
//             buy: vi.fn().mockRejectedValue('Error'),
//           },
//         },
//       },
//     });

//     render(<Ramper />);
//     const iframe = screen.queryByTitle('ramper');
//     expect(iframe).not.toBeInTheDocument();
//   });
});
