import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { DevSecOpsSVG, ContinuousDeploymentSVG, ContinuousIntegrationSVG, TestingSVG } from './DevSecOps.components';

const imageBasicProps = { id: 'identifier' };
const imageProps = { id: 'identifier', className: 'bob', height: '5rem', width: '5rem' };

describe('DevSecOpsSVG', () => {
  it('Blank Support', () => {
    const { container } = render(<DevSecOpsSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('DevSecOps with properties', () => {
    const { container } = render(<DevSecOpsSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('ContinuousDeploymentSVG', () => {
  it('Blank Continuous Deployment', () => {
    const { container } = render(<ContinuousDeploymentSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Continuous Deployment with properties', () => {
    const { container } = render(<ContinuousDeploymentSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('ContinuousIntegrationSVG', () => {
  it('Blank Continuous Integration', () => {
    const { container } = render(<ContinuousIntegrationSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Continuous Integration with properties', () => {
    const { container } = render(<ContinuousIntegrationSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('TestingSVG', () => {
  it('Blank Testing', () => {
    const { container } = render(<TestingSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Testing with properties', () => {
    const { container } = render(<TestingSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});
