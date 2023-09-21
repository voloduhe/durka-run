import type { Dispatch, ReactNode } from 'react'
import { createContext, useContext, useMemo, useReducer } from 'react'

import type { DurkaAction, DurkaState } from './interfaces'
import { durkaReducer } from './reducer'

const initialDurka: DurkaState = {
  schizoPosition: 0,
  medicPosition: 0,
  gameCondition: 'stopped'
}

const DurkaContext = createContext<DurkaState>(initialDurka)
const DurkaDispatchContext = createContext<Dispatch<DurkaAction>>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  (() => {}) as Dispatch<DurkaAction>
)

const DurkaProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(durkaReducer, initialDurka)

  const contextValue = useMemo(() => state, [state])

  return (
    <DurkaContext.Provider value={contextValue}>
      <DurkaDispatchContext.Provider value={dispatch}>
        {children}
      </DurkaDispatchContext.Provider>
    </DurkaContext.Provider>
  )
}

const useDurka = () => useContext(DurkaContext)
const useDurkaDispatch = () => useContext(DurkaDispatchContext)

export { DurkaProvider, useDurka, useDurkaDispatch }
