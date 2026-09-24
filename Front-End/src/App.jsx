import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import TaskList from "./components/tasklist/tasklist"

function App() {
  return (
    <div>
      <Header />
      <TaskList />
    </div>
    
  )
}

export default App
