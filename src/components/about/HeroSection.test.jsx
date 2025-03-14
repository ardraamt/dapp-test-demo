import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection'; 
import { describe, it, test, expect } from 'vitest';

describe('HeroSection', () => {
  test('renders the title, main text, and body text correctly', () => {
    render(<HeroSection />);

    const title = screen.getByText('About us');
    expect(title).toBeInTheDocument();

    const mainText = screen.getByText(/Cool reward system with \$ELO inside our food ordering business/i);
    expect(mainText).toBeInTheDocument();

    const bodyText = screen.getByText(/We are building new reward system with our \$ELO/i);
    expect(bodyText).toBeInTheDocument();
  });
});
