import FadeIn from "../components/FadeIn"

const projects = [
  {
    name: "Ampara Seguros",
    description: "Sitio web para empresa de seguros con enfoque moderno y humano. Incluye páginas de inicio, quiénes somos, seguros de vida, daños y auto, y catálogo de planes.",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS"],
    link: "https://alvarojavier1.github.io/Proyecto-Ampara/",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
            Proyectos
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Lo que he construido.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-gray-100 rounded-3xl p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.name}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
                <a href={project.link}
                className="text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors"
              >
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Projects