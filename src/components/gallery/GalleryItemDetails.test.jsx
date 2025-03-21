import { render, screen, fireEvent } from '@testing-library/react';
import GalleryItemDetails from './GalleryItemDetails'; 
import { describe, vi, it, test, expect } from 'vitest';

vi.mock('../ui/ImageWithFallback', () => {
  return {
    __esModule: true,
    default: ({ alt, width, height, fallbackSrc, className }) => (
      <img alt={alt} width={width} height={height} src={fallbackSrc} className={className} />
    ),
  };
});

describe('GalleryItemDetails Component', () => {
  const item = {
    name: 'Test NFT',
    description: 'This is a test NFT description.',
    attributes: [
      { trait_type: 'Color', value: 'Red' },
      { trait_type: 'Size', value: 'Large' },
    ],
  };

  test('renders NFT details and displays the image with fallback', () => {
    render(
      <GalleryItemDetails
        item={item}
        open={true}
        handleClose={vi.fn()}
      />
    );

    expect(screen.getByText('NFT Details')).toBeInTheDocument();
    expect(screen.getByText('Test NFT')).toBeInTheDocument();
    expect(screen.getByText('This is a test NFT description.')).toBeInTheDocument();
    expect(screen.getByText('Color: Red')).toBeInTheDocument();
    expect(screen.getByText('Size: Large')).toBeInTheDocument();
    const image = screen.getByRole('img');
    expect(image.src).toMatch(/^data:image\/svg\+xml,/)
  });

  test('closes the dialog when close button is clicked', () => {
    const handleClose = vi.fn();

    render(
      <GalleryItemDetails
        item={item}
        open={true}
        handleClose={handleClose}
      />
    );

    fireEvent.click(screen.getByLabelText('close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
