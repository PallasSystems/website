import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { HomePage } from './Home.components';
import { CarouselData, FeaturetteData } from './Home.data';

describe('HomePage', () => {
  it('Blank HomePage', () => {
    const { container } = render(<HomePage />, { wrapper: BrowserRouter });

    for (let index = 0; index < CarouselData.length; index++) {
      const expectedText = CarouselData[index].description;
      expect(screen.getByText(expectedText)).not.toBeNull();
    }

    for (let index = 0; index < FeaturetteData.length; index++) {
      const expectedText = FeaturetteData[index].byline;
      expect(screen.getByText(expectedText)).not.toBeNull();
    }
  });
});
