import {setEntries, next, vote, INITIAL_STATE} from './core'

export default function reducer(state = INITIAL_STATE, action) {
  // 根据 action 的类别调用不同的核心函数, 此即 reducer 的作用
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries)
    case 'NEXT':
      return next(state)
    case 'VOTE':
      return state.update('vote',
                          voteState => vote(voteState, action.entry))
  }
  return state
}
