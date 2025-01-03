'use client'

import { useEffect, useState } from 'react'
import FondoNavidad from './components/FondoNavidad'
import CarruselProductos from './components/CarruselProductos'
import DestacadosNavidad from './components/DestacadosNavidad'
import ProductosNormales from './components/ProductosNormales'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen flex flex-col bg-gray-900 overflow-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <FondoNavidad />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-red-500 font-mono">
            Bienvenido a Pastelería Navideña
          </h1>
          <p className="text-xl md:text-2xl text-green-400 font-mono mb-8">
            Descubre nuestros deliciosos postres festivos
          </p>
          <motion.a
            href="#productos"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 font-mono inline-block"
          >
            Ver Productos
          </motion.a>
        </motion.div>
      </section>
      {mounted && (
        <div className="flex-grow">
          <section id="productos">
            <CarruselProductos />
          </section>
          <DestacadosNavidad />
          <ProductosNormales />
        </div>
      )}
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

