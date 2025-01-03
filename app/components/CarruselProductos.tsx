'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ProductoModal from './ProductoModal'

const productos = [
  {
    id: 1,
    nombre: 'Tarta de Navidad',
    descripcion: 'Una deliciosa tarta llena de sabores navideños.',
    imagenes: [
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    precio: 29.99,
    calificacion: 4.8,
    ingredientes: ['Harina', 'Azúcar', 'Mantequilla', 'Frutas confitadas', 'Especias navideñas']
  },
  {
    id: 2,
    nombre: 'Casa de Jengibre',
    descripcion: 'Una encantadora casa de jengibre decorada a mano.',
    imagenes: [
      '/jengibre.jpg',
      'https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    precio: 39.99,
    calificacion: 4.5,
    ingredientes: ['Harina de jengibre', 'Miel', 'Azúcar glass', 'Caramelos', 'Glaseado real']
  },
  {
    id: 3,
    nombre: 'Galletas Festivas',
    descripcion: 'Surtido de galletas navideñas con formas y sabores variados.',
    imagenes: [
      'https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    precio: 19.99,
    calificacion: 4.7,
    ingredientes: ['Harina', 'Mantequilla', 'Azúcar', 'Vainilla', 'Decoraciones comestibles']
  },
  {
    id: 4,
    nombre: 'Tronco de Navidad',
    descripcion: 'Un clásico postre navideño en forma de tronco, relleno de crema.',
    imagenes: [
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607506368751-827e79d39c9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    precio: 34.99,
    calificacion: 4.6,
    ingredientes: ['Bizcocho de chocolate', 'Crema de mantequilla', 'Chocolate', 'Azúcar glass', 'Decoraciones navideñas']
  },
  {
    id: 5,
    nombre: 'Pastel de Frutas',
    descripcion: 'Un rico pastel lleno de frutas confitadas y frutos secos.',
    imagenes: [
      'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    precio: 24.99,
    calificacion: 4.4,
    ingredientes: ['Harina', 'Mantequilla', 'Huevos', 'Frutas confitadas', 'Frutos secos', 'Brandy']
  },
  {
    id: 6,
    nombre: 'Cupcakes Navideños',
    descripcion: 'Deliciosos cupcakes decorados con motivos navideños.',
    imagenes: [
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513442542250-854d436a73f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    precio: 14.99,
    calificacion: 4.9,
    ingredientes: ['Harina', 'Azúcar', 'Huevos', 'Vainilla', 'Crema de mantequilla', 'Decoraciones navideñas']
  }
]

export default function CarruselProductos() {
  const [productoSeleccionado, setProductoSeleccionado] = useState<typeof productos[0] | null>(null)
  const [modalAbierto, setModalAbierto] = useState(false)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center font-mono">Nuestros Productos Navideños</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productos.map((producto, index) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
            className="relative group cursor-pointer"
            onClick={() => {
              setProductoSeleccionado(producto)
              setModalAbierto(true)
            }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105">
              <Image
                src={producto.imagenes[0]}
                alt={producto.nombre}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 font-mono">{producto.nombre}</h3>
                <p className="text-sm">{producto.descripcion.substring(0, 100)}...</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <ProductoModal
        producto={productoSeleccionado}
        isOpen={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />
    </div>
  )
}

