import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { TeamBioPage } from './TeamBio.components';
import { MattBiosData, SteveBiosData } from './TeamBio.data';

test("Matt Example TeamBioPage", () => {
  render(<TeamBioPage { ...MattBiosData }/>, {wrapper: BrowserRouter});

  for (let index = 0; index < MattBiosData.description.length; index++) {
    expect(screen.getByText(MattBiosData.description[index])).toBeInTheDocument();
  } 
});

test("Steve Example TeamBioPage", () => {
  render(<TeamBioPage { ...SteveBiosData }/>, {wrapper: BrowserRouter});

  for (let index = 0; index < SteveBiosData.description.length; index++) {
    expect(screen.getByText(SteveBiosData.description[index])).toBeInTheDocument();
  } 
});