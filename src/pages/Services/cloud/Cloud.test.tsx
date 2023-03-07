import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { AssessSVG, CloudSVG, SupportSVG } from './Cloud.components';

const imageBasicProps = {id: "identifier"};
const imageProps = {id: "identifier", className: "bob", height: "5rem", width: "5rem"};

  test("Blank AssessSVG", () => {
    render(<AssessSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Assess");
    expect(result).toBeValid();
  });

  test("AssessSVG with properties", () => {
    render(<AssessSVG {...imageProps} />);

    const result = screen.getByTitle("Assess");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank CloudSVG", () => {
    render(<CloudSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Cloud");
    expect(result).toBeValid();
  });

  test("CloudSVG with properties", () => {
    render(<CloudSVG {...imageProps} />);

    const result = screen.getByTitle("Cloud");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank SupportSVG", () => {
    render(<SupportSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Support");
    expect(result).toBeValid();
  });

  test("SupportSVG with properties", () => {
    render(<SupportSVG {...imageProps} />);

    const result = screen.getByTitle("Support");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });