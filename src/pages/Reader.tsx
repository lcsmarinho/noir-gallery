// src/pages/Reader.tsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './Reader.scss'

// Faz um “glob” de todos .md em src/stories, mas retorna a string bruta (.raw)
const markdownFiles = import.meta.glob<string>(
  '../stories/*.md',
  { as: 'raw' }
)

const Reader: React.FC = () => {
  const { storyId, partId } = useParams<{
    storyId: string
    partId: string
  }>()
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (!storyId || !partId) return

    // monta o caminho exato conforme o padrão de nome de arquivo
    const filePath = `../stories/${storyId}-${partId}.md`
    const importer = markdownFiles[filePath]

    if (importer) {
      importer().then((md) => setContent(md))
    } else {
      setContent('# Arquivo não encontrado\n\nVerifique se o nome do arquivo está correto.')
    }
  }, [storyId, partId])

  return (
    <div className="reader">
      <nav className="reader__nav">
        <Link to={`/saga/${storyId}`}>← Voltar à Saga</Link>
        <Link to="/">← Home</Link>
      </nav>

      <article className="reader__content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  )
}

export default Reader
