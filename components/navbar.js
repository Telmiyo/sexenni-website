import Logo from './logo'
import {
    Container,
    Box,
} from '@chakra-ui/react'

import LogoBox from "../components/logo"

const Navbar = props => {

    return (
        <Box
            as="nav"
            w="100%"
            bg="whiteAlpha.200"
            zIndex={1}
            position="fixed"
            alignItems="end"
            alignContent="center"
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                alignItems="center"
                justifyContent={'center'}
                my={2}
            >
                <LogoBox>
                    <Logo />

                </LogoBox>
            </Container>
        </Box>
    )
}

export default Navbar
