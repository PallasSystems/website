import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { TeamBioPage } from './TeamBio.components';
import { MattBiosData, SteveBiosData } from './TeamBio.data';

describe('Team Bio Pages', () => {
  it('Matt Example TeamBioPage', () => {
    render(<TeamBioPage {...MattBiosData} />, { wrapper: BrowserRouter });

    for (let index = 0; index < MattBiosData.description.length; index++) {
      expect(screen.getByText(MattBiosData.description[index])).toBeTruthy();
    }
  });

  it('Steve Example TeamBioPage', () => {
    render(<TeamBioPage {...SteveBiosData} />, { wrapper: BrowserRouter });

    for (let index = 0; index < SteveBiosData.description.length; index++) {
      expect(screen.getByText(SteveBiosData.description[index])).toBeTruthy();
    }
  });
});
