const CursorGlow = ({ position }) => {
  return (
    <div
      className="cursor-glow"
      style={{
        left: position.x - 4,
        top: position.y - 4,
      }}
    />
  )
}

export default CursorGlow
