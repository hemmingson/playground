import React from 'react'

import {
  Typography,
  createTheme,
  ThemeProvider,
  styled as styledMui,
} from '@mui/material'
import styled from 'styled-components'
import 'tailwindcss/tailwind.css'

const Rapper = styled.section`
  height: 100vh;
  padding: 2em;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
`

declare module '@mui/material/styles' {
  interface Theme {
    text: {
      color: string
    }
  }

  interface ThemeOptions {
    text?: {
      color?: string
    }
  }
}

const theme = createTheme({
  text: {
    color: '#3b185f',
  },
})

const Text = styledMui(Typography)(({ theme }) => ({
  color: theme.text.color,
}))

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Rapper>
        <Text variant="h2" align="right">
          Hello React@18
        </Text>
      </Rapper>
    </ThemeProvider>
  )
}

export default App
