import React from 'react'
import { useParams, Link } from 'react-router-dom'
import StoryCard from '../components/StoryCard'
import './Saga.scss'

interface Part {
  id: string
  title: string
}

// Aqui você pode carregar dinamicamente esse mapeamento de um JSON ou API.
// Por ora deixamos estático para exemplificar.
const partsMap: Record<string, Part[]> = {
  'dark-alleys': [
    { id: '1', title: 'Noite de Chuva' },
    { id: '2', title: 'Sombras na Rua' },
    { id: '3', title: 'O Último Suspiro' },
  ],
  'fateful-night': [
    { id: '1', title: 'Encontro Fatal' },
    { id: '2', title: 'Segredos Revelados' },
  ],
  'smoke-and-mirrors': [
    { id: '1', title: 'Ilusões' },
    { id: '2', title: 'Véu de Fumaça' },
    { id: '3', title: 'Espelhos Quebrados' },
  ],
  // adicione mais sagas conforme criar
}

const Saga: React.FC = () => {
  const { storyId } = useParams<{ storyId: string }>()
  const parts = storyId ? partsMap[storyId] : undefined

  if (!storyId || !parts) {
    return (
      <div className="saga">
        <h2>Saga não encontrada</h2>
        <Link to="/">← Voltar à Home</Link>
      </div>
    )
  }

  return (
    <div className="saga">
      <h1 className="saga__heading">Partes de “{storyId.replace(/-/g, ' ')}”</h1>
      <div className="saga__grid">
        {parts.map((part) => (
          <StoryCard
            key={part.id}
            id={part.id}
            title={part.title}
            linkTo={`/saga/${storyId}/parte/${part.id}`}
          />
        ))}
      </div>
      <Link to="/" className="saga__back">
        ← Voltar à Home
      </Link>
    </div>
  )
}

export default Saga
