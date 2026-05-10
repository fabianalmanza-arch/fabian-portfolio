import { useTranslation } from "react-i18next"

import ProjectCard from "../components/ProjectCard"

import bibliotecaImg from "../assets/biblioteca.PNG"
import prestamosImg from "../assets/prestamos.PNG"

function Projects() {

  const { t } = useTranslation()

  const projects = [
    {
      title: "Biblioteca FastAPI",

      description:
        t("projects.bibliotecaDescription"),

      tech: [
        "FastAPI",
        "React",
        "Python",
        "PostgreSQL"
      ],

      image: bibliotecaImg,

      github:
        "https://github.com/fabianalmanza-arch/biblioteca-fastapi",

      demo: "#"
    },

    {
      title: "Sistema de Préstamos",

      description:
        t("projects.prestamosDescription"),

      tech: [
        "Java",
        "Bootstrap",
        "MySQL"
      ],

      image: prestamosImg,

      github: "https://github.com/",

      demo: "#"
    }
  ]

  return (
    <section
      id="proyectos"
      className="py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="text-purple-400 mb-4 font-semibold">
            {t("projects.subtitle")}
          </p>

          <h2 className="text-5xl font-bold mb-4">
            {t("projects.title")}
          </h2>

          <p className="text-gray-400 max-w-2xl">
            {t("projects.description")}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects