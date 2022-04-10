import { Box, Container, Stack, Text, Link} from '@chakra-ui/react'

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
				<Stack align="center" direction="column">
		
					<Text textColor="black" fontSize= 'sm'> All Right Reserved - Sexenni &copy; {new Date().getFullYear()}</Text>
					<Text textColor="black" fontSize= '10'> Design By Telmo Beroiz - <Link textDecoration='underline' href="https://telmiyo-homepage.vercel.app/" target="_blank">telmoberoiz.xyz</Link></Text>
				</Stack>
			</Container>
		</Box>


	)
}

export default Footer
