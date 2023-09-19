import 'index.css'

import { createRoot } from 'react-dom/client'

import { App } from '@/components/App'

import { DurkaProvider } from './context/durka'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <DurkaProvider>
    <App />
  </DurkaProvider>
)
