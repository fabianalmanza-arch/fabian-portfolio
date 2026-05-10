import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {

  es: {
    translation: {

      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        contact: "Contacto"
      },

      hero: {
        title: "Full Stack Developer",

        description:
          "Desarrollo aplicaciones web modernas utilizando FastAPI, React, Java y PostgreSQL.",

        projects: "Ver Proyectos",

        cv: "Descargar CV"
      },

      about: {
        subtitle: "Sobre mí",

        title:
          "Desarrollador enfocado en crear aplicaciones modernas y funcionales.",

        description:
          "Soy desarrollador full stack apasionado por el backend, la arquitectura de aplicaciones y el desarrollo de interfaces modernas. Actualmente trabajo con tecnologías como React, FastAPI y Java, mientras continúo aprendiendo análisis de datos y nuevas herramientas para crear soluciones más completas."
      },

      projects: {
        subtitle: "Portfolio",

        title: "Proyectos Destacados",

        description:
          "Algunos proyectos desarrollados utilizando tecnologías modernas enfocadas en backend, frontend y desarrollo full stack.",

        github: "GitHub",

        demo: "Demo",

        bibliotecaDescription:
          "Sistema web bibliotecario desarrollado con FastAPI y React. Incluye búsqueda de libros, algoritmos de ordenamiento, carga de imágenes y persistencia de datos.",

        prestamosDescription:
          "Aplicación web enfocada en la gestión de préstamos y clientes desarrollada con Java y Bootstrap."
      },

      timeline: {
        subtitle: "Trayectoria",

        title: "Mi aprendizaje",

        stats: {
          projects: "Proyectos Full Stack",
          tech: "Tecnologías Aprendidas",
          years: "Años Aprendiendo",
          focus: "Enfocado en mejorar"
        },

        items: [
          {
            year: "2019",
            title: "Inicio en Desarrollo de Software",
            description:
              "Comencé mi formación en programación y desarrollo de software, aprendiendo lógica, bases de datos y fundamentos del desarrollo."
          },

          {
            year: "2021",
            title: "Tecnología ADSI",
            description:
              "Finalicé la tecnología en Análisis y Desarrollo de Sistemas de Información, fortaleciendo conocimientos en desarrollo web, bases de datos y arquitectura de software."
          },

          {
            year: "2024",
            title: "Ingeniería Informática",
            description:
              "Inicio de Ingeniería Informática enfocado en profundizar conocimientos en desarrollo, arquitectura de sistemas y tecnologías modernas."
          },

          {
            year: "Actualmente",
            title: "Full Stack & Data Analytics",
            description:
              "Actualmente continúo fortaleciendo mis habilidades en React, FastAPI, Java, PostgreSQL y análisis de datos con Python y Power BI."
          }
        ]
      },

      footer: {
        description:
          "Desarrollador enfocado en crear aplicaciones web modernas, backend robusto y experiencias digitales funcionales.",

        contact: "Contacto",

        rights:
          "© 2026 Fabian Almanza — Portfolio Developer"
      }
    }
  },

  en: {
    translation: {

      navbar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },

      hero: {
        title: "Full Stack Developer",

        description:
          "I build modern web applications using FastAPI, React, Java and PostgreSQL.",

        projects: "View Projects",

        cv: "Download Resume"
      },

      about: {
        subtitle: "About Me",

        title:
          "Developer focused on building modern and functional applications.",

        description:
          "I am a full stack developer passionate about backend architecture and modern interface development. I currently work with technologies such as React, FastAPI and Java while continuing to learn data analytics and new tools to create more complete solutions."
      },

      projects: {
        subtitle: "Portfolio",

        title: "Featured Projects",

        description:
          "Some projects developed using modern technologies focused on backend, frontend and full stack development.",

        github: "GitHub",

        demo: "Demo",

        bibliotecaDescription:
          "Library management web system developed with FastAPI and React. Includes book search, sorting algorithms, image uploads and data persistence.",

        prestamosDescription:
          "Web application focused on loan and client management developed with Java and Bootstrap."
      },

      timeline: {
        subtitle: "Journey",

        title: "My Learning Path",

        stats: {
          projects: "Full Stack Projects",
          tech: "Technologies Learned",
          years: "Years Learning",
          focus: "Focused on improving"
        },

        items: [
          {
            year: "2019",
            title: "Beginning in Software Development",
            description:
              "I started my journey in programming and software development, learning logic, databases and development fundamentals."
          },

          {
            year: "2021",
            title: "ADSI Technology Degree",
            description:
              "Completed the Information Systems Analysis and Development technology degree, strengthening skills in web development, databases and software architecture."
          },

          {
            year: "2024",
            title: "Computer Engineering",
            description:
              "Started Computer Engineering focused on deepening knowledge in software development, system architecture and modern technologies."
          },

          {
            year: "Currently",
            title: "Full Stack & Data Analytics",
            description:
              "Currently strengthening my skills in React, FastAPI, Java, PostgreSQL and data analytics with Python and Power BI."
          }
        ]
      },

      footer: {
        description:
          "Developer focused on building modern web applications, robust backend systems and functional digital experiences.",

        contact: "Contact",

        rights:
          "© 2026 Fabian Almanza — Portfolio Developer"
      }
    }
  }

}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  })

export default i18n