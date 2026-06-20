import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

function Hero() {
  const { t, i18n } = useTranslation()

  const cvPath = i18n.language.startsWith('en') 
    ? "/cv-fabian almanza-en.pdf" 
    : "/cv-fabian almanza-es.pdf"

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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            text-purple-400
            mb-4
            font-semibold
            tracking-widest
          "
        >
          FABIAN ALMANZA
        </motion.p>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-4
            text-xl
            text-purple-300
          "
        >
          Backend • Full Stack • Data Analytics
        </motion.p>

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
          {t("hero.description")}
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
            {t("hero.projects")}
          </a>

          {/* Cambiamos el href estático por nuestra variable dinámica */}
          <a
            href={cvPath}
            download={`CV_Fabian_Almanza_${i18n.language.startsWith('en') ? 'EN' : 'ES'}.pdf`}
            className="
              px-6 py-3
              rounded-2xl
              border border-white/20
              hover:bg-white/10
              transition
            "
          >
            {t("hero.cv")}
          </a>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero