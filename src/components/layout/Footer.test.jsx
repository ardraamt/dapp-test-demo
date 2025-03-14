import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, it, test, expect, vi, beforeEach } from "vitest"

describe('Footer Component', () => {
  test('renders "Audited by" text', () => {
    render(<Footer />);
    const auditedText = screen.getByText(/Audited by/i);
    expect(auditedText).toBeInTheDocument();
  });


  test('renders social link buttons with correct aria-labels', () => {
    render(<Footer />);
    const twitterButton = screen.getByLabelText('Twitter');
    const telegramButton = screen.getByLabelText('Telegram');
    const discordButton = screen.getByLabelText('Discord');
    const emailButton = screen.getByLabelText('Email');

    expect(twitterButton).toBeInTheDocument();
    expect(telegramButton).toBeInTheDocument();
    expect(discordButton).toBeInTheDocument();
    expect(emailButton).toBeInTheDocument();
  });

  test('renders copyright text with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const regex = new RegExp(`Copyright ©.*${currentYear}`);
    const copyrightElement = screen.getByText(regex);
    expect(copyrightElement).toBeInTheDocument();
  });
});
