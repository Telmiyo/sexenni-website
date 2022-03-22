import { Box, Container, Stack, Text} from '@chakra-ui/react'

const Footer = () => {
	return (
		<Box
			w="100%"
			bg="white"
			zIndex={1}
			position="relative"
			alignContent="start"

		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				alignItems="center"
				justifyContent={'center'}
			>
				<Stack align="center" direction="row">

					<Text textColor="black" fontSize= 'sm'> All Right Reserved - Sexenni &copy; {new Date().getFullYear()}</Text>

				</Stack>
			</Container>
		</Box>


	)
}

export default Footer
