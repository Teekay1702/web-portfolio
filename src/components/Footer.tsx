interface Props { onNavigate: (target: string) => void }

export default function Footer(
  { onNavigate }: Props) {
  return <footer>
    <button className="brand" onClick={() => onNavigate('top')}>
      <i>TL</i>
      <span>Tokoloho Lekoro</span>
    </button>
    <span>© 2026 · Crafted with intention</span>
    <button onClick={() => onNavigate('top')}>Back to top ↑</button>
  </footer>
}
