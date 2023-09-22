import { Block } from '@/components/block'
import { useDurka } from '@/context/durka'

import medicSrc from '../../../../icons/medic-shadow.svg'
import schizoSrc from '../../../../icons/schizo-shadow.svg'
import roadSrc from '../../../../images/road.png'

const Game = () => {
  const { medicPosition, schizoPosition } = useDurka()

  return (
    <Block>
      <div className="relative">
        <div className="absolute left-1/2 top-[70px] h-3 w-[600px] -translate-x-1/2">
          <img
            src={medicSrc}
            alt=""
            className="animate-jump absolute -top-6 w-9 transition-all"
            key={medicPosition}
            style={{
              left: `${medicPosition - 1}%`
            }}
          />
        </div>
        <div className="absolute left-1/2 top-[115px] h-3 w-[650px] -translate-x-1/2">
          <img
            src={schizoSrc}
            alt=""
            className="animate-jump absolute -top-8 w-9 transition-all"
            key={schizoPosition}
            style={{
              left: `${schizoPosition - 1}%`
            }}
          />
        </div>
        <img src={roadSrc} alt="road" className="h-full w-full" />
      </div>
    </Block>
  )
}

export { Game }
