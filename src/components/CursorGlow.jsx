import { useEffect, useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {

    const handleMouseMove = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  }, [])

  return (
    <div
      className="
        fixed
        top-0
        left-0
        pointer-events-none
        z-0
      "
      style={{
        transform: `
          translate(
            ${position.x - 150}px,
            ${position.y - 150}px
          )
        `
      }}
    >

      <div
        className="
          w-[300px]
          h-[300px]
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

    </div>
  )
}

export default CursorGlow