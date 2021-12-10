import { createRoot } from 'react-dom'

import App from './App'

window.$ = document.querySelector.bind(document)

createRoot($('#app')).render(<App />)
