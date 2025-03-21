import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, test, expect } from 'vitest';import { vi } from 'vitest';
import Countdown from './Countdown';

describe('Countdown Component', () => {
  
  test('should show countdown after a future date', async () => {
    const futureDate = new Date(Date.now() + 5000).toISOString();

    render(<Countdown date={futureDate} />);
  
    await waitFor(() => {
      expect(screen.getByText(/Opens in/)).toBeInTheDocument();
    });
  });
  
  test('should render OPEN chip when countdown is completed', async () => {
    vi.useFakeTimers();  

    const futureDate = new Date(Date.now() + 1000).toISOString(); 
    render(<Countdown date={futureDate} />);
    
    vi.advanceTimersByTime(1000);
    
    expect(screen.getByText('OPEN')).toBeInTheDocument();
    expect(screen.getByText('OPEN').closest('div')).toHaveClass('MuiChip-colorSuccess');
    
    vi.useRealTimers(); 
  });

  test('should update the countdown every second', async () => {
    vi.useFakeTimers();

    const futureDate = new Date(Date.now() + 5000).toISOString(); 
    render(<Countdown date={futureDate} />);
    
  
    await waitFor(() => {
      expect(screen.getByText(/Opens in/)).toBeInTheDocument();
    });
   
    vi.advanceTimersByTime(1000);
    
    expect(screen.getByText(/Opens in/)).toBeInTheDocument();
    
    vi.useRealTimers(); 
  });
});
