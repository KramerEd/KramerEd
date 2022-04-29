import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelModel from '../voxel-room'
import noSsr from '../no-ssr'
import NoSsr from '../no-ssr'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kramer Ed</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={16}>
        <NoSsr>
          <VoxelModel />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
