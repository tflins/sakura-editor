import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Editor from './pages/editor'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
