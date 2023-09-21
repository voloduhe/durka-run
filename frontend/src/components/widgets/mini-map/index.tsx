import { useEffect } from 'react'

import { Block } from '@/components/block'
import { ProgressBar } from '@/components/shared/progress-bar'
import { useDurka, useDurkaDispatch } from '@/context/durka'

import medicSrc from '../../../../icons/medic.svg'
import schizoSrc from '../../../../icons/schizo.svg'

const MiniMap = () => {
  const { medicPosition, schizoPosition } = useDurka()
  const dispatch = useDurkaDispatch()

  useEffect(() => {
    if (medicPosition >= 100 || schizoPosition >= 100) {
      dispatch({ type: 'changed_game_condition', gameCondition: 'winning' })
    }
  }, [medicPosition, schizoPosition, dispatch])

  return (
    <Block>
      <p className="mb-4 text-base font-medium">Санитар</p>
      <ProgressBar
        progress={medicPosition}
        icon={<img src={medicSrc} alt="" />}
      />

      <p className="my-4 text-base font-medium">Шизоид</p>
      <ProgressBar
        progress={schizoPosition}
        icon={<img src={schizoSrc} alt="" />}
      />
    </Block>
  )
}

export { MiniMap }
