import Head from "next/head";
import Navbar from '../navbar'
import { Container, Box } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" >
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                <title>Sexenni Web Oficial</title>
            </Head>
            <Box>
                <Navbar path={router.asPath} />
                <Container alignItems={'center'} maxW="container.xl" pt={50}>
                </Container >
                {children}
                <Footer />
            </Box>
        </Box>
    )
}
export default Main
