import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/favicon";
import theme from "../libs/theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<Favicon />
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
