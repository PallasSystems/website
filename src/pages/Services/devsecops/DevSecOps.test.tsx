import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { DevSecOpsSVG, ContinuousDeploymentSVG, ContinuousIntegrationSVG, TestingSVG } from './DevSecOps.components';

const imageBasicProps = {id: "identifier"};
const imageProps = {id: "identifier", className: "bob", height: "5rem", width: "5rem"};

  test("Blank DevSecOpsSVG", () => {
    render(<DevSecOpsSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("DevSecOps");
    expect(result).toBeValid();
  });

  test("DevSecOpsSVG with properties", () => {
    render(<DevSecOpsSVG {...imageProps} />);

    const result = screen.getByTitle("DevSecOps");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank ContinuousDeploymentSVG", () => {
    render(<ContinuousDeploymentSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Continuous Deployment");
    expect(result).toBeValid();
  });

  test("ContinuousDeploymentSVG with properties", () => {
    render(<ContinuousDeploymentSVG {...imageProps} />);

    const result = screen.getByTitle("Continuous Deployment");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank ContinuousIntegrationSVG", () => {
    render(<ContinuousIntegrationSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Continuous Integration");
    expect(result).toBeValid();
  });

  test("ContinuousIntegrationSVG with properties", () => {
    render(<ContinuousIntegrationSVG {...imageProps} />);

    const result = screen.getByTitle("Continuous Integration");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank TestingSVG", () => {
    render(<TestingSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Testing");
    expect(result).toBeValid();
  });

  test("TestingSVG with properties", () => {
    render(<TestingSVG {...imageProps} />);

    const result = screen.getByTitle("Testing");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });