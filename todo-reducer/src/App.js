import React, { useReducer } from 'react'

import { reducer, initialState } from './reducers/index'

import TodoList from './components/todo/TodoList'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <TodoList taskList={state} dispatch={dispatch}/>
    </div>
  )
}

export default App