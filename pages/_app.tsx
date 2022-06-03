import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { MessageContextProvider } from '@/contexts/messagesContext'
import { extendTheme } from '@chakra-ui/react'
import { themeOptions } from 'theme'

const theme = extendTheme(themeOptions)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MessageContextProvider>
        <Component {...pageProps} />
      </MessageContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
