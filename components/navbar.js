import {
    Container,
    Box,
    Link,
    Text,
    Image
} from '@chakra-ui/react'

const Navbar = () => {
    const logoImg = `/images/Logo_rojo.png`
    return (
        <Box
            display='flex'
            alignItems='center'

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
                maxW="container.md"
                wrap="wrap"
                alignItems="center"
                justifyContent="space-around"

            >
                <Link href="#shop">
                    <Text textAlign="center" color="white" >SHOP</Text>
                </Link>
                <Link href="#shop" >
                    <Text textAlign="center" color="white" >SHOP</Text>
                </Link>
                <Image src={logoImg} w={150} alt="logo" />

                <Link href="#shop" >
                    <Text textAlign="center" color="white" >SHOP</Text>
                </Link>
                <Link href="#shop" >
                    <Text textAlign="center" color="white" >SHOP</Text>
                </Link>

            </Container>
            <Box align="right">
               
            </Box>
        </Box>
    )
}

export default Navbar
