'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'


export default function PlataPage() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const categorias = [
        { id: 1, name: 'Collar Estelar', price: 129.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 2, name: 'Pulsera Lunar', price: 89.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 3, name: 'Anillo Cósmico', price: 69.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 4, name: 'Anillo Cósmico', price: 69.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 5, name: 'Anillo Cósmico', price: 69.99, image: '/placeholder.svg?height=400&width=300' },
        { id: 6, name: 'Anillo Cósmico', price: 69.99, image: '/placeholder.svg?height=400&width=300' },
    ]

    return (
        <div >


            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-thin text-center mb-12">Colección de Plata</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categorias.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-lg cursor-pointer"
                            onMouseEnter={() => setHoveredItem(item.id)}
                            onMouseLeave={() => setHoveredItem(null)}
                            style={{
                                transform: hoveredItem === item.id ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.3s'
                            }}
                        >
                            <img src={item.image} alt={item.name} className="w-full h-[400px] object-cover" />
                            <div
                                className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transition: 'opacity 0.3s' }}
                            >
                                <h3 className="text-2xl font-light mb-2">{item.name}</h3>
                                <p className="text-[#D4AF37] mb-4">${item.price}</p>
                                <ChevronRight className="w-6 h-6 text-[#D4AF37]" />
                            </div>
                        </div>
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
