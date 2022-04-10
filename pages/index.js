import {
  Image,
  Heading,
  Link,
  Button,
  Icon,
  Flex,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react"
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube

} from 'react-icons/io5'
import { DiscGridItem, ProductGridItem } from "../components/layouts/griditem"

const Page = () => {
  return (
    <Layout>
      <Flex
        flexFlow={'column nowrap'}
        flexAlign={'center'}
        alignItems="center"
      >

        {/*HERO*/}
        <Image src={  '/images/team/4.jpg' } />
        {/*TICKET & T-SHIRT*/}
        <Heading mt={20} mb={10} as='h2' fontSize={'xl'} textColor='red'>▼ ENTRADES CONCERT BCN 24/04▼</Heading>
        <Link href='https://mutick.com/e/concert-presentacio-sexenni' target="_blank">
          <Button
            w={300}
            variant="outline"
            colorScheme='dark'
            boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px -5px rgb(66 153 225 / 43%)'}
          >
            Aquí
          </Button>
        </Link>

        <Heading mt={20} mb={10} as='h2' fontSize={'xl'} textColor='red'>🚀 Noves Samarretes Disponibles 🚀</Heading>
        <SimpleGrid  columns={[1,1,2]} spacing={5} mx={5} maxW= {useBreakpointValue({md:'50%',base:'100%'})}>
          <ProductGridItem 
          src={'/images/contents/t-shirt-sexenni.jpeg'} 
          name={'Retrats - Negre'} 
          desc="Per Ara estan disponible als concerts." 
          link='https://mutick.com/e/concert-presentacio-sexenni'/>
          <ProductGridItem 
          src={'/images/songs/retrats-portada.jpeg'} 
          name={'Retrats - CD'} 
          desc= 'Disc físic de Retrats'
          link='https://www.delirics.cat/es/producte/sexenni-retrats-es/' />
        </SimpleGrid>

        {/*DISCOGRAPHY*/}
        <Heading mt={20} as='h2' mb={10} fontSize={'xl'} textColor='red'>DISCOGRAFIA</Heading>
        <SimpleGrid
          direction="row"
          gap={15}
          align='center'
          mx={useBreakpointValue({md:'20px',base:'0px'})}
          columns={[1,1,3]}

        >
            <DiscGridItem src={'/images/songs/retrats-portada.jpeg'} name={'Retrats - Nou Disc'} link='https://open.spotify.com/album/76f31PpIcNFil6tmydPyFZ?si=Hp2ThZMtRBmHiokLCBLJYg' />
            <DiscGridItem src={'/images/songs/sexenni-de-lao-portada.jpeg'} name={'De Lao - Retrats'} link='https://open.spotify.com/track/0TxI8urtmxp3i6mp4noOa0?si=e1632099d1a24899' />
            <DiscGridItem src={'/images/songs/sexenni-la-canco-dels-strokes-portada.png'} name={'La Cançó Dels Strokes - Retrats'} link='https://open.spotify.com/track/5qIMctLz6l24wBwwnDPB0O?si=9b2eb1b3a7f34e2d' />
            <DiscGridItem src={'/images/songs/sexenni-el-puma-portada.png'} name={'El Puma - Single'} link='https://open.spotify.com/album/57OjOMxljBzzop1lBUpVFQ?si=zBHIZ4iZQ6aTVyfBghzDIA' />
            <DiscGridItem src={'/images/songs/no-ho-sabia-portada.jpeg'} name={'No Ho Sabia - Single'} link='https://open.spotify.com/album/4t9XNHO9klYSOLxR3duOjP?si=kNCaZ0vuQy2sq803UknnHQ' />
        </SimpleGrid>
        {/*Social Links*/}
        <Heading
          textColor={'red'}
          fontSize={'4xl'}
          fontWeight='extrabold'
          display="flex"
          mt={20}

          flexGrow={2}
        >
          Xarxes Socials
        </Heading>
        <SimpleGrid columns={3}>
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

        </SimpleGrid>

      </Flex>
    </Layout>
  )
}

export default Page
