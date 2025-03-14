import React from 'react';
import { render, screen } from '@testing-library/react';
import NftPlatformSection from './NftPlatformSection'; 
import { describe, it, test, expect } from 'vitest';

describe('NftPlatformSection', () => {
  test('renders the title, main text, and body text correctly', () => {
    render(<NftPlatformSection />);

    const mainText = screen.getByText('NFT Platform');
    expect(mainText).toBeInTheDocument();

    const bodyText = screen.getByText('...');
    expect(bodyText).toBeInTheDocument();
  });
});
