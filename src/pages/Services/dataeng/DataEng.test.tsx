import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { DataEngSVG } from './DataEng.components';

const imageBasicProps = { id: 'basic_id' };
const imageProps = { id: 'identifier', className: 'bob', height: '5rem', width: '5rem' };

describe('DataEngSVG', () => {
  it('Blank DataEngSVG', () => {
    const { container } = render(<DataEngSVG {...imageBasicProps} />);
    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('DataEngSVG with properties', () => {
    const { container } = render(<DataEngSVG {...imageProps} />);
    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});
