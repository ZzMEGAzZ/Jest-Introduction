import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from './homepage';

describe('HomePage', () => {
  test('renders welcome message', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Our App')).toBeInTheDocument();
  });

  test('renders get started card', () => {
    render(<HomePage />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn more about our features')).toBeInTheDocument();
    expect(screen.getByText('Explore')).toBeInTheDocument();
  });
});