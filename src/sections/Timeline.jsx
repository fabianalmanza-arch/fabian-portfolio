import { motion } from "framer-motion"
import StatCard from "../components/StatCard"

function Timeline() {

  const timeline = [
    {
      year: "2025",
      title: "Desarrollo Backend",
      description:
        "Aprendizaje de FastAPI, APIs REST y arquitectura backend."
    },

    {
      year: "2025",
      title: "Frontend con React",
      description:
        "Desarrollo de interfaces modernas utilizando React y JavaScript."
    },

    {
      year: "2026",
      title: "Java & Full Stack",
      description:
        "Creación de sistemas completos utilizando Java, Bootstrap y bases de datos."
    },

    {
      year: "Actualmente",
      title: "Análisis de Datos",
      description:
        "Aprendiendo Power BI, Python y herramientas orientadas a data analytics."
    }
  ]

  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Stats */}

        <div className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-6
          mb-24
        ">

          <StatCard
            number="2+"
            text="Proyectos Full Stack"
          />

          <StatCard
            number="5+"
            text="Tecnologías Aprendidas"
          />

          <StatCard
            number="1+"
            text="Años Aprendiendo"
          />

          <StatCard
            number="100%"
            text="Enfocado en mejorar"
          />

        </div>

        {/* Timeline */}

        <div>

          <p className="text-purple-400 mb-4 font-semibold">
            Trayectoria
          </p>

          <h2 className="
            text-5xl
            font-bold
            mb-16
          ">
            Mi aprendizaje
          </h2>

          <div className="relative border-l border-white/10 ml-4">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="
                  mb-14
                  ml-8
                  relative
                "
              >

                {/* Dot */}

                <div className="
                  absolute
                  -left-[42px]
                  top-2
                  w-4
                  h-4
                  rounded-full
                  bg-purple-400
                " />

                <p className="
                  text-sm
                  text-purple-400
                  mb-2
                ">
                  {item.year}
                </p>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-3
                ">
                  {item.title}
                </h3>

                <p className="
                  text-gray-400
                  leading-relaxed
                ">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Timeline