import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SnackbarAlert from '@mui/material/Snackbar';

vi.useFakeTimers()
describe('SnackbarAlert', () => {
  it('renders the snackbar correctly when openAlert is true', () => {
    render(
      <SnackbarAlert
        open={true} 
        onClose={vi.fn()}
        message="This is a test message"
      />
    );
  
    const message = screen.getByText(/This is a test message/i); 
    expect(message).toBeInTheDocument();
  });

  it('does not render the snackbar when openAlert is false', () => {
    render(
      <SnackbarAlert
        open={false} 
        onClose={vi.fn()}
        message="This is a test message" 
      />
    );
    
    const message = screen.queryByText(/This is a test message/i); 
    expect(message).not.toBeInTheDocument();
  });

  it('closes the snackbar when the close button is clicked', async () => {
    const onClose = vi.fn();
    render(
      <SnackbarAlert
        open={true}
        onClose={onClose}
        message="This is a test message"
        action={
          <button onClick={() => onClose()}>Close</button> 
        }
      />
    );

    const closeButton = screen.getByText(/close/i);
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(onClose).toHaveBeenCalled();
    });
  });

  it('auto hides the snackbar after 6 seconds', async () => {
    const onClose = vi.fn();
    render(
      <SnackbarAlert
        open={true}
        onClose={onClose} 
        message="This is a test message"
        autoHideDuration={6000} 
      />
    );
    vi.advanceTimersByTime(6000)
  
    await waitFor(() => {
      expect(onClose).toHaveBeenCalled(); 
    }, { timeout: 7000 }); 
  });
});



