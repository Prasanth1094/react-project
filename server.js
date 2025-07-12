import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { fileURLToPath } from "url";
import { render } from "./dist/server/server-entry.cjs";
// import {StaticRouter} from 'react-router-dom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static assets from client build directory
 app.use(express.static("./dist/client", { index: false }));

app.get("/{*any}", (req, res) => {
  fs.readFile(
    path.join(__dirname, "dist/client/index.html"),
    "utf8",
    (err, html) => {
      if (err) {
        console.error("Error reading HTML file:", err);
        return res.status(500).send("An error occurred");
      }
      const appMarkup = ReactDOMServer.renderToString(render(req.url));
      //   const appMarkup = ReactDOMServer.renderToString(
      //     <StaticRouter location={url}>
      //       <App />
      //     </StaticRouter>
      //   );
      return res.send(
        html.replace(
          '<div id="root"></div>',
          `<div id="root">${appMarkup}</div>`
        )
      );
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
