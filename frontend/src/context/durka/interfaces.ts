type GameCondition = 'stopped' | 'started' | 'winning'

interface DurkaState {
  schizoPosition: number
  medicPosition: number
  gameCondition: GameCondition
}

type DurkaAction =
  | {
      type: 'changed_schizo_position'
      schizoPosition: DurkaState['schizoPosition']
    }
  | {
      type: 'changed_medic_position'
      medicPosition: DurkaState['medicPosition']
    }
  | {
      type: 'increment_medic'
    }
  | {
      type: 'increment_schizo'
    }
  | {
      type: 'changed_game_condition'
      gameCondition: DurkaState['gameCondition']
    }
  | {
      type: 'restart_game'
    }

export type { DurkaAction, DurkaState }
