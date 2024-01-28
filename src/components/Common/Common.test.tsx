import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { AutomationSVG, InfrastructureAsCodeSVG } from './Common.components';

const imageBasicProps = { id: 'identifier' };
const imageProps = {
  id: 'identifier',
  className: 'bob',
  height: '5rem',
  width: '5rem',
};

describe('AutomatedSVG', () => {
  it('Blank Automation', () => {
    const { container } = render(<AutomationSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Automation with properties', () => {
    const { container } = render(<AutomationSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('InfrastructureAsCodeSVG', () => {
  it('Blank IaaC', () => {
    const { container } = render(<InfrastructureAsCodeSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('IaaC with properties', () => {
    const { container } = render(<InfrastructureAsCodeSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});
