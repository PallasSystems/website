import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { AnalyticSVG } from './Analytics.components';

const imageBasicProps = {id: "identifier"};
const imageProps = {id: "identifier", className: "bob", height: "5rem", width: "5rem"};

  test("Blank AnalyticSVG", () => {
    render(<AnalyticSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Data Analytics");
    expect(result).toBeValid();
  });

  test("AnalyticSVG with properties", () => {
    render(<AnalyticSVG {...imageProps} />);

    const result = screen.getByTitle("Data Analytics");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });