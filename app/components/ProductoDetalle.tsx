'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

interface ProductoDetalleProps {
  producto: {
    id: number
    nombre: string
    descripcion: string
    imagenes: string[]
    calificacion: number
    ingredientes: string[]
    precio: number
  }
}

export default function ProductoDetalle({ producto }: ProductoDetalleProps) {
  const [imagenActual, setImagenActual] = useState(0)

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-8"
      >
        <div className="lg:w-1/2">
          <motion.div
            key={imagenActual}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={producto.imagenes[imagenActual]}
              alt={producto.nombre}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="flex mt-4 gap-4">
            {producto.imagenes.map((imagen, index) => (
              <div
                key={index}
                className={`cursor-pointer border-2 ${
                  index === imagenActual ? 'border-red-500' : 'border-transparent'
                }`}
                onClick={() => setImagenActual(index)}
              >
                <Image
                  src={imagen}
                  alt={`${producto.nombre} ${index + 1}`}
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 font-mono">{producto.nombre}</h1>
          <p className="text-xl mb-4">{producto.descripcion}</p>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={`h-5 w-5 flex-shrink-0 ${
                    producto.calificacion > rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-400">{producto.calificacion} de 5 estrellas</p>
          </div>
          <h2 className="text-2xl font-semibold mb-2 font-mono">Ingredientes:</h2>
          <ul className="list-disc list-inside mb-4">
            {producto.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <p className="text-3xl font-bold mb-4">${producto.precio.toFixed(2)}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 font-mono">
            Añadir al Carrito
          </button>
        </div>
      </motion.div>
    </div>
  )
}

