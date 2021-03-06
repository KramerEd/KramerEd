import {
	Container,
	Box,
	Heading,
	chakra,
	useColorModeValue,
	Button,
} from "@chakra-ui/react";
import profile from "../public/images/profile.JPG";
import Section from "../components/section";
import Image from "next/image";
import Paragraph from "../components/paragraph";
import Link from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import { BioSection, BioYear } from "../components/bio";

const ProfileImage = chakra(Image, {
	shouldForwardProp: (prop) =>
		["width", "height", "src", "alt", "quality"].includes(prop),
});

const Page = () => {
	return (
		<Layout>
			<Container>
				<Box
					borderRadius="lg"
					bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
					p={3}
					align="center"
					mb={6}
					mt={3}
				>
					Hello, I'm a Front-end developer 😉
				</Box>
				<Box display={{ md: "flex" }}>
					<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Kramer Ed
						</Heading>
						<p>Programmer, teacher, constant learner</p>
					</Box>
					<Box
						flexShrink={0}
						mt={{ base: 4, md: 0 }}
						ml={{ md: 6 }}
						textAlign="center"
					>
						<Box
							borderColor="whiteAlpha.800"
							borderWidth={2}
							borderStyle="solid"
							w="100px"
							h="100px"
							display="inline-block"
							borderRadius="full"
							overflow="hidden"
						>
							<a
								href="https://www.linkedin.com/in/kramered/"
								target="_blank"
							>
								<ProfileImage
									src={profile}
									alt="Profile image"
									borderRadius="full"
									height="100%"
									width="100%"
									objectFit="cover"
									layout="fill"
									quality="100"
									unoptimized
									cursor={"pointer"}
								/>
							</a>
						</Box>
					</Box>
				</Box>
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Work
					</Heading>
					<Paragraph>
						I'm a highly motivated specialist, who always tries to
						find better solutions to design Apps. I extreme
						programming lover, which means I have a strong desire to
						learn and exchange my experiences. Currently, I'm
						developing my hard and soft skills, especially
						storytelling, and I practice it with children. I deeply
						believe, that if I can describe complex concepts to
						children, I can tell it even to somebody with
						experience.
					</Paragraph>
					<Box textAlign="center" my={4}>
						<Link href="/works">
							<Button
								rightIcon={<ChevronRightIcon />}
								colorScheme="teal"
							>
								My Portfolio
							</Button>
						</Link>
					</Box>
				</Section>
				<Section delay={0.2}>
					<Heading as="h3" variant="section-title">
						Bio
					</Heading>
					<BioSection>
						<BioYear>1999:</BioYear>
						Born in Odesa, Ukraine
					</BioSection>
					<BioSection>
						<BioYear>2017 - 2018:</BioYear>
						Worked as <strong>logistic manager</strong>, prepared
						primary documents, negotiating with potential customers,
						with sea captains, and made agreements with state
						enterprises.
					</BioSection>
					<BioSection>
						<BioYear>2018 - 2021:</BioYear>
						Worked as an <strong>accountant</strong>, dealt with
						documents, salary, tax departments, contracts, banks,
						etc.
					</BioSection>
					<BioSection>
						<BioYear>2018 - 2021:</BioYear>
						Worked as a rafting and{" "}
						<strong>climber instructor.</strong> Lead safe and fun
						trips on rafts drove a bus and made a cozy camp. Belayed
						people on rocks.
					</BioSection>
					<BioSection>
						<BioYear>2020:</BioYear>
						Graduated from ONAFT and got a bachelor's degree in
						commodity science.
					</BioSection>
					<BioSection>
						<BioYear>2020:</BioYear>
						Started to learn IT
					</BioSection>
					<BioSection>
						<BioYear>2021-present:</BioYear>
						Work as a children's{" "}
						<strong>programming teacher</strong>, leading lessons
						about popular programming languages such as Python,
						JavaScript, HTML, and CSS, also covering Figma,
						Photoshop, and Bootstrap. Take a part in developing new
						lessons or improving existing ones. Also lead webinars
						on a large auditory, about Python.
					</BioSection>
					<BioSection>
						<BioYear>2022-present:</BioYear>
						Work as a<strong>React developer</strong>develop complex
						apps with modern technologies. Grow my technical skills
						in general, also have experience with Mobile
						development.
					</BioSection>
					<Heading as="h3" variant="section-title">
						Hobbies
					</Heading>
					<Paragraph>
						Fitness, nutrition, psychology, hanging out with
						friends, books, films, running, driving, geeking.
					</Paragraph>
					<Paragraph>Nothing special :)</Paragraph>
				</Section>
			</Container>
		</Layout>
	);
};

export default Page;
