import {
  Heading,
  Link,
  Button,
  Icon,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5'
import {
  ContactGridItem,
  DiscGridItem,
  ProductGridItem
} from '../components/griditem'

import Carousel from '../components/carousel'

const Page = () => {
  return (
      <Flex flexFlow={'column nowrap'} alignItems="center">
      {/*HERO*/}
      <Carousel />
        <Heading
          mt={20}
          mb={10}
          as="h2"
          // fontSize={useBreakpointValue({ base: 'lg', md: '4xl'})}
          variant={"heading2"}
        >
          🚀 Noves Samarretes Disponibles 🚀
        </Heading>
        <SimpleGrid
          id="merchan"
          direction="row"
          gap={15}
          align="center"
          mx={{ md: '20px', base: '1px' }}
          columns={[1, 1, 3]}
        >
          <ProductGridItem
            src={'/images/contents/t-shirt-sexenni.jpeg'}
            name={'Retrats - Negre'}
            desc="Només disponible als concerts"
            link="https://mutick.com/e/concert-presentacio-sexenni"
          />
          <ProductGridItem
            src={'/images/contents/t-shirt-puma.jpeg'}
            name={'El Puma'}
            desc="Només disponible als concerts"
            link="https://mutick.com/e/concert-presentacio-sexenni"
          />
          <ProductGridItem
            src={'/images/contents/t-shirt-lleida-town-white.jpeg'}
            name={'Lleida Town - Blanc'}
            desc="Només disponible als concerts"
            link="https://mutick.com/e/concert-presentacio-sexenni"
          />
          <ProductGridItem
            src={'/images/contents/t-shirt-lleida-town-black.jpeg'}
            name={'Lleida Town - Blanc'}
            desc="Només disponible als concerts"
            link="https://mutick.com/e/concert-presentacio-sexenni"
          />
          <ProductGridItem
            src={'/images/songs/retrats-portada.jpeg'}
            name={'Retrats - CD'}
            desc="Disc físic de Retrats"
            link="https://www.delirics.cat/es/producte/sexenni-retrats-es/"
          />
        </SimpleGrid>

        {/*DISCOGRAPHY*/}
        <Heading mt={20} as="h2" mb={10}   fontSize={{ base: 'xl', md: '4xl' }} variant="heading2">
          DISCOGRAFIA
        </Heading>
        <SimpleGrid
          id="discografia"
          direction="row"
          gap={15}
          align="center"
          mx={{ md: '20px', base: '0px' }}
          columns={[1, 1, 3]}
        >
          <DiscGridItem
            src={'/images/songs/retrats-portada.jpeg'}
            name={'Retrats - Nou Disc'}
            link="https://open.spotify.com/album/76f31PpIcNFil6tmydPyFZ?si=Hp2ThZMtRBmHiokLCBLJYg"
          />
          <DiscGridItem
            src={'/images/songs/sexenni-de-lao-portada.jpeg'}
            name={'De Lao - Retrats'}
            link="https://open.spotify.com/track/0TxI8urtmxp3i6mp4noOa0?si=e1632099d1a24899"
          />
          <DiscGridItem
            src={'/images/songs/sexenni-la-canco-dels-strokes-portada.png'}
            name={'La Cançó Dels Strokes - Retrats'}
            link="https://open.spotify.com/track/5qIMctLz6l24wBwwnDPB0O?si=9b2eb1b3a7f34e2d"
          />
          <DiscGridItem
            src={'/images/songs/sexenni-tengo-portada.jpeg'}
            name={'Tengo - Retrats'}
            link="https://open.spotify.com/track/5t1pfLpWXEpDJCmmejlMQB?si=d37635a5a6a146b4"
          />
          <DiscGridItem
            src={'/images/songs/sexenni-el-puma-portada.png'}
            name={'El Puma - Single'}
            link="https://open.spotify.com/album/57OjOMxljBzzop1lBUpVFQ?si=zBHIZ4iZQ6aTVyfBghzDIA"
          />
          <DiscGridItem
            src={'/images/songs/no-ho-sabia-portada.jpeg'}
            name={'No Ho Sabia - Single'}
            link="https://open.spotify.com/album/4t9XNHO9klYSOLxR3duOjP?si=kNCaZ0vuQy2sq803UknnHQ"
          />
        </SimpleGrid>

        {/*Social Links*/}
        <Heading
          id="xarxes-socials"
          fontSize={{ base: 'xl', md: '4xl' }}
          variant="heading2"
          display="flex"
          mt={20}
          
          flexGrow={2}
          textAlign="center"
        >
          XARXES SOCIALS
        </Heading>
        <SimpleGrid columns={3} my={10}>
          {/*Instagram*/}
          <Link href="https://www.instagram.com/sexenni/" target="_blank">
            <Button
              _hover={{ bgGradient: 'linear(to-bl, pink.200 0%, #e3e3e3 95%)' }}
              variant="ghost"
              colorScheme={'black'}
              leftIcon={<Icon as={IoLogoInstagram} />}
            >
              @Sexenni
            </Button>
          </Link>
          {/*Youtube*/}
          <Link
            href="https://www.youtube.com/channel/UCGVJBGRTkU_qagiq1mkc2pg"
            target="_blank"
          >
            <Button
              _hover={{ bgGradient: 'linear(to-bl, red.200 0%, #e3e3e3 95%)' }}
              variant="ghost"
              colorScheme={'black'}
              leftIcon={<Icon as={IoLogoYoutube} />}
            >
              Sexenni
            </Button>
          </Link>
          {/*Twitter*/}
          <Link
            href="https://twitter.com/Sexenni1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            <Button
              _hover={{ bgGradient: 'linear(to-bl, blue.200 0%, #e3e3e3 95%)' }}
              variant="ghost"
              colorScheme={'black'}
              leftIcon={<Icon as={IoLogoTwitter} />}
            >
              @Sexenni1
            </Button>
          </Link>
        </SimpleGrid>
        {/*CONTACT*/}
        <Heading
          fontSize={{ base: 'xl', md: '4xl' }}
          variant="heading2"
          mt={10}
          as="h2"
        >
          contacte
        </Heading>
        <ContactGridItem
          src="/images/contents/sexenni-logo-redondo.png"
          name="Grup"
          mail="info@sexenni.lol"
        />
        <SimpleGrid
          id="contacte"
          columns={[2, 2, 2]}
          spacing={5}
          align="center"
          
        >
        <ContactGridItem
          src="/images/contents/logo-delirics.png"
          name="Discogràfica"
          mail="albert@delirics.cat"
        />
          <ContactGridItem
            src="/images/contents/suricat-logo.png"
            name="Management"
            mail="carles@suricatmusic.cat"
          />
        </SimpleGrid>
      </Flex>
  )
}

export default Page
