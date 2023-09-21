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
      <div className="animate-shake grid h-full place-items-center">
        <p className="text-center text-3xl font-bold text-[#3446DE]">
          {gameCondition === 'winning' ? getWinningStatus() : getStatus()}
        </p>
      </div>
    </Block>
  )
}

export { Status }
