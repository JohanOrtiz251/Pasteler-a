import Image from 'next/image'

const destacados = [
  {
    titulo: 'Recetas Navideñas',
    descripcion: 'Descubre nuestras recetas exclusivas para esta temporada festiva.',
    imagen: 'https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    titulo: 'Talleres de Decoración',
    descripcion: 'Aprende a decorar tus postres navideños como un profesional.',
    imagen: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    titulo: 'Regalos Dulces',
    descripcion: 'Sorprende a tus seres queridos con nuestras cajas de regalo personalizadas.',
    imagen: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
]

export default function DestacadosNavidad() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-red-500">Destacados de Navidad</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destacados.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={400}
                height={300}
                layout="responsive"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{item.titulo}</h3>
                <p className="text-sm">{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}