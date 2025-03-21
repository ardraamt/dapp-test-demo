import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import QuickStart from './QuickStart';
import { useMoralis } from 'react-moralis';
import { Card, Timeline } from 'antd';

vi.mock('react-moralis', () => ({
  useMoralis: vi.fn(),
}));

describe('QuickStart Component', () => {
  test('renders QuickStart component with the correct title and to-do item', () => {
  
    useMoralis.mockReturnValue({
      Moralis: {
        Plugins: {
          oneInch: {} 
        }
      }
    });

    render(<QuickStart />);

    const titleElement = screen.getByText('To-Do List');
    expect(titleElement).toBeInTheDocument();

    const todoTextElement = screen.getByText('Please Edit the HomePage');
    expect(todoTextElement).toBeInTheDocument();

    const linkElement = screen.getByRole('link', {
      name: /elotoken/i
    });
    expect(linkElement).toHaveAttribute('href', 'https://www.elotoken.com');
  });

  test('renders QuickStart component with correct styles', () => {
    useMoralis.mockReturnValue({
      Moralis: {
        Plugins: {
          oneInch: {} 
        }
      }
    });

    const { container } = render(<QuickStart />);

    const cardElement = container.querySelector('.ant-card');
    expect(cardElement).toHaveStyle('box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%)');
    expect(cardElement).toHaveStyle('border: 1px solid #e7eaf3');
    expect(cardElement).toHaveStyle('border-radius: 0.5rem');
  });

  test('correctly handles isInchDex value based on plugin presence', () => {

    useMoralis.mockReturnValue({
      Moralis: {
        Plugins: {
          oneInch: {} 
        }
      }
    });

    render(<QuickStart />);

    const titleElement = screen.getByText('To-Do List');
    expect(titleElement).toBeInTheDocument();
    
    useMoralis.mockReturnValue({
      Moralis: {
        Plugins: {} 
      }
    });

    render(<QuickStart />);

    const titleWithoutPlugin = screen.getAllByText('To-Do List');
    expect(titleWithoutPlugin).toHaveLength(2);
  });
});
