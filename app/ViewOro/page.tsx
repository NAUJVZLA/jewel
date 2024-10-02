'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'


export default function OroPage() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const items = [
        { id: 1, name: 'Collar Solar', price: 299.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 2, name: 'Pulsera Radiante', price: 249.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 3, name: 'Anillo Celestial', price: 199.99, image: '/placeholder.svg?height=400&width=300' },
    ]

    return (
        <div >


            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-thin text-center mb-12">Colección de Oro</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="relative overflow-hidden rounded-lg cursor-pointer"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={item.image} alt={item.name} className="w-full h-[400px] object-cover" />
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-light mb-2">{item.name}</h3>
                                <p className="text-[#D4AF37] mb-4">${item.price}</p>
                                <ChevronRight className="w-6 h-6 text-[#D4AF37]" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors rounded-full"
                    >
                        Volver a la colección
                    </Link>
                </div>
            </main>

            <footer className="mt-20 py-6 border-t border-[#333] text-center text-sm text-[#888]">
                <p>&copy; 2024 Luxe Fusion. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}