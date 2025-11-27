import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let's Build Something Powerful Together
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your retail business with cutting-edge technology?
            Contact us today for a free consultation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="btn btn-primary">
              Get Started Now
            </button>
            <button className="btn btn-secondary">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>

      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  )
}

export default CTASection
