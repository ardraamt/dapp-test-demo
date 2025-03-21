import { describe, it, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TokenPrice from './TokenPrice';
import useTokenPrice from 'hooks/useTokenPrice';
import { waitFor } from '@testing-library/react';

vi.mock('hooks/useTokenPrice', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe('TokenPrice Component', () => {
  const mockTokenPrice = {
    usdPrice: '1000',
    nativePrice: '0.5',
  };

  const mockProps = {
    image: 'https://dummyimage.com/token-logo.png',
  };

  it('should render the TokenPrice component correctly', () => {
    useTokenPrice.mockReturnValue({ tokenPrice: mockTokenPrice });

    render(<TokenPrice {...mockProps} />);

    const img = screen.getByAltText('Token logo');
    expect(img).toHaveAttribute('src', mockProps.image);
  });

  it('should display USD price initially', async () => {
    useTokenPrice.mockReturnValue({ tokenPrice: mockTokenPrice });

    render(<TokenPrice {...mockProps} />);

    await waitFor(() => {
      const chip = screen.getByRole('button');
      expect(chip).toBeInTheDocument('1000');
    });
  });
  it('should toggle between USD and native price when clicked', () => {
    useTokenPrice.mockReturnValue({ tokenPrice: mockTokenPrice });

    render(<TokenPrice {...mockProps} />);

    const chip = screen.getByRole('button');
    expect(chip).toBeInTheDocument('1000');

    fireEvent.click(chip);

    expect(chip).toBeInTheDocument('0.5');

    fireEvent.click(chip);

    expect(chip).toBeInTheDocument('1000');
  });

  it('should change the tooltip text when toggling between USD and native price', () => {
    useTokenPrice.mockReturnValue({ tokenPrice: mockTokenPrice });

    render(<TokenPrice {...mockProps} />);

    const chip = screen.getByRole('button');
    expect(chip).toBeInTheDocument();
    fireEvent.click(chip);
    expect(chip).toBeInTheDocument();
  });
});
