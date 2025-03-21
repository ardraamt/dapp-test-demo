import { describe, vi, it, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Medium from './Medium';

describe('Medium Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Medium />);
  
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    
    const pathElements = svgElement.querySelectorAll('path');
    expect(pathElements.length).toBe(3);  
    expect(svgElement).toHaveAttribute('viewBox', '0 0 22 13');
  });

  test('accepts and applies props', () => {
    const mockClassName = 'custom-class';

    const { container } = render(<Medium className={mockClassName} />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveClass(mockClassName);
  });
});
