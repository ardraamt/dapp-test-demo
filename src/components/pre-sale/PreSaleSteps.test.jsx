import { render, screen } from '@testing-library/react';
import PreSaleSteps from './PreSaleSteps';
import { describe, vi, it, test, expect } from 'vitest';


describe('PreSaleSteps Component', () => {
  test('renders the steps correctly', () => {
 
    render(<PreSaleSteps />);

    const stepElements = [
      'Connect Wallet',
      'Choose Network',
      'Enter Amount',
      'Click Buy',
    ];

    stepElements.forEach((step) => {
      const stepLabel = screen.getByText(step);
      expect(stepLabel).toBeInTheDocument();
    });
  });

  test('renders the Stepper with the correct number of steps', () => {
    render(<PreSaleSteps />);

    const stepLabels = screen.getAllByText(/Connect Wallet|Choose Network|Enter Amount|Click Buy/);
    expect(stepLabels).toHaveLength(4);
  });
});
