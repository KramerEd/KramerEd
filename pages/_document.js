import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../libs/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link
						rel="icon"
						type="image/png"
						href="/images/favicon/favicon.png"
					/>
				</Head>
				<body>
					<ColorModeScript
						initialColorMode={theme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
