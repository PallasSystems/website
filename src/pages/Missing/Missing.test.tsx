import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MissingPage } from './Missing.components';

describe('MissingPage', () => {
  it('Blank MissingPage', () => {
    render(<MissingPage />, { wrapper: BrowserRouter });
    expect(screen.getByText('Missing Page')).toBeTruthy();
  });
});
