import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { HomePage } from './Home.components';
import {CarouselData, FeaturetteData } from './Home.data';

test("Blank HomePage", () => {
  render(<HomePage />, {wrapper: BrowserRouter});

  for (let index = 0; index < CarouselData.length; index++ ) {
    const expectedText = CarouselData[index].description;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  }

  for (let index = 0; index < FeaturetteData.length; index++ ) {
    const expectedText = FeaturetteData[index].byline;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  }
});