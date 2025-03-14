import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('HeroSection', () => {
  it('renders the title, description, buttons, and media correctly', () => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );

    const title = screen.getByText(/Effortless Order Foods/);
    expect(title).toHaveTextContent('Effortless Order Foods');


    const description = screen.getByText(/ELO is decentralized reward system/);
    expect(description).toBeInTheDocument();

    const getEloButton = screen.getByText('Get ELO');
    expect(getEloButton).toBeInTheDocument();

    const getEloToken = screen.getByText((content, element) => {
    return content.includes("Let's get more and more $ELO token");
    });

    const whitepaperButton = screen.getByText('ELO Whitepaper');
    expect(whitepaperButton).toBeInTheDocument();

    
    const youtubePlayer = screen.getByRole('link');
    expect(youtubePlayer).toBeInTheDocument('href', 'https://www.youtube.com/watch?v=VB5_R9_F8MY/');
    });
});
