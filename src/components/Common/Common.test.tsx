import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { AutomationSVG, InfrastructureAsCodeSVG } from "./Common.components";

const imageBasicProps = { id: "identifier" };
const imageProps = {
  id: "identifier",
  className: "bob",
  height: "5rem",
  width: "5rem",
};

test("Blank Automation", () => {
  render(<AutomationSVG {...imageBasicProps} />);

  const result = screen.getByTitle("Automation");
  expect(result).toBeValid();
});

test("Blank InfrastructureAsCode", () => {
  render(<InfrastructureAsCodeSVG {...imageBasicProps} />);

  const result = screen.getByTitle("Infrastructure as Code");
  expect(result).toBeValid();
});

test("Automation with properties", () => {
  render(<AutomationSVG {...imageProps} />);

  const result = screen.getByTitle("Automation");
  expect(result).toBeValid();

  expect(result.parentElement).toHaveClass(imageProps.className);
  expect(result.parentElement).toHaveAttribute("id", imageProps.id);
  expect(result.parentElement).toHaveAttribute("height", imageProps.height);
  expect(result.parentElement).toHaveAttribute("width", imageProps.width);
});

test("InfrastructureAsCode with properties", () => {
  render(<InfrastructureAsCodeSVG {...imageProps} />);

  const result = screen.getByTitle("Infrastructure as Code");
  expect(result).toBeValid();

  expect(result.parentElement).toHaveClass(imageProps.className);
  expect(result.parentElement).toHaveAttribute("id", imageProps.id);
  expect(result.parentElement).toHaveAttribute("height", imageProps.height);
  expect(result.parentElement).toHaveAttribute("width", imageProps.width);
});
