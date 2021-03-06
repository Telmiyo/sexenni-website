import React from 'react'
import {
  Box,
  IconButton,
  //  useBreakpointValue,
  Stack,
  // Heading,
  // Text,
  Container
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
}

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Sexenni',
      text: 'Pagina Oficial de Sexenni',
      image: '/images/team/01.jpeg'
    },
    {
      title: 'Sexenni',
      text: '',
      image: '/images/team/02.jpeg'
    },
    {
      // title: 'Sexenni',
      // text:
      //   "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: '/images/team/03.jpeg'
    },
    {
      // title: 'Sexenni',
      // text:
      //   "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: '/images/team/04.jpeg'
    }
  ]

  return (
    <Box
      position={'relative'}
      height={'100vh'}
      width={'full'}
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: '30%', md: '40px' }}
        top={{ base: '90%', md: '50%' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <IoArrowBackOutline size="40px" color="white" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: '30%', md: '40px' }}
        top={{ base: '90%', md: '50%' }}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoArrowForwardOutline size="40px" color="white" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={1}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                {/* <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="white" textAlign={"center"} textTransform="uppercase">
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" textAlign={"center"}>
                  {card.text}
                </Text> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
