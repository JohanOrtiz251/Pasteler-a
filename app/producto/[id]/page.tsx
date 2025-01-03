'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ProductoDetalle from '../../components/ProductoDetalle'

const producto = {
  id: 1,
  nombre: 'Tarta de Navidad',
  descripcion: 'Una rica tarta de frutas con mazapán y glaseado real.',
  imagenes: [
    'https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1607920592519-bab2a80efd93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  ],
  calificacion: 4.8,
  ingredientes: ['Harina', 'Mantequilla', 'Azúcar', 'Huevos', 'Frutas Confitadas', 'Brandy'],
  precio: 29.99,
}

export default function PaginaProducto() {
  const router = useRouter()

  useEffect(() => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        // La transición se realizará automáticamente
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ProductoDetalle producto={producto} />
      <button
        onClick={() => router.back()}
        className="fixed bottom-4 left-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 font-mono"
      >
        Volver
      </button>
    </div>
  )
}

