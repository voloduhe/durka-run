import { Header } from './header'
import { Layout } from './layout'

const App = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return (
    <div className="mx-auto w-[540px]">
      <Header />
      <Layout />
    </div>
  )
}

export { App }
