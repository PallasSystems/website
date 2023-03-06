import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import {SocialMediaSection} from './SocialMediaSection.components';

test("Blank Social Media Credentials", () => {
  const result = render(<SocialMediaSection />);

  const wrapper = result.container.querySelector("#SocialMediaSectionWrapper");
  expect(wrapper).toBeValid();
  expect(wrapper).toBeEmptyDOMElement();
});
