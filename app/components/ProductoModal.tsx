'use client'

import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface Producto {
  id: number
  nombre: string
  descripcion: string
  imagenes: string[]
  precio: number
  calificacion: number
  ingredientes: string[]
}

interface ProductoModalProps {
  producto: Producto | null
  isOpen: boolean
  onClose: () => void
}

const ProductoModal: React.FC<ProductoModalProps> = ({ producto, isOpen, onClose }) => {
  if (!producto) return null

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  function SampleNextArrow(props: any) {
    const { onClick } = props
    return (
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <ChevronRightIcon className="h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-1" />
      </div>
    )
  }
  
  function SamplePrevArrow(props: any) {
    const { onClick } = props
    return (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <ChevronLeftIcon className="h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-1" />
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-white">{producto.nombre}</h2>
                <button onClick={onClose} className="text-gray-400 hover:text-white">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Slider {...settings}>
                    {producto.imagenes.map((imagen, index) => (
                      <div key={index} className="aspect-square relative">
                        <Image src={imagen} alt={`${producto.nombre} ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">{producto.descripcion}</p>
                  <p className="text-2xl font-bold text-white mb-4">${producto.precio.toFixed(2)}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(producto.calificacion) ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-300">{producto.calificacion.toFixed(1)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Ingredientes:</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {producto.ingredientes.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProductoModal

