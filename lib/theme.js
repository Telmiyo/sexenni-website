import { extendTheme } from "@chakra-ui/react";

const components = {
    Heading: {
        variants: {
            'heading1': {
 
            },
            'heading2': {
                color: '#181716',
                fontWeight: '400',
                lineHeight: '1',
                textColor: "red",
                textTransform: "uppercase",
                textAlign: "center",
            },
            'heading3': {
                color: 'black',
                fontWeight: '600',
                textTransform: "uppercase",
                textAlign: "center",
                fontFamily: "heading"
            }
        }
    },
    Text: {
        variants: {
            'navbar':{
                color: "white",
                textAlign: "center",
                fontWeight: "600",
                lineHeight: '1',
                letterSpacing: "1px"  
            },
            'navbarMenu':{
                color: "black",
                textAlign: "center",
                fontWeight: "600",
                lineHeight: '1',
                letterSpacing: "1px"  
            },

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
        },
        html:{
            scrollBehavior: "smooth"
        }
    }
}

const fonts = {
    heading: 'Poppins, sans-serif',
    body: 'Lato, sans-serif'
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
