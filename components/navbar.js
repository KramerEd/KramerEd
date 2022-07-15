import Logo from "./logo";
import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
	HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import ThemeToggleButton from "./themeToggleButton";

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
	return (
		<NextLink href={href} passHref scroll={false}>
			<Link
				p={2}
				bg={active ? "grassTeal" : undefined}
				color={active ? "#202023" : inactiveColor}
				target={target}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff40", "#20202380")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				align="center"
				justifyContent={{ base: "space-between", md: "flex-start" }}
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={"tighter"}>
						<Logo />
					</Heading>
				</Flex>
				<HStack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flex={1}
				>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
					<LinkItem
						target="_blank"
						href="https://github.com/KramerEd"
						path={path}
						display="inline-flex"
						alignItems="center"
						style={{ gap: 4 }}
						pl={2}
					>
						<IoLogoGithub />
						Source
					</LinkItem>
					<a
						href="/cv.pdf"
						download
						display="inline-flex"
						style={{ gap: 4 }}
						pl={2}
					>
						Download CV
					</a>
				</HStack>

				<Flex gap={"1rem"} alignItems={"center"}>
					<ThemeToggleButton />
					<Box display={{ base: "block", md: "none" }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>

							<MenuList>
								<NextLink href="/" passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href="/works" passHref>
									<MenuItem as={Link}>Works</MenuItem>
								</NextLink>
								<MenuItem
									as={Link}
									href="https://github.com/KramerEd/KramerEd"
								>
									View Source
								</MenuItem>
								<MenuItem as={Link} href="/cv.pdf" download>
									Download CV
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
