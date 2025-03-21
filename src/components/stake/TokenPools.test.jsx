import { describe, vi,it, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TokenPools from './TokenPools';

describe('TokenPools Component', () => {

  test('should render TokenPools component', () => {
    render(<TokenPools />);
 
    expect(screen.getByText('staking pool')).toBeInTheDocument();

    expect(screen.getByText('APR')).toBeInTheDocument();
    expect(screen.getByText('Wallet Balance')).toBeInTheDocument();
    expect(screen.getByText('Staked')).toBeInTheDocument();
    expect(screen.getByText('Earned')).toBeInTheDocument();

    expect(screen.getByLabelText('Amount to stake')).toBeInTheDocument();

    expect(screen.getByText('Stake')).toBeInTheDocument();
  });

  test('should allow user to type in the amount to stake input field', () => {
    render(<TokenPools />);
    
    const inputField = screen.getByLabelText('Amount to stake');
    fireEvent.change(inputField, { target: { value: '100' } });
    expect(inputField.value).toBe('100');
  });

  test('should display the helper text for "Amount to stake"', () => {
    render(<TokenPools />);
    
  
    expect(screen.getByText('Maximum amount is 0')).toBeInTheDocument();
  });
 
  test('should trigger click event on "Stake" button', () => {
    render(<TokenPools />);

    const stakeButton = screen.getByText('Stake');
    fireEvent.click(stakeButton);
    expect(stakeButton).toBeInTheDocument();
  });

});

