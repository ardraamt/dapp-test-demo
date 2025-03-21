import { render } from '@testing-library/react';
import Discord from './Discord'; // Import the Discord component
import { describe, vi, it, test, expect } from 'vitest';


describe('Discord Component', () => {
  test('renders correctly', () => {

    const { container } = render(<Discord />);

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    
    const pathElement = svgElement.querySelector('path');
    expect(pathElement).toBeInTheDocument();

    expect(svgElement).toHaveAttribute('viewBox', '0 0 71 55');
  });

  test('accepts and applies props', () => {
    const mockClassName = 'custom-class';

    const { container } = render(<Discord className={mockClassName} />);
    
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass(mockClassName);
  });
});
