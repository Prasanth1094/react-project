import React from 'react';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function render(url) {
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}