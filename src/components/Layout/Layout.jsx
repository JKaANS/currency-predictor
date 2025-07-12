import Header from './Header'

export default function Layout({ children }) {
  return (
    <div>
      {/* Header, nav, etc. */}
      <main>{children}</main>
      {/* Footer, etc. */}
    </div>
  )
}