import { extendTheme } from "@chakra-ui/react";

const components = {
    Heading: {
        variants: {
            'section-title': {
                fontSize: 50,
                fontWeight: 700,
                lineHeight: 1.8,
                textUnderlineOffset: 30,
                textDecoration: 'underline',
                textDecorationColor: 'white',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                color: 'black'
            },
            'heading1': {
                letterSpacing: '2px',
                fontWeight: 'bold',
                fontSize: '4xl',
                textShadow: '1px 2px 3px rgb(0 0 0 / 30%)',
                color: 'black'
            },
            'heading2': {
                color: '#181716',
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '1',

            },
            'heading3': {
                color: 'black'
            }
        }
    },
    Link: {
        baseStyle: {
            color: 'black',
            textUnderlineOffset: 3
        }
    }
}

const styles = {
    global: {
        body: {
            bg: 'white',
            lineHeight: 'base',
            textColor: "#444"
        }
    }
}

const fonts = {
    heading: 'Open Sans, sans-serif',
    body: 'Raleway, sans-serif'
}

const colors = {

}

const config = {
    initialColorMode: 'white',
    useSystemColorMode: false
}

const theme = extendTheme({
    config,
    components,
    styles,
    fonts,
    colors
})

export default theme
