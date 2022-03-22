import {
  Box,
  Heading,
  Link,
  Button,
  Icon,
  Flex,
  AspectRatio,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube

} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Section delay={0.3}>
        <Box
          w={'full'}
          h={'100vh'}
          backgroundImage={
            '/images/team/4.jpg'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          flexAlign="center"
          justify="center"
        >
        </Box>
      </Section>

    
        <Flex
          w={'full'}
          //h={'100vh'}
          flexAlign="center"
          justify="center"
         // mb={100}
        >
          <VStack
            spacing={12}
            w={'full'}
            h={'100vh'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 0 })}
            justifyContent={'flex-end'}
          >
            <AspectRatio
              ratio={1}
              w='100%'
              h='100%'
              align="top"
            >
              <iframe
                title='La Cançó dels Strokes'
                src='https://www.youtube.com/embed/5PKMIWEh50Y'
                allowFullScreen
              />
            </AspectRatio>
            <Heading

              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize='4xl'
              fontWeight='extrabold'
            >
              Redes Sociales
            </Heading>
            <HStack direction={'row'}>
              <Link href="https://www.instagram.com/sexenni/" target="_blank">
                <Button _hover={{ bgGradient: 'linear(to-bl, pink.200 0%, #e3e3e3 95%)' }} variant="ghost" colorScheme={'black'} leftIcon={<Icon as={IoLogoInstagram} />}>
                  @Sexenni
                </Button>
              </Link>
              <Link href="https://www.youtube.com/channel/UCGVJBGRTkU_qagiq1mkc2pg" target="_blank">
                <Button _hover={{ bgGradient: 'linear(to-bl, red.200 0%, #e3e3e3 95%)' }} variant="ghost" colorScheme={'black'} leftIcon={<Icon as={IoLogoYoutube} />}>
                  Sexenni
                </Button>
              </Link>
              <Link href="https://www.youtube.com/channel/UCGVJBGRTkU_qagiq1mkc2pg" target="_blank">
                <Button _hover={{ bgGradient: 'linear(to-bl, blue.200 55%, #e3e3e3 35%)' }}variant="ghost" colorScheme={'black'} leftIcon={<Icon as={IoLogoTwitter} />}>
                  @Sexenni
                </Button>
              </Link>

            </HStack>
          </VStack>

        </Flex>

    </Layout>
  )
}

export default Page
