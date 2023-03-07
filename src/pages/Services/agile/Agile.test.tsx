import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { AgileSVG, FailFastSVG, KanbanSVG, MVPSVG, ScrumSVG } from './Agile.components';

const imageBasicProps = {id: "identifier"};
const imageProps = {id: "identifier", className: "bob", height: "5rem", width: "5rem"};

  test("Blank Agile", () => {
    render(<AgileSVG { ...imageBasicProps } />);

    const result = screen.getByTitle("Agile");
    expect(result).toBeValid();
  });

  test("Agile with properties", () => {
    render(<AgileSVG {...imageProps} />);

    const result = screen.getByTitle("Agile");
    expect(result).toBeValid();

    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank FailFastSVG", () => {
    render(<FailFastSVG { ...imageBasicProps } />);
  
    const result = screen.getByTitle("Fail Fast");
    expect(result).toBeValid();
  });
  
  test("FailFastSVG with properties", () => {
    render(<FailFastSVG {...imageProps} />);
  
    const result = screen.getByTitle("Fail Fast");
    expect(result).toBeValid();
  
    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank KanbanSVG", () => {
    render(<KanbanSVG { ...imageBasicProps } />);
  
    const result = screen.getByTitle("Kanban");
    expect(result).toBeValid();
  });
  
  test("KanbanSVG with properties", () => {
    render(<KanbanSVG {...imageProps} />);
  
    const result = screen.getByTitle("Kanban");
    expect(result).toBeValid();
  
    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank MVPSVG", () => {
    render(<MVPSVG { ...imageBasicProps } />);
  
    const result = screen.getByTitle("Minimum Viable Product");
    expect(result).toBeValid();
  });
  
  test("MVPSVG with properties", () => {
    render(<MVPSVG {...imageProps} />);
  
    const result = screen.getByTitle("Minimum Viable Product");
    expect(result).toBeValid();
  
    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });

  test("Blank ScrumSVG", () => {
    render(<ScrumSVG { ...imageBasicProps } />);
  
    const result = screen.getByTitle("Agile Scrum");
    expect(result).toBeValid();
  });
  
  test("ScrumSVG with properties", () => {
    render(<ScrumSVG {...imageProps} />);
  
    const result = screen.getByTitle("Agile Scrum");
    expect(result).toBeValid();
  
    expect(result.parentElement).toHaveClass(imageProps.className);
    expect(result.parentElement).toHaveAttribute('id', imageProps.id);
    expect(result.parentElement).toHaveAttribute('height', imageProps.height);
    expect(result.parentElement).toHaveAttribute('width', imageProps.width);
  });