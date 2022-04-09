import {
	Heading,
	Box,
	GridItem,
	Button,
	Link,
    Image
} from '@chakra-ui/react';

export const DiscGridItem = ({src, name, link }) =>
(
<GridItem>
	<Box
		w="full"
		minHeight="320px"
		maxW="320px"
		bg="white"
		boxShadow='2xl'
		rounded='lg'
		p={6}
		textAlign='center'
		display='flex'
		flexDirection='column'
		alignItems='center'
	>
		<Box flexGrow={1}>
			<Image
				size='xl'
				src={src}
				alt={name}
				mb={4}
				pos='relative'

			/>
			<Heading as="h3" color="black" fontSize='xl' fontFamily='body'>
				{name}
			</Heading>
		</Box>
		<Button
			variant="outline"
            size="md"
			colorScheme="red"
			boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px -5px rgb(66 153 225 / 43%)'	}
		>
			<Link href={link} target="_blank"></Link>Escoltar-la
		</Button>
	</Box>
    </GridItem>
)