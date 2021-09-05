import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom'

import App from './app'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
