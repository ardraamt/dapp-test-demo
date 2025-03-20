import { render, screen, waitFor } from '@testing-library/react';
import BackdropMask from './Backdrop';

import { describe, it, test, expect, vi } from 'vitest';

vi.mock('react-countdown', () => {
  return {
    __esModule: true,
    default: ({ renderer }) => renderer({ days: 1, hours: 2, minutes: 30, seconds: 45 }),
  };
});

describe('BackdropMask Component', () => {
  const mockDate = new Date().getTime() + 10000000;

  test('should render the BackdropMask with countdown', () => {
    const mockDate = new Date(2025, 0, 1);
    const { container } = render(<BackdropMask date={mockDate} />);
  
    const backdrop = container.querySelector('[aria-hidden="true"]');
    expect(backdrop).toBeInTheDocument();
    expect(backdrop).toHaveStyle('z-index: 1');
    expect(backdrop).toHaveStyle('background-color: rgba(255,255,255,0.5)');

    const countdown = screen.getByText('1:2:30:45');
    expect(countdown).toBeInTheDocument();
  });

  test('should update countdown value correctly', async () => {
    render(<BackdropMask date={mockDate} />);

    await waitFor(() => {
      const countdown = screen.getByText('1:2:30:45');
      expect(countdown).toBeInTheDocument();
    });
  });

  test('should have correct icon and label in Chip', () => {
    render(<BackdropMask date={mockDate} />);

    const chipLabel = screen.getByText(/1:2:30:45/i);
    expect(chipLabel).toBeInTheDocument();

    const icon = screen.getByTestId('TimerIcon');
    expect(icon).toBeInTheDocument();
  });
});



