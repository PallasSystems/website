import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { AssessSVG, CloudSVG, SupportSVG } from './Cloud.components';

const imageBasicProps = { id: 'identifier' };
const imageProps = { id: 'identifier', className: 'bob', height: '5rem', width: '5rem' };

describe('AssessSVG', () => {
  it('Blank Assess', () => {
    const { container } = render(<AssessSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Assess with properties', () => {
    const { container } = render(<AssessSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('CloudSVG', () => {
  it('Blank CloudSVG', () => {
    const { container } = render(<CloudSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Cloud with properties', () => {
    const { container } = render(<CloudSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('SupportSVG', () => {
  it('Blank Support', () => {
    const { container } = render(<SupportSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Support with properties', () => {
    const { container } = render(<SupportSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});
