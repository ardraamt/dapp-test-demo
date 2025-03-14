import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturesSection from './FeaturesSection'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

describe('FeaturesSection', () => {
  it('renders the title, features, and images correctly', () => {
    render(
      <Router>
        <FeaturesSection />
      </Router>
    );

    const featureTitle1 = screen.getByText('What you get');
    expect(featureTitle1).toBeInTheDocument();

    const featureTitle2 = screen.getByText('Extra services');
    expect(featureTitle2).toBeInTheDocument();

    const description1 = screen.getByText(/If you order foods to our restautant/);
    expect(description1).toBeInTheDocument();

    const description2 = screen.getByText(/We will provide more extra services/);
    expect(description2).toBeInTheDocument();

    const title = screen.getByText('Cool Reward System for Orders');
    expect(title).toBeInTheDocument();

    const subheading = screen.getByText('Our main features');
    expect(subheading).toBeInTheDocument();

    const images = screen.getAllByAltText('cubes');
    expect(images.length).toBe(2);

   
  });
});
