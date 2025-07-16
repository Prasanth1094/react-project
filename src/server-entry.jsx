import React from "react";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import Articles from "./pages/Articles";
export function render(url, articles) {
  return (
    <StaticRouter location={url}>
      <App articles={articles} />
    </StaticRouter>
  );
}
