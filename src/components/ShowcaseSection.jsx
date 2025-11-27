import { motion } from 'framer-motion'

const ShowcaseSection = () => {
  const projects = [
    {
      title: "RetailMax POS System",
      category: "Retail Technology",
      description: "Complete point-of-sale solution with inventory management and customer analytics.",
      image: "🛒",
      results: "40% efficiency increase"
    },
    {
      title: "CloudSync ERP Platform",
      category: "Enterprise Software",
      description: "Enterprise resource planning system for streamlined business operations.",
      image: "📊",
      results: "60% reduction in manual processes"
    },
    {
      title: "SmartStore Mobile App",
      category: "Mobile Development",
      description: "Mobile application for inventory management and staff communication.",
      image: "📱",
      results: "50% faster inventory updates"
    }
  ]

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300">
            Real solutions delivering real results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-white/5 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                {project.image}
              </div>

              <div className="p-8">
                <div className="text-sm font-medium text-brand-orange mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-white/10">
                  <div className="text-sm font-semibold text-white">
                    Result: <span className="text-brand-orange">{project.results}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-card p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your business goals with our custom solutions.
              </p>
              <button className="btn btn-primary">
                Contact Us Today
              </button>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-white/5 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
