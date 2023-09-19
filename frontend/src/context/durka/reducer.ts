import type { DurkaAction, DurkaState } from './interfaces'

const durkaReducer = (state: DurkaState, action: DurkaAction) => {
  switch (action.type) {
    case 'changed_some_value_1': {
      return {
        ...state,
        some_value_1: action.some_value_1
      }
    }
    case 'changed_some_value_2': {
      return {
        ...state,
        some_value_2: action.some_value_2
      }
    }
    default: {
      throw Error('Unknown action')
    }
  }
}

export { durkaReducer }
