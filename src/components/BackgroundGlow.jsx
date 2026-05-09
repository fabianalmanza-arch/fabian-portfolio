function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Glow 1 */}

      <div
        className="
          absolute
          top-[-200px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          rounded-full
          blur-[120px]
        "
      />

      {/* Glow 2 */}

      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[500px]
          h-[500px]
          bg-blue-500/20
          rounded-full
          blur-[120px]
        "
      />

      {/* Glow 3 */}

      <div
        className="
          absolute
          top-[40%]
          left-[40%]
          w-[300px]
          h-[300px]
          bg-pink-500/10
          rounded-full
          blur-[100px]
        "
      />

    </div>
  )
}

export default BackgroundGlow