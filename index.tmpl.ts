import { Helper } from "lume/core.ts";
import React from "npm:react";
import ReactDOMServer from "npm:react-dom/server";
import App from "./app/app.tsx";

const ssr = ReactDOMServer.renderToString(React.createElement(App));

interface Helpers {
  [key: string]: Helper;
}

export default function (_data: unknown, { url }: Helpers) {
  return `<!doctype html>

	<html lang="en">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		</head>
		<body>
			<section class="todoapp" id="app">${ssr}</section>

			<script type="module" src="${url("/main.js")}" bundle></script>
		</body>
	</html>
	`;
}
