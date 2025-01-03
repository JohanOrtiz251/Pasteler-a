import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold font-mono mb-4">Pastelería Navideña</h3>
          <p className="text-sm mb-6">Endulzando tus fiestas con amor</p>
          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-2xl hover:text-red-500 transition-colors duration-300"><FaFacebook /></a>
            <a href="#" className="text-2xl hover:text-red-500 transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="text-2xl hover:text-red-500 transition-colors duration-300"><FaTwitter /></a>
          </div>
          <p className="text-sm">&copy; 2023 Pastelería Navideña. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

