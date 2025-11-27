import { motion } from 'framer-motion'

const AboutSection = () => {
  const features = [
    {
      title: "Affordable IT Services",
      description: "Cost-effective solutions that don't compromise on quality or performance.",
      icon: "💡"
    },
    {
      title: "Retail POS Systems",
      description: "Modern point-of-sale systems designed for today's retail environment.",
      icon: "🛒"
    },
    {
      title: "ERP Solutions",
      description: "Enterprise resource planning systems to streamline your business operations.",
      icon: "📊"
    },
    {
      title: "Web & Software Development",
      description: "Custom web applications and software tailored to your specific needs.",
      icon: "💻"
    }
  ]

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              NexoraLabs is a forward-thinking technology partner for ambitious enterprises.
              We don't just write code; we engineer digital ecosystems that drive growth,
              efficiency, and innovation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 flex items-center gap-4">
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-semibold">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 md:p-12 relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                "To empower businesses with transformative technology that bridges the gap
                between today's challenges and tomorrow's opportunities."
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
