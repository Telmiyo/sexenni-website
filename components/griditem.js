import {
	Heading,
	Box,
	Button,
	Link,
    Image,
	Avatar,
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

				pos='relative'

			/>
			<Heading as="h3" my={4} fontSize="lg" variant="heading3">
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
           <Text>Escoltar</Text> 
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
			<Heading as="h3" mt={4} fontSize='lg' variant="heading3">
				{name}
			</Heading>
			<Text my={2} fontSize={14}>{desc}</Text>
		</Box>
        <Link href={link} target="_blank">
		<Button
			variant="outline"
            size="md"
			colorScheme="black"
			boxShadow={'0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px -5px rgb(66 153 225 / 43%)'	}
		>
            <Text>Comprar</Text>
		</Button>
        </Link>
	</Box>
)

export const ContactGridItem = ({src, name, mail}) =>
(
	<Box
	w="full"
	minHeight={useBreakpointValue({base:"50px", md:"50px"})}
	maxW="320px"
	bg="white"
	rounded='lg'
	p={6}
	textAlign='center'
	display='flex'
	flexDirection='column'
	alignItems='center'
	>
		<Box flexGrow={1}>
			<Avatar
			backgroundColor={'white'}
				size='xl'
				src={src}
				alt={name}
				mb={4}
				pos='relative'
				shadow={"xl"}

			/>
			<Heading as="h3"  color="black" fontSize='sm' fontFamily='body' variant={"heading3"}>
				{name}
			</Heading>
			<Text my={2} fontSize={14}>{mail}</Text>
		</Box>
	</Box>
)