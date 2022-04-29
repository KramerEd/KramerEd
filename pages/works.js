import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMemories from '../public/images/works/memApp.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} textAlign="center">
          WORKS
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="mem-app"
              title="Memories App"
              thumbnail={thumbMemories}
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
