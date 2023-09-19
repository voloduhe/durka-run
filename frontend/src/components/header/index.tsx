import logo from '../../../icons/durka-logo.svg'

const Header = () => {
  return (
    <div className="grid h-14 w-full grid-cols-[140px_1fr_140px] grid-rows-[1fr] place-items-center">
      <span />
      <img src={logo} alt="Дурка Run" className="h-11" />
    </div>
  )
}

export { Header }
