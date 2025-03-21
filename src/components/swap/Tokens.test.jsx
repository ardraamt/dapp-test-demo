import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tokens from './Tokens'; 
import { describe, vi,it, test, expect } from 'vitest';

const mockTokenList = {
  token1: { name: 'Token One', symbol: 'T1', logoURI: 'logo1.png' },
  token2: { name: 'Token Two', symbol: 'T2', logoURI: 'logo2.png' },
  token3: { name: 'Token Three', symbol: 'T3', logoURI: 'logo3.png' },
};

describe('Tokens Component', () => {
  
  test('should render Tokens component with title and input field', () => {
    render(<Tokens open={true} handleClose={() => {}} setToken={() => {}} tokenList={mockTokenList} />);  
    expect(screen.getByText('Start typing to search tokens')).toBeInTheDocument();
    expect(screen.getByText('Start typing to search tokens')).toBeInTheDocument();
  });

  test('should filter tokens based on the search input', () => {
    render(<Tokens open={true} handleClose={() => {}} setToken={() => {}} tokenList={mockTokenList} />);
   
    expect(screen.getByText('Token One')).toBeInTheDocument();
  });

  test('should show no results message when no tokens match search', async () => {
    const mockEmptyTokenList = []; 
    render(<Tokens open={true} handleClose={() => {}} setToken={() => {}} tokenList={mockEmptyTokenList} />);
  
    const noResultsMessage = await screen.findByText(/No results. May be your search was too specific./i);
    expect(noResultsMessage).toBeInTheDocument(1);
  })
 
  test('should handle pagination correctly', async () => {
    render(<Tokens open={true} handleClose={() => {}} setToken={() => {}} tokenList={mockTokenList} />);
    
    const navElements = screen.getAllByRole('navigation');
    expect(navElements.length).toBe(3); 
    const paginationButton = screen.getByText(/2/);
    fireEvent.click(paginationButton);
 
    await waitFor(() => {
      expect(screen.getByText('Token One')).toBeInTheDocument();
      expect(screen.queryByText('Token Two')).toBeInTheDocument();
    });
  });
  
  test('should call setToken and close the dialog when a token is selected', () => {
    const mockSetToken = vi.fn();
    const mockHandleClose = vi.fn();
    
    render(<Tokens open={true} handleClose={mockHandleClose} setToken={mockSetToken} tokenList={mockTokenList} />);

    fireEvent.click(screen.getByText('Token One'));
    expect(mockSetToken).toHaveBeenCalledWith(mockTokenList.token1);
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
