import Image from 'next/image'

const productosNormales = [
  {
    nombre: 'Croissant',
    descripcion: 'Delicioso croissant recién horneado',
    imagen: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    nombre: 'Tarta de Manzana',
    descripcion: 'Clásica tarta de manzana con canela',
    imagen: '/tarta.jpg'
  },
  {
    nombre: 'Macarons',
    descripcion: 'Variedad de macarons franceses',
    imagen: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
]

export default function ProductosNormales() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono text-white">Nuestros Clásicos</h2>
        {productosNormales.map((producto, index) => (
          <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={500}
                height={400}
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:px-8">
              <h3 className="text-3xl font-bold mb-4 text-white">{producto.nombre}</h3>
              <p className="text-lg text-gray-300">{producto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}