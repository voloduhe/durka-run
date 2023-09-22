type GameCondition = 'stopped' | 'started' | 'winning'

interface DurkaState {
  schizoPosition: number
  medicPosition: number
  gameCondition: GameCondition
}

type DurkaAction =
  | {
      type: 'increment_medic'
    }
  | {
      type: 'restart_game'
    }
  | {
      type: 'increment_schizo'
    }
  | {
      type: 'changed_game_condition'
      gameCondition: GameCondition
    }

export type { DurkaAction, DurkaState, GameCondition }
