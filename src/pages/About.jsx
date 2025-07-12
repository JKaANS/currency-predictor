import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* ... seu conteúdo ... */}
      <div className="mt-8 flex gap-4">
        <Link to="/" className="btn">Home</Link>
        <Link to="/converter" className="btn">Converter</Link>
        <Link to="/predictions" className="btn">Previsões</Link>
        <Link to="/settings" className="btn">Configurações</Link>
      </div>
    </div>
  )
}