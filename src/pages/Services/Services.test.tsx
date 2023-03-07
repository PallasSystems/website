import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { ServicesPage } from './Services.components';
import { ServicePageData } from './Services.data';

test("Blank TeamPage", () => {
  render(<ServicesPage serviceProps={ServicePageData}/>, {wrapper: BrowserRouter});
  expect(screen.getByText(ServicePageData.title)).toBeInTheDocument();

  for (let index = 0; index < ServicePageData.description.length; index++) {
    const description = ServicePageData.description[index];
    expect(screen.getByText(description)).toBeInTheDocument();
  }

  for (let index = 0; index < ServicePageData.items.length; index++) {
    const item = ServicePageData.items[index];

    expect(screen.getByText(item.thumbnail.description[0])).toBeInTheDocument();
  }
});