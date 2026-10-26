import FadeIn from "../components/FadeIn"

const skillsGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Consumo de APIs REST",
    ],
  },
  {
    title: "Herramientas",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
    ],
  },
  /*{
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "API REST",
    ],
  }*/
]

function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Tecnologías que manejo.
          </h2>
          </FadeIn>
          <div className="flex flex-col gap-12">
            {skillsGroups.map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.1}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {group.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white rounded-2xl p-6 border border-gray-100 font-semibold text-gray-900"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Skills