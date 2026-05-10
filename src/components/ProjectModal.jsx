import { useState } from "react"
import { motion } from "framer-motion"

import ImageModal from "./ImageModal"

function ProjectModal({
  project,
  onClose
}) {

    const [selectedImage, setSelectedImage] = useState(null)

  if (!project) return null

  return (

    <div
      className="
        fixed inset-0
        z-50
        bg-black/80
        backdrop-blur-md
        overflow-y-auto
        p-6
      "
    >

      <div className="max-w-6xl mx-auto py-20">

        {/* BOTON CERRAR */}

        <div className="flex justify-end mb-8">

          <button
            onClick={onClose}
            className="
              px-5 py-2
              rounded-xl
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            Cerrar
          </button>

        </div>

        {/* CONTENIDO */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.5 }}
          className="
            bg-[#111]
            border border-white/10
            rounded-3xl
            overflow-visible
          "
        >

          {/* HERO */}

          <div className="p-10 border-b border-white/10">

            <p className="text-purple-400 font-semibold mb-4">
              Proyecto Full Stack
            </p>

            <h1 className="text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-gray-400 max-w-3xl leading-relaxed">
              {project.fullDescription}
            </p>

            {/* TECNOLOGIAS */}

            <div className="flex flex-wrap gap-3 mt-8">

              {project.tech.map((item, index) => (

                <span
                  key={index}
                  className="
                    px-4 py-2
                    rounded-full
                    bg-purple-500/20
                    text-purple-300
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

                    {/* FUNCIONALIDADES */}

            <div className="p-10 border-b border-white/10">

            <h2 className="text-3xl font-bold mb-8">
                {project.featuresTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

                {project.features.map((feature, index) => (

                <div
                    key={index}
                    className="
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    p-5
                    "
                >

                    <p className="text-gray-300">
                    {feature}
                    </p>

                </div>

                ))}

            </div>

            </div>

            {/* PROBLEMAS RESUELTOS */}

            <div className="p-10 border-b border-white/10">

            <h2 className="text-3xl font-bold mb-8">
                {project.problemsTitle}
            </h2>

            <div className="space-y-4">

                {project.problemsSolved.map((problem, index) => (

                <div
                    key={index}
                    className="
                    bg-white/5
                    border border-white/10
                    rounded-2xl
                    p-5
                    "
                >

                    <p className="text-gray-300 leading-relaxed">
                    {problem}
                    </p>

                </div>

                ))}

            </div>

            </div>

          {/* SECCIONES */}

          <div className="p-10 space-y-24">

            {project.sections.map((section, index) => (

              <div
                key={index}
                className="
                  grid md:grid-cols-2
                  gap-10
                  items-center
                "
              >

                <div>

                    <img
                        src={section.image}
                        alt={section.title}

                        onClick={() => setSelectedImage(section.image)}

                        className="
                        rounded-2xl
                        border border-white/10
                        shadow-2xl
                        cursor-pointer
                        hover:scale-[1.02]
                        transition duration-300
                        "
                    />

                </div>

                <div>

                  <h2 className="text-3xl font-bold mb-5">
                    {section.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed">
                    {section.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </motion.div>

        <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
        />

      </div>

    </div>

  )
}

export default ProjectModal