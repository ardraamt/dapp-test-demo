import { render, screen, fireEvent } from '@testing-library/react';
import ImageWithFallback from './ImageWithFallback';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('ImageWithFallback', () => {
  test('should render image with src and alt text', () => {
    render(<ImageWithFallback src="test-image.jpg" fallbackSrc="fallback.jpg" />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  test('should render fallback image when src image fails to load', () => {
    render(<ImageWithFallback src="invalid-image.jpg" fallbackSrc="fallback.jpg" />);

    const image = screen.getByRole('img');
    fireEvent.error(image);

    expect(image).toHaveAttribute('src', 'fallback.jpg');
  });

  test('should render with alt="" by default', () => {
    render(<ImageWithFallback src="test-image.jpg" fallbackSrc="fallback.jpg" />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', '');
  });
});
