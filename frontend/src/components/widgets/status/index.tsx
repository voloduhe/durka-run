import cn from 'classnames'

import { Block } from '@/components/block'
import { useDurka } from '@/context/durka'

const Status = () => {
  const { medicPosition, schizoPosition, gameCondition } = useDurka()
  const getWinningStatus = () => {
    if (medicPosition === schizoPosition) return 'Ничья'
    if (medicPosition > schizoPosition) {
      return 'Саниатр догнал шиза'
    } else {
      return 'Шиз убежал от санитара'
    }
  }
  const getStatus = () => {
    if (medicPosition === 0 && schizoPosition === 0) return 'Побежали!'
    if (medicPosition > schizoPosition) {
      return 'Саниатр вырвался вперед!'
    } else {
      return 'Шиз вырвался вперед!'
    }
  }

  return (
    <Block>
      <div className="grid h-full place-items-center">
        <p
          className={cn(
            'relative text-center text-3xl font-bold text-[#3446DE]',
            'after:animate-fade after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-full after:opacity-0 after:blur-lg after:filter after:content-[""]',
            {
              'after:bg-[rgba(72,222,52,0.5)]': gameCondition === 'winning',
              'after:bg-[rgba(52,70,222,0.5)]': gameCondition !== 'winning',
              'animate-shake': gameCondition === 'started',
              'text-[#48de34]': gameCondition === 'winning'
            }
          )}
          key={gameCondition}
        >
          {gameCondition === 'winning' ? getWinningStatus() : getStatus()}
        </p>
      </div>
    </Block>
  )
}

export { Status }
