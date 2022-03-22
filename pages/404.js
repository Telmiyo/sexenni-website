import NextLink from 'next/link'
import {
	Box,
	Heading,
	Text,
	Container,
	Button
} from '@chakra-ui/react'

const NotFound = () => {
	return (
		<Container mt={100} maxW="container.xl">
			<Heading textAlign="center" textColor="blac" as="h1"> ¿Te has perdido?</Heading>
			<Text textAlign={'center'} textDecoration='underline' textColor='black' as="h2">La página que buscas no se encuentra disponible</Text>

			<Box my={12} align="center">
				<NextLink href="/">
					<Button colorScheme="teal">Volver al Inicio</Button>
				</NextLink>
			</Box>

		</Container>
	)
}

export default NotFound
