import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto flex space-x-4 p-4">
        <Link to="/">Home</Link>
        <Link to="/converter">Conversor</Link>
        <Link to="/predictions">Previsões</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/settings">Configurações</Link>
      </nav>
    </header>
  )
}