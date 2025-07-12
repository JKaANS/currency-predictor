// src/components/ErrorBoundary.jsx
import React from 'react'

export class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-600 text-white">
          Ocorreu um erro inesperado. Recarregue a página ou contate o suporte.
        </div>
      )
    }
    return this.props.children
  }
}