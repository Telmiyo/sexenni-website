import {
  Container,
  Box,
  Link,
  Text,
  Image,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Icon
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const logoImg = `/images/Logo_rojo.png`
  return (
    <Box
      display="flex"
      alignItems="center"
      as="nav"
      w="100%"
      h={20}
      bg="blackAlpha.400"
      zIndex={1}
      position="fixed"
    >
      <Container
        display={{ base: 'none', md: 'flex' }}
       
        h="full"
        maxW="container.lg"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-around"
      >
        <Link href="#merchan">
          <Text variant="navbar">
          MERCHAN🚀
          </Text>
        </Link>
        <Link href="#discografia">
          <Text variant="navbar">
            DISCOGRAFIA
          </Text>
        </Link>
        <Image src={logoImg} w={150} alt="logo" />

        <Link href="#xarxes-socials">
          <Text variant="navbar">
            XARXES SOCIALS
          </Text>
        </Link>
        <Link href="#contacte">
          <Text variant="navbar">
            CONTACTE
          </Text>
        </Link>
      </Container>

      <Box display={{ base: 'flex', md: 'none' }} justifyContent="space-between" w="100%">
      <Icon
            visibility={"hidden"}
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />

        <Image src={logoImg} w={150} alt="logo" />

        <Menu  >
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />
          <MenuList>
            <Link href="#merchan">
              <MenuItem>
                <Text variant="navbarMenu">🚀MERCHAN🚀</Text>
              </MenuItem>
            </Link>

            <Link href="#discografia">
              <MenuItem>
                <Text variant="navbarMenu">DISCOGRAFIA</Text>
              </MenuItem>
            </Link>

            <Link href="#xarxes-socials">
              <MenuItem>
                <Text variant="navbarMenu">XARXES SOCIALS</Text>
              </MenuItem>
            </Link>

            <Link href="#contacte">
              <MenuItem>
                <Text variant="navbarMenu">CONTACTE</Text>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Navbar
