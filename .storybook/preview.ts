import type { Preview } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@pallassystems/website-core/website.css';

import 'bootstrap/dist/js/bootstrap.bundle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
