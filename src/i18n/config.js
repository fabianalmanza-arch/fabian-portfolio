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
          "Desarrollo de aplicaciones web modernas mediante tecnologías como FastAPI, React, Java y PostgreSQL, enfocadas en escalabilidad, automatización y eficiencia operativa.",

        projects: "Ver Proyectos",

        cv: "Descargar CV"
      },

      about: {
        subtitle: "Sobre mí",

        title:
          "Desarrollador enfocado en crear soluciones modernas, escalables y funcionales.",

        description:
          "Desarrollador Full Stack con conocimientos en backend, frontend y arquitectura de aplicaciones web. Experiencia en el desarrollo de soluciones administrativas utilizando tecnologías como React, FastAPI, Java y PostgreSQL, enfocadas en automatización de procesos, gestión de datos y optimización operativa. Actualmente fortaleciendo habilidades en análisis de datos, Python y Power BI para el desarrollo de soluciones tecnológicas más integrales."
      },

      projects: {
        subtitle: "Portfolio",

        prestamosTitle: "Sistema de Préstamos",

        title: "Proyectos Destacados",

        description:
          "Proyectos desarrollados con tecnologías modernas enfocados en automatización de procesos, gestión de información, arquitecturas escalables y desarrollo de soluciones administrativas y full stack.",

        github: "GitHub",

        demo: "Demo",

        bibliotecaDescription:
          "Aplicación web full stack desarrollada para la gestión bibliotecaria utilizando FastAPI, React y PostgreSQL. Implementa búsqueda optimizada de libros, algoritmos de ordenamiento, carga de imágenes y persistencia de datos mediante una arquitectura backend escalable.",

        prestamosDescription:
          "Plataforma administrativa desarrollada con Java, Bootstrap y MySQL para la gestión de préstamos, clientes y pagos. Diseñada para optimizar procesos financieros, automatizar el seguimiento de pagos y centralizar la administración operativa dentro de un único sistema.",

        prestamosModal: {

          fullDescription:
            "Plataforma administrativa y financiera desarrollada para la gestión de préstamos, administración de empleados, control de pagos y seguimiento de balances. El sistema centraliza procesos financieros, automatiza cronogramas de pago, optimiza el monitoreo operativo y genera recibos PDF para mejorar la eficiencia administrativa.",

          featuresTitle:
            "Funcionalidades Principales",

          problemsTitle:
            "Problemas Solucionados",

          features: [

            "Gestión centralizada de clientes",
            "Módulo administrativo de empleados",
            "Registro y seguimiento de préstamos",
            "Generación automática de cronogramas de pago",
            "Sistema de control y seguimiento de pagos",
            "Generación digital de recibos PDF",
            "Control de balances financieros y flujo de caja",
            "Monitoreo del rendimiento de cobradores"

          ],

          problemsSolved: [

            "Automatización de procesos de cálculo y control de cuotas de préstamos.",

            "Reducción de tareas administrativas manuales mediante gestión financiera centralizada.",

            "Mejora del seguimiento operativo y rendimiento de cobradores.",

            "Optimización del control de balances financieros, efectivo disponible y cuentas bancarias.",

            "Generación automática de cronogramas de pago para mejorar la eficiencia operativa.",

            "Gestión estructurada de gastos operativos y registros financieros.",

            "Optimización del seguimiento de pagos pendientes y control de clientes morosos.",

            "Generación digital de recibos PDF para agilizar y organizar el proceso de pagos."

          ],

          sections: {

            dashboard: {
              title: "Dashboard Principal",

              description:
                "Panel administrativo principal diseñado para monitorear balances financieros, cuentas bancarias, efectivo disponible, gastos operativos y estado general del personal dentro de la plataforma."
            },

            clientes: {
              title: "Gestión de Clientes",

              description:
                "Módulo administrativo diseñado para la gestión centralizada de clientes, permitiendo acceso organizado a información personal, financiera y operativa."
            },

            registroClientes: {
              title: "Registro de Clientes",

              description:
                "Interfaz de registro desarrollada para almacenar información personal y financiera necesaria para la gestión y evaluación de clientes."
            },

            empleados: {
              title: "Gestión de Empleados",

              description:
                "Vista administrativa enfocada en el control y visualización de la información general del personal registrado dentro del sistema."
            },

            registroEmpleados: {
              title: "Registro de Empleados",

              description:
                "Interfaz de registro de empleados diseñada para optimizar procesos administrativos y de incorporación de personal."
            },

            prestamos: {
              title: "Módulo de Préstamos",

              description:
                "Módulo encargado de registrar y administrar préstamos asociados a clientes, permitiendo control financiero y seguimiento operativo."
            },

            cronograma: {
              title: "Cronograma de Pagos",

              description:
                "Visualización automatizada de cronogramas de pago generados dinámicamente para cada préstamo registrado."
            },

            pagos: {
              title: "Gestión de Pagos",

              description:
                "Panel administrativo diseñado para registrar, controlar y visualizar pagos realizados por clientes dentro del sistema."
            },

            registroPagos: {
              title: "Registro de Pagos",

              description:
                "Formulario utilizado para registrar pagos y actualizar automáticamente el estado financiero de cada préstamo."
            }

          }

        },
        "plateaDescription": "Solución integral y centralizada para la gestión en tiempo real de restaurantes y bares, optimizando la comunicación entre caja, cocina y clientes.",
        "plateaModal": {
          "fullDescription": "Platea es un ecosistema Full-Stack modular diseñado para digitalizar por completo la operación de un establecimiento gastronómico. Permite sincronizar los flujos de trabajo desde el momento en que un cliente escanea un código QR hasta el balance contable final, reduciendo drásticamente los tiempos de espera y eliminando errores humanos de comandas.",
          "featuresTitle": "Características Principales",
          "problemsTitle": "Problemas Resueltos",
          "features": [
            "Sistema KDS (Kitchen Display System) para sincronización instantánea de comandas.",
            "Punto de Venta (POS) ágil para cobros flexibles y registro inmediato de ventas.",
            "Menú digital interactivo accesible vía QR con carrito de compras integrado.",
            "Panel administrativo completo para control de inventario, categorías y finanzas."
          ],
          "problemsSolved": [
            "Eliminación de retrasos y confusiones entre los meseros y el personal de cocina.",
            "Automatización de la contabilidad diaria mediante reportes dinámicos de ingresos y utilidades netas.",
            "Mejora en la experiencia de usuario del comensal, permitiendo pedidos autónomos desde la mesa."
          ],
          "sections": {
            "caja": {
              "title": "Agilidad en Caja (POS)",
              "description": "Terminal unificada que permite crear pedidos rápidamente, despacharlos de forma directa al monitor de la cocina (KDS) y procesar múltiples métodos de pago de forma transparente."
            },
            "cocina": {
              "title": "Eficiencia en Cocina (KDS)",
              "description": "Pantalla optimizada para el personal culinario que recibe las comandas en tiempo real, gestiona los estados de preparación (Nuevo/En Proceso/Listo) y gatilla alertas instantáneas al cajero."
            },
            "productos": {
              "title": "Administración Total del Catálogo",
              "description": "Módulo administrativo que permite crear, editar y categorizar platos o bebidas en segundos, configurar variaciones o adiciones, y asignar códigos QR a mesas específicas."
            },
            "finanzas": {
              "title": "Inteligencia Financiera",
              "description": "Dashboard contable avanzado que recopila el historial detallado de ventas para calcular ingresos brutos, egresos y la utilidad neta en ventanas de tiempo personalizadas."
            },
            "menu": {
              "title": "Menú Digital Auto-gestionado",
              "description": "Interfaz móvil fluida e intuitiva para los clientes. Permite visualizar la carta actual, armar un carrito de compras y enviar el pedido directamente a la cocina identificando el número de mesa."
            }
          }
        }
      },

      timeline: {
        subtitle: "Trayectoria",

        title: "Trayectoria Profesional y Aprendizaje",

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
              "Inicio del proceso de formación en programación y desarrollo de software, adquiriendo conocimientos en lógica de programación, bases de datos y fundamentos del desarrollo."
          },

          {
            year: "2021",
            title: "Tecnología ADSI",
            description:
              "Finalización de la tecnología en Análisis y Desarrollo de Sistemas de Información, fortaleciendo conocimientos en desarrollo web, bases de datos y arquitectura de software."
          },

          {
            year: "2024",
            title: "Ingeniería Informática",
            description:
              "Inicio de Ingeniería Informática con enfoque en desarrollo de software, arquitectura de sistemas y tecnologías modernas orientadas a soluciones escalables."
          },

          {
            year: "Actualmente",
            title: "Full Stack & Data Analytics",
            description:
              "Fortalecimiento continuo de habilidades en React, FastAPI, Java, PostgreSQL, Python y Power BI, enfocado en desarrollo full stack y análisis de datos."
          }
        ]
      },

      footer: {
        description:
          "Desarrollador enfocado en el desarrollo de aplicaciones web modernas, arquitecturas backend robustas y soluciones digitales funcionales y escalables.",

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
          "Development of modern web applications using FastAPI, React, Java and PostgreSQL, focused on scalability, process automation and operational efficiency.",

        projects: "View Projects",

        cv: "Download Resume"
      },

      about: {
        subtitle: "About Me",

        title:
          "Developer focused on building modern, scalable and functional solutions.",

        description:
          "Full Stack Developer with knowledge in backend, frontend and web application architecture. Experience developing administrative solutions using technologies such as React, FastAPI, Java and PostgreSQL, focused on process automation, data management and operational optimization. Currently strengthening skills in data analytics, Python and Power BI to build more comprehensive technological solutions."
      },

      projects: {
        subtitle: "Portfolio",

        prestamosTitle: "Loan Management System",

        title: "Featured Projects",

        description:
          "Projects developed with modern technologies focused on process automation, information management, scalable architectures and full stack administrative solutions.",

        github: "GitHub",

        demo: "Demo",

        bibliotecaDescription:
          "Full stack web application developed for library management using FastAPI, React and PostgreSQL. Implements optimized book search, sorting algorithms, image handling and persistent data management through scalable backend architecture.",

        prestamosDescription:
          "Administrative web platform developed with Java, Bootstrap and MySQL for loan, client and payment management. Designed to optimize financial operations, automate payment tracking and centralize administrative processes within a single system.",

        prestamosModal: {

          fullDescription:
            "Administrative and financial management platform developed for loan operations, employee administration, payment tracking and balance control. The system centralizes financial processes, automates payment scheduling, improves operational monitoring and generates PDF receipts to optimize administrative efficiency.",

          featuresTitle:
            "Main Features",

          problemsTitle:
            "Problems Solved",

          features: [

            "Centralized client management",
            "Employee administration module",
            "Loan registration and monitoring",
            "Automated payment schedule generation",
            "Payment tracking system",
            "PDF receipt generation",
            "Financial balance and cash flow control",
            "Collection performance monitoring"

          ],

          problemsSolved: [

            "Automation of loan calculation processes and payment control workflows.",

            "Reduction of manual administrative tasks through centralized financial management.",

            "Improved monitoring of employee collections and operational performance.",

            "Optimization of financial balance tracking, cash availability and bank account control.",

            "Automatic generation of payment schedules to improve operational efficiency.",

            "Structured management of operational expenses and financial records.",

            "Enhanced overdue payment tracking and delinquent client monitoring.",

            "Digital generation of PDF receipts for faster and more organized payment processing."

          ],

          sections: {

            dashboard: {
              title: "Main Dashboard",

              description:
                "Main administrative dashboard designed to monitor financial balances, bank accounts, available cash, operational expenses and overall staff status within the platform."
            },

            clientes: {
              title: "Client Management",

              description:
                "Administrative module designed for centralized client management, allowing organized access to personal, financial and operational information."
            },

            registroClientes: {
              title: "Client Registration",

              description:
                "Registration interface developed to store personal and financial information required for client management and evaluation."
            },

            empleados: {
              title: "Employee Management",

              description:
                "Administrative view focused on monitoring and visualizing general staff information registered within the system."
            },

            registroEmpleados: {
              title: "Employee Registration",

              description:
                "Employee registration interface designed to optimize administrative and personnel onboarding processes."
            },

            prestamos: {
              title: "Loan Module",

              description:
                "Module responsible for registering and managing loans associated with clients, allowing financial control and operational monitoring."
            },

            cronograma: {
              title: "Payment Schedule",

              description:
                "Automated visualization of dynamically generated payment schedules for each registered loan."
            },

            pagos: {
              title: "Payment Management",

              description:
                "Administrative panel designed to register, monitor and visualize client payments within the system."
            },

            registroPagos: {
              title: "Payment Registration",

              description:
                "Form used to register payments and automatically update the financial status of each loan."
            }

          }

        },
        "plateaDescription": "Comprehensive and centralized solution for real-time restaurant and bar management, optimizing communication between checkout, kitchen, and customers.",
        "plateaModal": {
          "fullDescription": "Platea is a modular Full-Stack ecosystem designed to completely digitalize the operation of food and beverage establishments. It synchronizes workflows from the moment a customer scans a QR code to the final accounting balance, drastically reducing wait times and eliminating human error in ticket management.",
          "featuresTitle": "Key Features",
          "problemsTitle": "Problems Solved",
          "features": [
            "KDS (Kitchen Display System) for instant order synchronization.",
            "Agile Point of Sale (POS) for flexible payments and immediate sales tracking.",
            "Interactive digital menu accessible via QR with an integrated shopping cart.",
            "Comprehensive admin panel for inventory, categories, and financial control."
          ],
          "problemsSolved": [
            "Elimination of delays and miscommunications between waitstaff and kitchen personnel.",
            "Automation of daily accounting through dynamic income and net profit tracking charts.",
            "Enhanced diner experience by allowing autonomous order placement directly from the table."
          ],
          "sections": {
            "caja": {
              "title": "Agility at Checkout (POS)",
              "description": "Unified terminal that allows fast order creation, direct dispatch to the kitchen monitor (KDS), and seamless processing of multiple payment methods."
            },
            "cocina": {
              "title": "Kitchen Efficiency (KDS)",
              "description": "Optimized screen for culinary staff that receives tickets in real time, manages preparation statuses (New/In Progress/Ready), and triggers instant notifications to the cashier."
            },
            "productos": {
              "title": "Total Catalog Administration",
              "description": "Administrative module to create, edit, and categorize dishes or drinks in seconds, configure variations or add-ons, and assign QR codes to specific tables."
            },
            "finanzas": {
              "title": "Financial Intelligence",
              "description": "Advanced accounting dashboard that compiles detailed sales histories to calculate gross revenue, expenses, and net profit within custom timeframes."
            },
            "menu": {
              "title": "Self-Managed Digital Menu",
              "description": "Fluid and intuitive mobile interface for customers. It enables viewing the current menu, assembling a shopping cart, and sending the order straight to the kitchen tied to their table number."
            }
          }
        }
        
      },

      timeline: {
        subtitle: "Journey",

        title: "Professional Journey & Learning Path",

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
              "Started the learning process in programming and software development, acquiring knowledge in programming logic, databases and software development fundamentals."
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
              "Started Computer Engineering focused on software development, system architecture and modern technologies oriented toward scalable solutions."
          },

          {
            year: "Currently",
            title: "Full Stack & Data Analytics",
            description:
              "Continuously strengthening skills in React, FastAPI, Java, PostgreSQL, Python and Power BI, focused on full stack development and data analytics."
          }
        ]
      },

      footer: {
        description:
          "Developer focused on building modern web applications, robust backend architectures and scalable digital solutions.",

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