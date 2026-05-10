import { motion } from "framer-motion"

function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
  onDemo
}) {

  return (
    <motion.div
      whileHover={{ y: -10, scale:1.02 }}
      className="
        bg-white/5
        border border-white/10
        rounded-3xl
        overflow-hidden
        backdrop-blur-sm
        hover:border-purple-400/40
        transition
      "
    >

      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-56
            object-cover
            hover:scale-105
            transition duration-500
          "
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {tech.map((item, index) => (
            <span
              key={index}
              className="
                px-3 py-1
                rounded-full
                bg-purple-500/20
                text-purple-300
                text-sm
              "
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-6 flex gap-4">

          <a
            href={github}
            target="_blank"
            className="
              px-4 py-2
              rounded-xl
              bg-purple-500
              hover:bg-purple-600
              transition
            "
          >
            GitHub
          </a>

          <button
            onClick={() => {
              if (demo === true) {
                onDemo()
              } else if (typeof demo === "string") {
                window.open(demo, "_blank")
              }
            }}
            className="
              px-4 py-2
              rounded-xl
              border border-white/20
              hover:bg-white/10
              transition
            "
          >
            Demo
          </button>

        </div>

      </div>

    </motion.div>
  )
}

export default ProjectCard