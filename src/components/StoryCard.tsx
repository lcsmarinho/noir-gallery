import React from 'react'
import { Link } from 'react-router-dom'
import './StoryCard.scss'

interface StoryCardProps {
  id: string
  title: string
  // você pode adicionar mais props, como thumbnail, descrição etc.
  linkTo: string
}

const StoryCard: React.FC<StoryCardProps> = ({ id, title, linkTo }) => {
  return (
    <Link to={linkTo} className="story-card">
      <div className="story-card__content">
        <h3 className="story-card__title">{title}</h3>
      </div>
    </Link>
  )
}

export default StoryCard
