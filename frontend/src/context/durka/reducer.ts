import type { DurkaAction, DurkaState } from './interfaces'

const durkaReducer: React.Reducer<DurkaState, DurkaAction> = (
  state: DurkaState,
  action: DurkaAction
) => {
  switch (action.type) {
    case 'increment_medic': {
      if (state.gameCondition !== 'winning')
        return {
          ...state,
          medicPosition: state.medicPosition + 2
        }
      return state
    }
    case 'restart_game': {
      if (state.gameCondition === 'winning')
        return {
          gameCondition: 'stopped',
          schizoPosition: 0,
          medicPosition: 0
        }
      return state
    }
    case 'increment_schizo': {
      if (state.gameCondition !== 'winning')
        return {
          ...state,
          schizoPosition: state.schizoPosition + 2
        }
      return state
    }

    case 'changed_game_condition': {
      return {
        ...state,
        gameCondition: action.gameCondition
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}

export { durkaReducer }
