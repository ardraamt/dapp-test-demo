import { describe, vi,it, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import StakingGuide from './StakingGuide'; 

describe('StakingGuide Component', () => {
    test('should not render the dialog when open is false', () => {
        render(<StakingGuide open={false} handleClose={() => {}} />);
    
        expect(screen.queryByText('How To Stake')).not.toBeInTheDocument();
    });
  test('should render the dialog when open is true', () => {
    render(<StakingGuide open={true} handleClose={() => {}} />);
  
    expect(screen.getByText('How To Stake')).toBeInTheDocument();
  
    expect(screen.getByText('Staking')).toBeInTheDocument();
    expect(screen.getByText('Checking balance')).toBeInTheDocument();
    expect(screen.getByText('Unstaking')).toBeInTheDocument();
  });

  test('should open and close the accordion when clicked', () => {
    render(<StakingGuide open={true} handleClose={() => {}} />);
    
    expect(screen.queryByText('Enter the amount you want to stake in the input box.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Staking'));
  
    expect(screen.getByText('Enter the amount you want to stake in the input box.')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Staking'));
  
    expect(screen.queryByText('Enter the amount you want to stake in the input box.')).toBeInTheDocument();
  });

  test('should render correct number of steps in each accordion', () => {
    render(<StakingGuide open={true} handleClose={() => {}} />);
    
    fireEvent.click(screen.getByText('Staking'));
    const stakingSteps = screen.getAllByText(/Press.*to/);
    expect(stakingSteps).toHaveLength(3);
   
    fireEvent.click(screen.getByText('Checking balance'));
    const checkingBalanceSteps = screen.getAllByText(/Refresh the page/);
    expect(checkingBalanceSteps).toHaveLength(1);
    
    fireEvent.click(screen.getByText('Unstaking'));
    const unstakingSteps = screen.getAllByText(/Press.*Claim & Unstake/);
    expect(unstakingSteps).toHaveLength(1);
  });

  test('should close the dialog when "GOT IT" button is clicked', () => {
    const handleClose = vi.fn();
    render(<StakingGuide open={true} handleClose={handleClose} />);
    
    fireEvent.click(screen.getByText('GOT IT'));
   
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
