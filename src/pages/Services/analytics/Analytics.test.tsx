import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { AnalyticSVG } from './Analytics.components';

const imageBasicProps = { id: 'identifier' };
const imageProps = { id: 'identifier', className: 'bob', height: '5rem', width: '5rem' };

describe('AnalyticSVG', () => {
  it('Blank Analytic', () => {
    const { container } = render(<AnalyticSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Analytic with properties', () => {
    const { container } = render(<AnalyticSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});
