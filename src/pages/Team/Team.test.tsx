import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TeamPage } from './Team.components';
import { TeamBiosData } from './Team.data';

describe('Team Page', () => {
  it('Blank TeamPage', () => {
    render(<TeamPage />, { wrapper: BrowserRouter });
    expect(screen.getByText('The Team')).toBeTruthy();

    for (let index = 0; index < TeamBiosData.length; index++) {
      const bio = TeamBiosData[index];

      expect(screen.getByAltText(bio.img.alt)).toBeTruthy();
    }
  });
});
