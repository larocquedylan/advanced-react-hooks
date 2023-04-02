// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(state, newState) {
//   return newState
// }

// function countReducer(count, step) {
//   return count + step
// }
const countReducer = (state, action) => ({...state, ...action}


function Counter({initialCount = 0, step = 1}) {
  // const [count, setCount] = React.useReducer(countReducer, initialCount)
  // const [count, chnageCount] = React.useReducer(countReducer, initialCount)
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const chnageCount = (step) => setState({count: count + step})

  // const increment = () => setCount(count + step)

  // const increment = () => chnageCount(step)

const increment = () => setState({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
