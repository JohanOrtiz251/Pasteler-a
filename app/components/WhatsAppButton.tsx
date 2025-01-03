import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

