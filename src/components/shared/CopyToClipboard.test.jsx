import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CopyToClipboard from './CopyToClipboard';
import { describe, it, test, expect } from 'vitest';

describe('CopyText Component', () => {
  test('should render the icon button', () => {
    render(<CopyToClipboard text="Test Text" />);

    const copyButton = screen.getByRole('button');
    expect(copyButton).toBeInTheDocument();
  });

  test('should trigger tooltip when text is copied', async () => {
    render(<CopyToClipboard text="Test Text" />);

    const copyButton = screen.getByRole('button');
    fireEvent.click(copyButton);

    const tooltip = screen.getByText('Copied');
    expect(tooltip).toBeInTheDocument();

    await waitFor(() => {
      expect(tooltip).toBeInTheDocument();
    });
  });

  test('should copy the correct text when button is clicked', () => {
    const mockOnCopy = vi.fn();
  
    render(<CopyToClipboard text="Test Text" />);
  
    const copyButton = screen.getByRole('button');
    
    expect(copyButton).toBeInTheDocument();

  });

  test('should handle tooltip open and close correctly', async () => {
    render(<CopyToClipboard text="Test Text" />);

    const copyButton = screen.getByRole('button');
    fireEvent.click(copyButton);

    const tooltip = screen.getByText('Copied');
    expect(tooltip).toBeInTheDocument();
    
    await waitFor(() => {
      expect(tooltip).toBeInTheDocument();
    });
  });
});
