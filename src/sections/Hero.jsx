import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="inicio"
      className="
        min-h-screen
        flex items-center justify-center
        px-6 pt-20
      "
    >

      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-bold
            leading-tight
          "
        >

          Full Stack
          <span className="text-purple-400"> Developer</span>

        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="
            mt-6
            text-gray-400
            text-base
            md:text-xl
            max-w-2xl mx-auto
            leading-relaxed
          "
        >

          Desarrollo aplicaciones web modernas utilizando
          FastAPI, React, Java y PostgreSQL.

        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-10
            flex flex-col sm:flex-row
            justify-center
            gap-4
          "
        >

          <a
            href="#proyectos"
            className="
              px-6 py-3
              rounded-2xl
              bg-purple-500
              hover:bg-purple-600
              transition
              font-semibold
            "
          >
            Ver Proyectos
          </a>

          <a
            href="/cv.pdf"
            download
            className="
              px-6 py-3
              rounded-2xl
              border border-white/20
              hover:bg-white/10
              transition
            "
          >
            Descargar CV
          </a>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero