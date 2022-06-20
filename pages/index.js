import {
  VStack,
  Stack,
  Heading,
  Link,
  Button,
  Icon,
  Flex,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react"
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoYoutube

} from 'react-icons/io5'
import { ContactGridItem, DiscGridItem, ProductGridItem } from "../components/griditem"

import { ArrowDownIcon } from "@chakra-ui/icons"

import Section from "../components/section"


const Page = () => {
  return (
    <Section>
    <Flex
      flexFlow={'column nowrap'}
      flexAlign={'center'}
      alignItems="center"
    >

      {/*HERO*/}
      {/* <Carousel /> */}
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'/images/team/4.jpg'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        flexDirection="column"
        alignItems={"center"}
        flexAlign={"center"}
        justifyContent="space-around"
        justifyItems={"[ top | bottom ]"}
        pt={400}
      >


        <Link href="#shop" >
        <Icon w={20} h={28} align="bottom" color="white" as={ArrowDownIcon} ></Icon>
        </Link>

      </Flex>
<Section delay={0.1} bgGradient={'linear(to-r, blackAlpha.600, transparent)'}></Section>
      <Heading mt={20} mb={10} as='h2' textAlign='center' textTransform='uppercase' fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })} textColor='red'>🚀 Noves Samarretes Disponibles 🚀</Heading>
      <SimpleGrid
      id="shop"
        direction="row"
        gap={15}
        align='center'
        mx={useBreakpointValue({ md: '20px', base: '0px' })}
        columns={[1, 1, 3]}
      >
        <ProductGridItem
          src={'/images/contents/t-shirt-sexenni.jpeg'}
          name={'Retrats - Negre'}
          desc="Per Ara estan disponible als concerts."
          link='https://mutick.com/e/concert-presentacio-sexenni' />
        <ProductGridItem
          src={'/images/contents/t-shirt-puma.jpeg'}
          name={'El Puma'}
          desc="Per Ara estan disponible als concerts."
          link='https://mutick.com/e/concert-presentacio-sexenni' />
        <ProductGridItem
          src={'/images/contents/t-shirt-lleida-town-white.jpeg'}
          name={'Lleida Town - Blanc'}
          desc="Per Ara estan disponible als concerts."
          link='https://mutick.com/e/concert-presentacio-sexenni' />
        <ProductGridItem
          src={'/images/contents/t-shirt-lleida-town-black.jpeg'}
          name={'Lleida Town - Blanc'}
          desc="Per Ara estan disponible als concerts."
          link='https://mutick.com/e/concert-presentacio-sexenni' />
        <ProductGridItem
          src={'/images/songs/retrats-portada.jpeg'}
          name={'Retrats - CD'}
          desc='Disc físic de Retrats'
          link='https://www.delirics.cat/es/producte/sexenni-retrats-es/' />
      </SimpleGrid>

      {/*DISCOGRAPHY*/}
      <Heading mt={20} as='h2' mb={10} fontSize={'25'} textColor='red'>DISCOGRAFIA</Heading>
      <SimpleGrid
        direction="row"
        gap={15}
        align='center'
        mx={useBreakpointValue({ md: '20px', base: '0px' })}
        columns={[1, 1, 3]}

      >
        <DiscGridItem src={'/images/songs/retrats-portada.jpeg'} name={'Retrats - Nou Disc'} link='https://open.spotify.com/album/76f31PpIcNFil6tmydPyFZ?si=Hp2ThZMtRBmHiokLCBLJYg' />
        <DiscGridItem src={'/images/songs/sexenni-de-lao-portada.jpeg'} name={'De Lao - Retrats'} link='https://open.spotify.com/track/0TxI8urtmxp3i6mp4noOa0?si=e1632099d1a24899' />
        <DiscGridItem src={'/images/songs/sexenni-la-canco-dels-strokes-portada.png'} name={'La Cançó Dels Strokes - Retrats'} link='https://open.spotify.com/track/5qIMctLz6l24wBwwnDPB0O?si=9b2eb1b3a7f34e2d' />
        <DiscGridItem src={'/images/songs/sexenni-tengo-portada.jpeg'} name={'Tengo- Retrats'} link='https://open.spotify.com/track/5t1pfLpWXEpDJCmmejlMQB?si=d37635a5a6a146b4' />
        <DiscGridItem src={'/images/songs/sexenni-el-puma-portada.png'} name={'El Puma - Single'} link='https://open.spotify.com/album/57OjOMxljBzzop1lBUpVFQ?si=zBHIZ4iZQ6aTVyfBghzDIA' />
        <DiscGridItem src={'/images/songs/no-ho-sabia-portada.jpeg'} name={'No Ho Sabia - Single'} link='https://open.spotify.com/album/4t9XNHO9klYSOLxR3duOjP?si=kNCaZ0vuQy2sq803UknnHQ' />
      </SimpleGrid>

      {/*Social Links*/}
      <Heading
        textColor={'red'}
        fontSize={'25'}
        display="flex"
        mt={20}
        mb={10}
        flexGrow={2}
        textAlign='center'
      >
        XARXES SOCIALS
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
      {/*CONTACT*/}
      <Heading textAlign='center' textTransform='uppercase' fontSize={25} color="red" my={10} as='h2'>contacte</Heading>
      <SimpleGrid columns={[3, 3, 3]} spacing={5} align='center' mb={10}>
        <ContactGridItem src='/images/contents/logo-delirics.png' name='Discogràfica' mail='albert@delirics.cat' />
        <ContactGridItem src='/images/contents/suricat-logo.png' name='Management' mail='carles@suricatmusic.cat' />
        <ContactGridItem src='/images/logo-rojo-grande.png' name='Grup' mail='info@sexenni.lol' />
      </SimpleGrid>
    </Flex>
    </Section>
  )
}

export default Page
