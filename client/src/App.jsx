import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import {TasksPage} from './pages/TasksPage'
import {TaskFormPage} from './pages/TaskFormPage'
import {Navigation} from './components/Navigation'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/new" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
