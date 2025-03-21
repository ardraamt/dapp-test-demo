import { render } from '@testing-library/react';
import Wallet from './Wallet';
import { describe, vi, it, test, expect } from 'vitest';

describe('Wallet Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Wallet />);
  
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    
    const pathElements = svgElement.querySelectorAll('path');
    expect(pathElements.length).toBe(1);
    expect(svgElement).toHaveAttribute('viewBox', '0 0 21 20');
  });

  test('accepts and applies props', () => {

    const mockClassName = 'custom-class';

    const { container } = render(<Wallet className={mockClassName} />);

    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass(mockClassName);
  });
});
