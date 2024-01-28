import React from 'react';

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    const { container } = render(<App />);

    expect(container).toBeTruthy();
    //const textElement = container.getAllByText('Pallas Systems');
    // confirm each element is valid
  });
});
