import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">
        <Text>The page you're looking for was not found.</Text>
      </Heading>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="telegram">Return back to home!</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
