import { Controls } from '../widgets/controls'
import { Game } from '../widgets/game'
import { MiniMap } from '../widgets/mini-map'
import { Status } from '../widgets/status'

const Layout = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid w-full grid-cols-[200px_1fr_200px] grid-rows-[150px] gap-2">
        <MiniMap />
        <Controls />
        <Status />
      </div>
      <div className="h-56 w-full">
        <Game />
      </div>
    </div>
  )
}

export { Layout }
