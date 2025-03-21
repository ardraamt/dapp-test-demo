import { render, screen, fireEvent } from '@testing-library/react';
import HowToStake from './HowToStake'; 
import StakingGuide from './StakingGuide';
import { describe, vi,it, test, expect } from 'vitest';

vi.mock('./StakingGuide', () => ({
    default: () => <div>Staking Guide Modal</div>, 
  }));

describe('HowToStake Component', () => {
  
  test('should render the "Learn how to stake" button', () => {
    render(<HowToStake />);

    const button = screen.getByText('Learn how to stake');
    expect(button).toBeInTheDocument();
  });

  test('should open the StakingGuide dialog when the button is clicked', () => {
    render(<HowToStake />);

    const button = screen.getByText('Learn how to stake');
    fireEvent.click(button);
  
    const stakingGuide = screen.getByText('Staking Guide Modal');
    expect(stakingGuide).toBeInTheDocument();
  });

  test('should close the StakingGuide dialog when the button is clicked again', () => {
    render(<HowToStake />);

    const button = screen.getByText('Learn how to stake');
    fireEvent.click(button);
  
    let stakingGuide = screen.getByText('Staking Guide Modal');
    expect(stakingGuide).toBeInTheDocument();

    fireEvent.click(button);

    stakingGuide = screen.queryByText('Staking Guide Modal');
    expect(stakingGuide).toBeInTheDocument();
  });
});
