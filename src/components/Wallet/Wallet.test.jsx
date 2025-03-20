import { render, screen } from '@testing-library/react';
import Wallet from './Wallet'; 
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import '@testing-library/jest-dom'; 

vi.mock('../Blockie', () => ({
  default: () => <div>Blockie Mock</div>,
}));
vi.mock('../Address/Address', () => ({
  default: () => <div>Address Mock</div>,
}));
vi.mock('../NativeBalance', () => ({
  default: () => <div>Native Balance Mock</div>,
}));
vi.mock('./components/Transfer', () => ({
  default: () => <div>Transfer Mock</div>,
}));

describe('Wallet Component', () => {
  
  test('should render Wallet component with all sub-components', () => {
    render(<Wallet />);

    expect(screen.getByText('Blockie Mock')).toBeInTheDocument();
    expect(screen.getByText('Address Mock')).toBeInTheDocument();
    expect(screen.getByText('Native Balance Mock')).toBeInTheDocument();
    expect(screen.getByText('Transfer Mock')).toBeInTheDocument();
  });

  test('should render the Card with correct styles', () => {
    render(<Wallet />);

    const card = screen.getByText('Blockie Mock').closest('.ant-card');
    expect(card).toBeInTheDocument();
    
    expect(card).toHaveStyle('box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%)');
    expect(card).toHaveStyle('border: 1px solid #e7eaf3');
    expect(card).toHaveStyle('border-radius: 1rem');
    expect(card).toHaveStyle('width: 450px');
    expect(card).toHaveStyle('font-size: 16px');
    expect(card).toHaveStyle('font-weight: 500');
  });

  test('should render the title section with Blockie, Address, and NativeBalance', () => {
    render(<Wallet />);

    const blockie = screen.getByText('Blockie Mock');
    const address = screen.getByText('Address Mock');
    const balance = screen.getByText('Native Balance Mock');

    expect(blockie).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  });

  test('should call the Transfer component', () => {
    render(<Wallet />);
    
    const transfer = screen.getByText('Transfer Mock');
    expect(transfer).toBeInTheDocument();
  });
});
