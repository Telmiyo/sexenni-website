import Head from "next/head";
import Navbar from '../navbar'
import { Box } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children }) => {
    return (
        <Box as="main" >
        <Head>
            <meta name= "viewport" content="width=device-width, initial-scale=1" />
            <title>Sexenni Web Oficial</title>
        </Head>
    <Navbar  />
    {children}
    <Footer />
    </Box>
    )
}
export default Main
