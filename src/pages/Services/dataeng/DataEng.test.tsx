import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { DataEngSVG } from './DataEng.components';

const imageBasicProps = {id: "identifier"};
const imageProps = {id: "identifier", className: "bob", height: "5rem", width: "5rem"};

  test("Blank DataEngSVG", () => {
    render(<DataEngSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Data Engineering");
    expect(result).toBeValid();
  });

  test("DataEngSVG with properties", () => {
    render(<DataEngSVG {...imageProps} />);

    const result = screen.getByTitle("Data Engineering");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });