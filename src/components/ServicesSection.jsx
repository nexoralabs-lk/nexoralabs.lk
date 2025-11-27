import { motion } from 'framer-motion'

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions built with the latest technologies to meet your unique business challenges.",
      icon: "💻",
      features: ["Web Applications", "Mobile Apps", "API Integration"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure, scalable, and efficient cloud solutions to power your digital transformation.",
      icon: "☁️",
      features: ["AWS/Azure", "DevOps", "Cloud Migration"]
    },
    {
      title: "Data Analytics & AI",
      description: "Turn your data into actionable insights with our advanced analytics and AI solutions.",
      icon: "📈",
      features: ["Business Intelligence", "Predictive Analytics", "Machine Learning"]
    }
  ]

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive technology services to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn btn-primary">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
