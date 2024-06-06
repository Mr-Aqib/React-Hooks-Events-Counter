import React from 'react'
import Events from './Events/Events'
import States from './States/States'
import Counter from './States/Counter'
import './Style.css'
export const App = () => {
  return (
    <div className=' d-flex flex-column align-items-center justify-content-center Mainbody gap-4'>
      <Events />
      <States />
      <Counter />
    </div>
  )
}
