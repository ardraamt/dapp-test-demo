import { render, screen, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RoadmapSection from './RoadmapSection';

describe('RoadmapSection', () => {
  it('renders the roadmap with stages and phases correctly for desktop', () => {
    render(<RoadmapSection />);

    const title = screen.getByText('Roadmap');
    expect(title).toBeInTheDocument();

    const description = screen.getByText(/This Roadmap outlines our future plans/i);
    expect(description).toBeInTheDocument();

    const mobilePhaseNames = [
      'Phase I',
      'Phase II',
      'Phase III',
      'Phase IV',
      'Phase V',
    ];
     mobilePhaseNames.forEach((phaseName) => {
        const phases = screen.queryAllByText(phaseName);
        expect(phases.length).toBeGreaterThan(0); 
      });
      

      const phase1TimelineDots = screen.getAllByRole('listitem');;

      phase1TimelineDots.forEach((dot) => {
      expect(dot).toBeInTheDocument();
      });
  });

  it('renders the roadmap with stages and phases correctly for mobile', async () => {
  
    global.innerWidth = 400;
    global.dispatchEvent(new Event('resize'));

    await act(async () => {
      render(<RoadmapSection />);
    });

    const mobilePhaseNames = [
      'Phase I',
      'Phase II',
      'Phase III',
      'Phase IV',
      'Phase V',
    ];

    mobilePhaseNames.forEach((phaseName) => {
      const phases = screen.queryAllByText(phaseName);
      expect(phases.length).toBeGreaterThan(0);
    });

    const phase1MobileItems = [
      '1K Holders',
      'Presale launch',
      'Stage1 Marketing',
      '1% Airdrop',
    ];
    phase1MobileItems.forEach((item) => {
      const stageItems = screen.queryAllByText(item);
      expect(stageItems.length).toBeGreaterThan(0); 
    });
  });
});
