import type { DurkaAction, DurkaState } from './interfaces'

const durkaReducer = (state: DurkaState, action: DurkaAction) => {
  switch (action.type) {
    case 'changed_schizo_position': {
      return {
        ...state,
        schizoPosition: action.schizoPosition
      }
    }
    case 'changed_medic_position': {
      return {
        ...state,
        medicPosition: action.medicPosition
      }
    }
    case 'increment_medic': {
      if (state.gameCondition !== 'winning')
        return {
          ...state,
          medicPosition: state.medicPosition + 2
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
    case 'restart_game': {
      if (state.gameCondition === 'winning')
        return {
          ...state,
          gameCondition: 'stopped',
          schizoPosition: 0,
          medicPosition: 0
        }
      return state
    }
    default: {
      throw Error('Unknown action')
    }
  }
}

export { durkaReducer }
