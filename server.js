import express from "express";
import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { fileURLToPath } from "url";
import { render } from "./dist/server/server-entry.cjs";
import { title } from "process";
// import {StaticRouter} from 'react-router-dom';

global.window = {};
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

// Serve static assets from client build directory
app.use(express.static(path.join(__dirname, "dist", "client")));
// app.use(express.static("./dist/client", { index: false }));

const articles = [
  { id: 1, title: "Article 1", content: "Content of Article 1" },
  { id: 2, title: "Article 2", content: "Content of Article 2" },
  { id: 3, title: "Article 3", content: "Content of Article 3" },
];
app.get("/api/articles", (req, res) => {
  res.json(articles);
});
app.get("/{*any}", (req, res) => {
  fs.readFile(
    path.join(__dirname, "dist/client/index.html"),
    "utf8",
    (err, html) => {
      if (err) {
        console.error("Error reading HTML file:", err);
        return res.status(500).send("An error occurred");
      }
    const appMarkup = ReactDOMServer.renderToString(render(req.url, articles));
      const loadArticles=articles;
      return res.send(
        html.replace(
          '<div id="root"></div>',
          `<script>window.preloadedArticles=${JSON.stringify(loadArticles)}</script><div id="root">${appMarkup}</div>`
        )
      );
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
