import {
  Container,
  Box,
  Heading,
  chakra,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import profile from '../public/images/profile.JPG'
import Section from '../components/section'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import Link from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop =>
    ['width', 'height', 'src', 'alt', 'quality'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          align="center"
          mb={6}
          mt={3}
        >
          Hello, I&apos;m a Front-end developer 😉
        </Box>
        <Box display={{ md: 'flex' }}>
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
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I'm highly motivated specialist, who always tries to find a better
            solutions to design an Apps. I extreme programming lover, that means
            I have strong desire to learn and exchange my experiece. Currently,
            I'm developing my hard and soft skills, especially storytelling, and I
            practice it with children. I deeply believe, if I can describe
            complex concepts to children, I can tell it even to somebody with
            experiece.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <Link href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
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
            <BioYear>1999 :</BioYear>
            Born in Odessa, Ukraine
          </BioSection>
          <BioSection>
            <BioYear>2017 - 2018 :</BioYear>
            Worked as <strong>logistic's manager</strong>, prepared primary
            documents, negotiated with potential customers, with sea captains,
            made agreements with state enterprises.
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2021 :</BioYear>
            Worked as <strong>accountant</strong>, dealed with documents,
            salary, tax departments, contracts, banks, etc.
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2021 :</BioYear>
            Worked as a <strong>rafting and climber instructor</strong>. Lead
            safe and fun trips on rafts, drove a bus, made a cozy camp. Belayed
            people on rocks.
          </BioSection>
          <BioSection>
            <BioYear>2020 :</BioYear>
            Grafuated from ONAFT, got bachelor degree in comodity science.
          </BioSection>
          <BioSection>
            <BioYear>2020 :</BioYear>
            Started to learn IT
          </BioSection>
          <BioSection>
            <BioYear>2021-present:</BioYear>
            Work as a <strong>children programming teacher</strong>, lead
            lessons about popular programming languages such as Python,
            JavaScript, HTML, CSS, also it covers Figma, Photoshop, Bootstrap.
            Take a part in developing new lessons or improve existing. Also lead
            vebinars on a large auditory, about Python.
          </BioSection>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            Fitnes, nutrition, psychology, hangout with friends, books, films,
            running, driving, I'm geek.
          </Paragraph>
          <Paragraph>Nothing special :)</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
