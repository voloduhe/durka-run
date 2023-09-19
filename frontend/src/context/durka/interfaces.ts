interface DurkaState {
  some_value_1: boolean
  some_value_2: string
}

type DurkaAction =
  | {
      type: 'changed_some_value_1'
      some_value_1: DurkaState['some_value_1']
    }
  | {
      type: 'changed_some_value_2'
      some_value_2: DurkaState['some_value_2']
    }

export type { DurkaAction, DurkaState }
