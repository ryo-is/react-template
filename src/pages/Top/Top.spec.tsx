import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Top from './Top';

describe('Top', () => {
  it('renders welcome message', () => {
    render(
      <BrowserRouter>
        <Top />
      </BrowserRouter>
    );
    
    expect(screen.getByText('ようこそ')).toBeInTheDocument();
  });
  
  it('renders link to about page', () => {
    render(
      <BrowserRouter>
        <Top />
      </BrowserRouter>
    );
    
    const aboutLink = screen.getByText('詳細を見る');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.getAttribute('href')).toBe('/about');
  });
});
