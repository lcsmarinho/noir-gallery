// src/pages/Home.tsx
import React, { useState } from 'react'
import StoryCard from '../components/StoryCard'
import './Home.scss'

interface Story {
  id: string
  title: string
}

const stories: Story[] = [
  { id: 'dark-alleys', title: 'Dark Alleys' },
  { id: 'fateful-night', title: 'Fateful Night' },
  { id: 'smoke-and-mirrors', title: 'Smoke & Mirrors' },
  // …outras sagas
]

const Home: React.FC = () => {
  const [search, setSearch] = useState('')
  const filtered = stories.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="home">
      {/* HEADER */}
      <header className="home__header">
        <h1 className="home__title">Noir Gallery</h1>
      </header>

      {/* SEARCH BAR */}
      <div className="home__search">
        <input
          type="text"
          placeholder="Pesquisar histórias..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* CONTAINER BRANCO */}
      <div className="home__container">
        <div className="home__grid">
          {filtered.length > 0 ? (
            filtered.map(s => (
              <StoryCard
                key={s.id}
                id={s.id}
                title={s.title}
                linkTo={`/saga/${s.id}`}
              />
            ))
          ) : (
            <p className="home__empty">Nenhuma história encontrada.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
