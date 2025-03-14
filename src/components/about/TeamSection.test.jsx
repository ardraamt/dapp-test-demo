import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamSection from './TeamSection';
import { describe, it, test, expect } from 'vitest';

describe('TeamSection', () => {
  test('renders the titles correctly', () => {
    render(<TeamSection />);

    const title = screen.getByText('Have you met the ELO Founders Team?');
    expect(title).toBeInTheDocument();

    const sectionTitle = screen.getByText('Meet the team');
    expect(sectionTitle).toBeInTheDocument();
  });

  test('renders all team members with their names, titles, and bios', () => {
    render(<TeamSection />);

    const memberNames = [
      'Kevin Smith',
      'Derek Smith',
      'Ajay Jain',
      'Vladimir Urosevic',
      'Bhumish Shaw',
      'Gow Patel',
    ];
    
    memberNames.forEach((name) => {
      const memberName = screen.getByText(name);
      expect(memberName).toBeInTheDocument();
    });

    const memberTitles = [
      'CEO',
      'Manager Development & Testing',
      'Web development Manager',
      'Restaurant Support Manager',
      'Server Administration Manager',
      'Mobile development Manager',
    ];

    memberTitles.forEach((title) => {
      const memberTitle = screen.getByText(title);
      expect(memberTitle).toBeInTheDocument();
    });

    const memberBios = [
      'He is a CEO, co-founder of ELO, Effortless Order projects',
      'More than 6 years experiences in development & testing',
      'He is a web development manager',
      'He is a restaurant support manager',
      'He is a server administration manager',
      'He is a Mobile Development Manager',
    ];

    memberBios.forEach((bio) => {
      const memberBio = screen.getByText(bio);
      expect(memberBio).toBeInTheDocument();
    });
  });

  test('renders team member avatars and LinkedIn badges', () => {
    render(<TeamSection />);

    const avatars = screen.getAllByRole('img');
    expect(avatars.length).toBeGreaterThan(0);

    avatars.forEach((avatar) => {
      expect(avatar).toHaveAttribute('src'); 
    });
  });
});
