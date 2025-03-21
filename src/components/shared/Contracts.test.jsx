import { render, screen, fireEvent } from '@testing-library/react';
import Contracts from './Contracts';  
import { describe, it, test, expect } from 'vitest';

vi.mock('./CopyToClipboard', () => ({
  default: ({ text }) => <button>Copy {text}</button>, 
}));

describe('Contracts Component', () => {
  const mockHandleClose = vi.fn();

  test('should render the dialog when open prop is true', () => {
    render(<Contracts open={true} handleClose={mockHandleClose} />);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  test('should not render the dialog when open prop is false', () => {
    render(<Contracts open={false} handleClose={mockHandleClose} />);

    const dialog = screen.queryByRole('dialog');
    expect(dialog).toBeNull();
  });

  test('should render contract titles correctly', () => {
    render(<Contracts open={true} handleClose={mockHandleClose} />);

    expect(screen.getByText('ELO Token contract')).toBeInTheDocument();
    expect(screen.getByText('ELO Token Presale contract')).toBeInTheDocument();
  });

  test('should render contract links with correct href attributes', () => {
    render(<Contracts open={true} handleClose={mockHandleClose} />);

    const tokenLink = screen.getByText('0xeAfD5b2DCd03f54b12128405D30aC15F89906399');
    expect(tokenLink).toHaveAttribute(
      'href',
      'https://testnet.bscscan.com/token/0xeAfD5b2DCd03f54b12128405D30aC15F89906399'
    );
    const presaleLink = screen.getByText('0xBb569C738f56348B21a84D520f679fe41Fd01cc5');
    expect(presaleLink).toHaveAttribute(
      'href',
      'https://testnet.bscscan.com/address/0xBb569C738f56348B21a84D520f679fe41Fd01cc5'
    );
  });

  test('should render CopyToClipboard button for each contract', () => {
    render(<Contracts open={true} handleClose={mockHandleClose} />);

    expect(screen.getByText('Copy 0xeAfD5b2DCd03f54b12128405D30aC15F89906399')).toBeInTheDocument();
    expect(screen.getByText('Copy 0xBb569C738f56348B21a84D520f679fe41Fd01cc5')).toBeInTheDocument();
  });

  test('should call handleClose when the close button is clicked', () => {
    render(<Contracts open={true} handleClose={mockHandleClose} />);

    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  test('should render no contracts when the contracts array is empty', () => {
    const emptyContracts = [];

    render(<Contracts open={true} handleClose={mockHandleClose} contracts={emptyContracts} />);

    expect(screen.queryByText('ELO Token contract')).toBeInTheDocument();
    expect(screen.queryByText('ELO Token Presale contract')).toBeInTheDocument();
  });
});
