import FadeIn from "../components/FadeIn"

function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">
          Contacto
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          ¿Trabajamos juntos?
        </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
        <p className="text-gray-500 max-w-md mx-auto mb-12">
          Estoy disponible para oportunidades freelance o posiciones Junior. 
          No dudes en escribirme.
        </p>
        </FadeIn>
        <FadeIn delay={0.3}>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          
          <a href="mailto:mendezalvarojavier1@gmail.com" className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
            Email
          </a>
          
          <a href="https://www.linkedin.com/in/alvarojavier1" target="_blank" rel="noreferrer" className="border border-gray-200 text-gray-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            LinkedIn
          </a>
          
          <a href="https://github.com/AlvaroJavier1" target="_blank" rel="noreferrer" className="border border-gray-200 text-gray-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors" >
            GitHub
          </a>
        </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Contact