import FadeIn from "../components/FadeIn"

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git / GitHub",
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
          <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white rounded-2xl p-6 border border-gray-100 font-semibold text-gray-900"
              >
                {skill}
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
    </section>
  )
}

export default Skills