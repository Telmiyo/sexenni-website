import {
  Box,
  Heading,
  Link,
  Button,
  Icon,
  Flex,
  HStack,
  useBreakpointValue,
  GridItem,
  Grid,
} from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube

} from 'react-icons/io5'
import { DiscGridItem } from "../components/layouts/griditem"

const Page = () => {
  return (
    <Layout>
      <Flex
        flexFlow={'column nowrap'}
        flexAlign={'center'}
        alignItems="center"
      >

        {/*HERO*/}
        <Box
          w={'full'}
          h={'100vh'}
          mb={8}
          backgroundImage={
            '/images/team/4.jpg'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          backgroundColor="blackAlpha.300"
          flexBasis={'auto'}
          display="flex"
          flexGrow={5}
          _hover={{
            opacity: '50%'
          }}>
        </Box>
        {/*Social Links*/}
        <Heading
          textColor={'red'}
          fontSize= {'4xl'}
          fontWeight='extrabold'
          display="flex"
          my ={20}

          flexGrow={2}
        >
          Xarxes Socials
        </Heading>
        <HStack alignItems={'center'} flexGrow={1}>
          {/*Instagram*/}
          <Link href="https://www.instagram.com/sexenni/" target="_blank">
            <Button _hover={{ bgGradient: 'linear(to-bl, pink.200 0%, #e3e3e3 95%)' }} variant="ghost" colorScheme={'black'} leftIcon={<Icon as={IoLogoInstagram} />}>
              @Sexenni
            </Button>
          </Link>
          {/*Youtube*/}
          <Link href="https://www.youtube.com/channel/UCGVJBGRTkU_qagiq1mkc2pg" target="_blank">
            <Button _hover={{ bgGradient: 'linear(to-bl, red.200 0%, #e3e3e3 95%)' }} variant="ghost" colorScheme={'black'} leftIcon={<Icon as={IoLogoYoutube} />}>
              Sexenni
            </Button>
          </Link>
          {/*Twitter*/}
          <Link href="https://twitter.com/Sexenni1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
            <Button _hover={{ bgGradient: 'linear(to-bl, blue.200 0%, #e3e3e3 95%)' }} variant="ghost" colorScheme={'black'} leftIcon={<Icon as={IoLogoTwitter} />}>
              @Sexenni
            </Button>
          </Link>

        </HStack>
        <Grid
          direction="row"
          gap={20}
          my={20}
        >
          <DiscGridItem src={'/images/songs/retrats-portada.jpeg'} name={'Retrats - Nou Disc'} link='https://open.spotify.com/album/76f31PpIcNFil6tmydPyFZ?si=Hp2ThZMtRBmHiokLCBLJYg' />
          <DiscGridItem src={'/images/songs/no-ho-sabia-portada.jpeg'} name={'No Ho Sabia'} link='https://open.spotify.com/album/4t9XNHO9klYSOLxR3duOjP?si=kNCaZ0vuQy2sq803UknnHQ' />
          <DiscGridItem src={'/images/songs/sexenni-el-puma-portada.png'} name={'El Puma'} link='https://open.spotify.com/album/57OjOMxljBzzop1lBUpVFQ?si=zBHIZ4iZQ6aTVyfBghzDIA' />
          <DiscGridItem src={'/images/songs/sexenni-mama-portada.jpeg'} name={'Mama'} link='https://open.spotify.com/album/57OjOMxljBzzop1lBUpVFQ?si=zBHIZ4iZQ6aTVyfBghzDIA' />

        </Grid>

      </Flex>
    </Layout>
  )
}

export default Page
