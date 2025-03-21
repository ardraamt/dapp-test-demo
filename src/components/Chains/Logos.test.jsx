import { render } from '@testing-library/react';
import { AvaxLogo, BSCLogo, ETHLogo, PolygonLogo } from './Logos';
import { describe, it, test, expect, vi, beforeEach } from "vitest"

describe('Logo components', () => {
  test('renders AvaxLogo correctly', () => {
    const { container } = render(<AvaxLogo />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '25');
    expect(svgElement).toHaveAttribute('height', '25');
  });

  test('renders BSCLogo correctly', () => {
    const { container } = render(<BSCLogo />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '25');
    expect(svgElement).toHaveAttribute('height', '25');
  });

  test('renders ETHLogo correctly', () => {
    const { container } = render(<ETHLogo />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '25');
    expect(svgElement).toHaveAttribute('height', '25');
  });

  test('renders PolygonLogo correctly', () => {
    const { container } = render(<PolygonLogo />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', '25');
    expect(svgElement).toHaveAttribute('height', '25');
  });
});
