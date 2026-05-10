import { useState } from "react"
import { useTranslation } from "react-i18next"

import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"

import bibliotecaImg from "../assets/biblioteca.PNG"
import prestamosImg from "../assets/prestamos.PNG"
import dashboardImg from "../assets/screenshots/dashboard.png"

import clientesImg from "../assets/screenshots/clientes.PNG"
import registroClienteImg from "../assets/screenshots/registro-cliente.png"

import empleadosImg from "../assets/screenshots/empleados.PNG"
import registroEmpleadoImg from "../assets/screenshots/empleados_registro.PNG"

import prestamosSistemaImg from "../assets/screenshots/prestamos.PNG"
import cronogramaImg from "../assets/screenshots/prestamos_cronograma.PNG"

import pagosImg from "../assets/screenshots/pagos.PNG"
import registroPagoImg from "../assets/screenshots/pagos_registro.PNG"

function Projects() {

  const { t } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)

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

      demo: "https://biblioteca-fastapi-frontend.vercel.app"
    },

    {
      title: t("projects.prestamosTitle"),

      description:
        t("projects.prestamosDescription"),

      tech: [
        "Java",
        "Bootstrap",
        "MySQL"
      ],

      image: prestamosImg,

      github: "https://github.com/",

      demo: true,

      fullDescription:
        t("projects.prestamosModal.fullDescription"),

      features:
        t("projects.prestamosModal.features", { returnObjects: true }),

      problemsSolved:
        t("projects.prestamosModal.problemsSolved", { returnObjects: true }),

      featuresTitle:
        t("projects.prestamosModal.featuresTitle"),

      problemsTitle:
        t("projects.prestamosModal.problemsTitle"),

      sections: [

        {
          title:
            t("projects.prestamosModal.sections.dashboard.title"),

          description:
            t("projects.prestamosModal.sections.dashboard.description"),

          image: dashboardImg
        },

        {
          title:
            t("projects.prestamosModal.sections.clientes.title"),

          description:
            t("projects.prestamosModal.sections.clientes.description"),

          image: clientesImg
        },

        {
          title:
            t("projects.prestamosModal.sections.registroClientes.title"),

          description:
            t("projects.prestamosModal.sections.registroClientes.description"),

          image: registroClienteImg
        },

        {
          title:
            t("projects.prestamosModal.sections.empleados.title"),

          description:
            t("projects.prestamosModal.sections.empleados.description"),

          image: empleadosImg
        },

        {
          title:
            t("projects.prestamosModal.sections.registroEmpleados.title"),

          description:
            t("projects.prestamosModal.sections.registroEmpleados.description"),

          image: registroEmpleadoImg
        },

        {
          title:
            t("projects.prestamosModal.sections.prestamos.title"),

          description:
            t("projects.prestamosModal.sections.prestamos.description"),

          image: prestamosSistemaImg
        },

        {
          title:
            t("projects.prestamosModal.sections.cronograma.title"),

          description:
            t("projects.prestamosModal.sections.cronograma.description"),

          image: cronogramaImg
        },

        {
          title:
            t("projects.prestamosModal.sections.pagos.title"),

          description:
            t("projects.prestamosModal.sections.pagos.description"),

          image: pagosImg
        },

        {
          title:
            t("projects.prestamosModal.sections.registroPagos.title"),

          description:
            t("projects.prestamosModal.sections.registroPagos.description"),

          image: registroPagoImg
        }

      ]
    }
  ]

  return (
    <>

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
                project={project}
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                github={project.github}
                demo={project.demo}
                onDemo={() => setSelectedProject(project)}
              />

            ))}

          </div>

        </div>

      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </>

  )
  
}


export default Projects