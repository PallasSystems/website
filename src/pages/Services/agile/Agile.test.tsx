import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { AgileSVG, FailFastSVG, KanbanSVG, MVPSVG, ScrumSVG } from './Agile.components';

const imageBasicProps = { id: 'identifier' };
const imageProps = { id: 'identifier', className: 'bob', height: '5rem', width: '5rem' };

describe('AgileSVG', () => {
  it('Blank Agile', () => {
    const { container } = render(<AgileSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Agile with properties', () => {
    const { container } = render(<AgileSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('FailFastSVG', () => {
  it('Blank Fail Fast', () => {
    const { container } = render(<FailFastSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Fail Fast with properties', () => {
    const { container } = render(<FailFastSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('KanbanSVG', () => {
  it('Blank Kanban', () => {
    const { container } = render(<KanbanSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Kanban with properties', () => {
    const { container } = render(<KanbanSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('MVPSVG', () => {
  it('Blank MVP', () => {
    const { container } = render(<MVPSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('MVPSVG with properties', () => {
    const { container } = render(<MVPSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});

describe('ScrumSVG', () => {
  it('Blank Scrum', () => {
    const { container } = render(<ScrumSVG {...imageBasicProps} />);

    const svgElement = container.querySelector("[id='" + imageBasicProps.id + "']");
    expect(svgElement).not.toBeNull();
  });

  it('Scrum with properties', () => {
    const { container } = render(<ScrumSVG {...imageProps} />);

    const svgElement = container.querySelector("[id='" + imageProps.id + "']");
    expect(svgElement).not.toBeNull();

    expect(svgElement?.hasAttribute('height')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.height);
    expect(svgElement?.hasAttribute('width')).toBeTruthy();
    expect(svgElement?.getAttribute('height')).toEqual(imageProps.width);
  });
});
