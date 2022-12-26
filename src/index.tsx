import './polyfill';
import 'reset-css'
import 'reflect-metadata';
import 'react-hot-loader/patch';

import React from 'react';
import { render } from 'react-dom';

import { ThemeProvider } from '@core/theme/provider';
import { CssBaseline } from '@core/theme/utils/css-baseline';

import { createTheme } from '@core/theme';
import App from './app';


const theme = createTheme();

render(
    (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <App />
      </ThemeProvider>
    ),
    document.getElementById('root')
);