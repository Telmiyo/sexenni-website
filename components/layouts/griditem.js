import {
	Heading,
	Box,
	Button,
	Link,
    Image,
    useBreakpointValue,
    Text,
} from '@chakra-ui/react';

export const DiscGridItem = ({src, name, link }) =>
(
	<Box
		w="full"
		minHeight={useBreakpointValue({base:"50", md:"50px"})}
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
			<Heading as="h2" my={4} color="black" fontSize='sm' fontFamily='body'>
				{name}
			</Heading>
		</Box>
        <Link href={link} target="_blank">
		<Button
			variant="outline"
            size="md"
			colorScheme="black"
			boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px -5px rgb(66 153 225 / 43%)'	}
		>
            Escoltar-la
		</Button>
        </Link>
	</Box>
)

export const ProductGridItem = ({src, name, desc, link}) =>
(
	<Box
		w="full"
		minHeight={useBreakpointValue({base:"50", md:"50px"})}
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
			<Heading as="h2" mt={4} color="black" fontSize='sm' fontFamily='body'>
				{name}
			</Heading>
			<Text my={2} fontSize={10}>{desc}</Text>
		</Box>
		<Link href={link} target="_blank">
		<Button
			variant="outline"
            size="md"
			colorScheme="black"
			boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px -5px rgb(66 153 225 / 43%)'	}
		>
            Aconsegueix-la Aquí
		</Button>
		</Link>
	</Box>
)