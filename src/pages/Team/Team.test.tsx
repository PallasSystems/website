import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { TeamPage } from './Team.components';
import { TeamBiosData } from './Team.data';

test("Blank TeamPage", () => {
  render(<TeamPage />, {wrapper: BrowserRouter});
  expect(screen.getByText("The Team")).toBeInTheDocument();

  for (let index = 0; index < TeamBiosData.length; index++) {
    const bio = TeamBiosData[index];

    expect(screen.getByAltText(bio.img.alt)).toBeInTheDocument();
  }
});