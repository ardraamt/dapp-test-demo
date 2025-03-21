import { render, screen } from '@testing-library/react';
import StakeSteps from './StakeSteps'; 
import { describe, vi,it, test, expect } from 'vitest';

describe('StakeSteps Component', () => {
    test('should render without crashing', () => {
        render(<StakeSteps />);
    });

  test('should render correct number of steps', () => {
    render(<StakeSteps />);
   
    const steps = screen.getAllByText(/Approve you've \$/, /Enter an amount/, /Press stake/);
    expect(steps).toHaveLength(1);

  });

  test('should display correct step labels', () => {
    render(<StakeSteps />);

    const step1 = screen.getByText("Approve you've $");
    const step2 = screen.getByText('Enter an amount');
    const step3 = screen.getByText('Press stake');

    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });
});
