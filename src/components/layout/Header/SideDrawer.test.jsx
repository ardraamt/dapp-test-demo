import { describe, vi, it, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SideDrawer from './SideDrawer'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

const mockMainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

const mockPresaleLink = { href: '/presale', label: 'Presale' };

const mockMoreMenuLinks = [
  { href: '/docs', label: 'Docs' },
  { href: '/faq', label: 'FAQ' },
];

const mockComingSoonLink = ['Coming Soon Link 1', 'Coming Soon Link 2'];

const mockHandleClickContracts = vi.fn();
const mockOnClose = vi.fn();

describe('SideDrawer Component', () => {
  test('renders main links correctly', () => {
    render(
      <Router>
        <SideDrawer
          mainLinks={mockMainLinks}
          presaleLink={mockPresaleLink}
          moreMenuLinks={mockMoreMenuLinks}
          comingSoonLink={mockComingSoonLink}
          onClose={mockOnClose}
          open={true}
          window={undefined}
          handleClickContracts={mockHandleClickContracts}
        />
      </Router>
    );

    mockMainLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });

    expect(screen.getByText(mockPresaleLink.label)).toBeInTheDocument();

    mockComingSoonLink.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('renders more menu links correctly', () => {
    render(
      <Router>
        <SideDrawer
          mainLinks={mockMainLinks}
          presaleLink={mockPresaleLink}
          moreMenuLinks={mockMoreMenuLinks}
          comingSoonLink={mockComingSoonLink}
          onClose={mockOnClose}
          open={true}
          window={undefined}
          handleClickContracts={mockHandleClickContracts}
        />
      </Router>
    );

    mockMoreMenuLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });

    expect(screen.getByText('ELO whitepaper')).toBeInTheDocument();

    expect(screen.getByText('Contracts')).toBeInTheDocument();
  });

  test('calls handleClickContracts when "Contracts" is clicked', () => {
    render(
      <Router>
        <SideDrawer
          mainLinks={mockMainLinks}
          presaleLink={mockPresaleLink}
          moreMenuLinks={mockMoreMenuLinks}
          comingSoonLink={mockComingSoonLink}
          onClose={mockOnClose}
          open={true}
          window={undefined}
          handleClickContracts={mockHandleClickContracts}
        />
      </Router>
    );

    fireEvent.click(screen.getByText('Contracts'));

    expect(mockHandleClickContracts).toHaveBeenCalled();
  });

  test('calls onClose when a link is clicked', () => {
    render(
      <Router>
        <SideDrawer
          mainLinks={mockMainLinks}
          presaleLink={mockPresaleLink}
          moreMenuLinks={mockMoreMenuLinks}
          comingSoonLink={mockComingSoonLink}
          onClose={mockOnClose}
          open={true}
          window={undefined}
          handleClickContracts={mockHandleClickContracts}
        />
      </Router>
    );

    fireEvent.click(screen.getByText('Home'));

    expect(mockOnClose).toHaveBeenCalled();
  });
});
