import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMemories from '../public/images/works/memApp.png'
import thumbNFT from '../public/images/works/proNef.jpg'

import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} textAlign="center">
          WORKS
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="mem-app"
              title="Memories App"
              thumbnail={thumbMemories}
              href="https://github.com/KramerEd/mem-app"
              techs={[
                'React JS',
                'Redux',
                'NodeJS',
                'MongoDB',
                'React-router-dom',
                'Mateial UI',
                'Google Auth'
              ]}
            >
              A social media App. With most of the functionality of modern apps.
              It has been developing with MERN stack
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="proNef"
              title="Image Gallery"
              thumbnail={thumbNFT}
              href="https://github.com/KramerEd/nft-market"
              techs={[
                'React JS',
                'React-router-dom',
                'Mateial UI',
                'React Native',
                'Expo'
              ]}
            >
              A simple image gallery, where I used, React Native, tool for
              building native apps, for Android and IOS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
