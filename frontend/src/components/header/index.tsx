import logo from '../../../icons/durka-logo.svg'

const Header = () => {
  return (
    <div className="grid h-20 w-full grid-cols-[200px_1fr_200px] grid-rows-[1fr] place-items-center">
      <span />
      <img src={logo} alt="Дурка Run" className="h-11" />
    </div>
  )
}

export { Header }
