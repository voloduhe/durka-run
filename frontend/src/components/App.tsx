import { useEffect } from 'react'

import { useDurkaDispatch } from '@/context/durka'

import { Header } from './header'
import { Layout } from './layout'

const App = () => {
  const dispatch = useDurkaDispatch()

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const onKeyUp = (keyCode: number) => {
    switch (keyCode) {
      case 82:
        dispatch({ type: 'restart_game' })
        break
      case 81:
        dispatch({ type: 'increment_medic' })
        break
      case 80:
        dispatch({ type: 'increment_schizo' })
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if (event.isComposing || event.keyCode === 229) {
        return
      }
      onKeyUp(event.keyCode)
    })
  })

  return (
    <div className="mx-auto w-[780px]">
      <Header />
      <Layout />
    </div>
  )
}

export { App }
