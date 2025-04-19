import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Saga from './pages/Saga'
import Reader from './pages/Reader'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saga/:storyId" element={<Saga />} />
      <Route path="/saga/:storyId/parte/:partId" element={<Reader />} />
    </Routes>
  )
}
