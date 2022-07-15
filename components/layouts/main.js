import Head from "next/head";
import Navbar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxModel from "../vox-model";
import NoSsr from "../no-ssr";
import Favicon from "../Favicon";

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<Favicon />
				<title>Kramer Ed</title>
			</Head>
			<Navbar path={router.asPath} />
			<Container maxW="container.md" pt={16}>
				<NoSsr>
					<VoxModel />
				</NoSsr>
				{children}
			</Container>
		</Box>
	);
};

export default Main;
