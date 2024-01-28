import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ServicesPage } from './Services.components';
import { ServicePageData } from './Services.data';

describe('Team Page', () => {
  it('Blank TeamPage', () => {
    render(<ServicesPage serviceProps={ServicePageData} />, { wrapper: BrowserRouter });
    expect(screen.getByText(ServicePageData.title)).toBeTruthy();

    for (let index = 0; index < ServicePageData.description.length; index++) {
      const description = ServicePageData.description[index];
      expect(screen.getByText(description)).toBeTruthy();
    }

    if (ServicePageData.items) {
      for (let index = 0; index < ServicePageData.items.length; index++) {
        const item = ServicePageData.items[index];
        expect(item.thumbnail).toBeTruthy();
        if (item.thumbnail) {
          expect(screen.getByText(item.thumbnail.description[0])).toBeTruthy();
        }
      }
    }
  });
});
