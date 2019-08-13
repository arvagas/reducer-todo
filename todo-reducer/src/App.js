import React, { useReducer } from 'react'

import { reducer, initialState } from './reducers/index'

import TodoList from './components/todo/TodoList'
import FormikForm from './components/FormikForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {/* {console.log(state)} */}
      <FormikForm dispatch={dispatch} />
      <TodoList taskList={state} dispatch={dispatch}/>
    </div>
  )
}

export default App