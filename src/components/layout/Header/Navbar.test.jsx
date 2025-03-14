import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest'; 
import Navbar from './Navbar'; 
describe('Navbar', () => {
  it('renders main links, presale link, and more menu correctly', () => {
    const mainLinks = [{ label: 'Home', href: '/' }];
    const presaleLink = { label: 'Pre-sale', href: '/pre-sale' };
    const moreMenuLinks = [{ label: 'About us', href: '/about' }];
    const comingSoonLink = []; 
    const handleClickContracts = vi.fn(); 

    render(
      <Router>
        <Navbar
          mainLinks={mainLinks}
          presaleLink={presaleLink}
          moreMenuLinks={moreMenuLinks}
          comingSoonLink={comingSoonLink} 
          handleClickContracts={handleClickContracts}
        />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');

    const presaleButton = screen.getByText('Pre-sale');
    expect(presaleButton).toBeInTheDocument();
    expect(presaleButton.closest('a')).toHaveAttribute('href', '/pre-sale');

    const moreButton = screen.getByRole('button', { name: /More/i });
    fireEvent.click(moreButton);
    const aboutLink = screen.getByText('About us');
    expect(aboutLink).toBeInTheDocument();

    const contractsItem = screen.getByText('Contracts');
    fireEvent.click(contractsItem);
    expect(handleClickContracts).toHaveBeenCalledTimes(1);
  });
});
