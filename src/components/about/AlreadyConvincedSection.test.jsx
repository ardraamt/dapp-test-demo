import React from 'react';
import { render, screen } from '@testing-library/react';
import AlreadyConvincedSection from './AlreadyConvincedSection'
import { describe, it, test, expect, vi, beforeEach } from "vitest"
import { BrowserRouter as Router } from 'react-router-dom';

describe('AlreadyConvincedSection', () => {
      test('renders the title and call to action', () => {
        render(
          <Router>
            <AlreadyConvincedSection />
          </Router>
        );

    const alreadyConvinced =screen.getByText(/Already convinced?/i)
    const waitingText =screen.getByText(/What are you waiting for?/i)
    const tokenText =screen.getByText(/Ensure to grab your ELO token now and enjoy vast benefits/i)
    expect(alreadyConvinced).toBeInTheDocument();
    expect(waitingText).toBeInTheDocument();
    expect(tokenText).toBeInTheDocument();

    const button = screen.getByRole('link', { name: /Get \$ELO Now/i });
    expect(button).toBeInTheDocument();
    expect(button.closest('a')).toHaveAttribute('href', '/pre-sale');

    });
});
