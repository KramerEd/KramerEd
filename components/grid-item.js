import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const gridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
export const WorkGridItem = ({
  children,
  id,
  title,
  thumbnail,
  href,
  techs = []
}) => (
  <Box w="100%" textAlign="center">
    <NextLink href={href}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>
          {children}
          <Heading as="h3" fontSize={16} textAlign="left" my={4}>
            Used Tech stack
          </Heading>
          <Text textAlign="left">
            {techs.map((tech, index) => {
              if (!tech) return
              if (techs.length - 1 === index) return `${tech}.`
              return `${tech}, `
            })}
          </Text>
        </Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-item-thumbnail { 
        border-radius: 12px;
    }
`}
  />
)
