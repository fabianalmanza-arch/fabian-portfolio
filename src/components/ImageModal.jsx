import { motion } from "framer-motion"
import { createPortal } from "react-dom"

function ImageModal({
  image,
  onClose
}) {

  if (!image) return null

  return createPortal(

    <div
      className="
        fixed inset-0
        z-[9999]

        bg-black/90
        backdrop-blur-md

        flex items-center justify-center

        p-6
      "
    >

      {/* BOTON CERRAR */}

      <button
        onClick={onClose}
        className="
          absolute
          top-6
          right-6

          px-5 py-2
          rounded-xl

          bg-white/10
          hover:bg-white/20

          transition
        "
      >
        Cerrar
      </button>

      {/* IMAGEN */}

      <motion.img
        initial={{ opacity:0, scale:0.9 }}
        animate={{ opacity:1, scale:1 }}
        transition={{ duration:0.25 }}

        src={image}

        className="
          max-w-full
          max-h-[90vh]

          rounded-2xl
          border border-white/10

          shadow-2xl
        "
      />

    </div>,

    document.body

  )
}

export default ImageModal