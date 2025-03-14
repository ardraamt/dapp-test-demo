import React from 'react';
import { render, screen } from '@testing-library/react';
import BridgeSection from './BridgeSection';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, test, expect } from "vitest";

describe('BridgeSection', () => {
  test('renders the title, body text, and button correctly', () => {
    render(
      <Router>
        <BridgeSection />
      </Router>
    );

    const title = screen.getByText('Bridge', { exact: true });
    expect(title).toBeInTheDocument();

    const bodyTextElements = screen.getAllByText('...');
    expect(bodyTextElements).toHaveLength(2); 
    bodyTextElements.forEach(element => {
      expect(element).toBeInTheDocument();
    });
    
    const button = screen.getByRole('link', { name: /Bridge Now/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', 'https://bridge.poly.network/token/');
  });
});
