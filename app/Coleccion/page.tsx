'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'


export default function PlataPage() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null)

    const categorias = [
        {
            id: 1,
            name: 'Anillos',
            subcategorias: [
                'Anillos de compromiso',
                'Anillos de boda',
                'Anillos de moda',
                'Anillos con piedras preciosas',
                'Anillos personalizados',
                'Anillos de oro, plata, platino'
            ]
        },
        {
            id: 2,
            name: 'Collares',
            subcategorias: [
                'Collares cortos (chokers)',
                'Collares largos',
                'Cadenas con dijes',
                'Collares de perlas',
                'Collares con piedras preciosas',
                'Collares de oro, plata, platino'
            ]
        },
        {
            id: 3,
            name: 'Pulseras',
            subcategorias: [
                'Pulseras rígidas (brazaletes)',
                'Pulseras con charms (dijes)',
                'Pulseras de cuero',
                'Pulseras con piedras preciosas',
                'Pulseras de oro, plata, platino'
            ]
        },
        {
            id: 4,
            name: 'Aretes/Pendientes',
            subcategorias: [
                'Aretes de botón (studs)',
                'Aretes de aro (hoops)',
                'Aretes largos',
                'Aretes de clip (para orejas sin perforar)',
                'Aretes con piedras preciosas',
                'Aretes de oro, plata, platino'
            ]
        },
        {
            id: 5,
            name: 'Relojes',
            subcategorias: [
                'Relojes de lujo',
                'Relojes deportivos',
                'Relojes de oro, plata, acero inoxidable',
                'Relojes automáticos',
                'Relojes inteligentes'
            ]
        },
        {
            id: 6,
            name: 'Broches y Alfileres',
            subcategorias: [
                'Broches vintage',
                'Broches con piedras preciosas',
                'Alfileres de corbata',
                'Broches de flores, animales, figuras'
            ]
        },
        {
            id: 7,
            name: 'Joyería de Hombre',
            subcategorias: [
                'Anillos de hombre',
                'Pulseras de hombre',
                'Collares de hombre',
                'Cadenas de hombre',
                'Gemelos',
                'Alfileres de corbata'
            ]
        },
        {
            id: 8,
            name: 'Joyería de Mujer',
            subcategorias: [
                'Anillos de mujer',
                'Collares de mujer',
                'Pulseras de mujer',
                'Aretes de mujer'
            ]
        },
        {
            id: 9,
            name: 'Joyería Infantil',
            subcategorias: [
                'Pulseras infantiles',
                'Aretes infantiles',
                'Collares infantiles',
                'Anillos infantiles'
            ]
        },
        {
            id: 10,
            name: 'Joyería para Bodas',
            subcategorias: [
                'Anillos de boda',
                'Anillos de compromiso',
                'Pulseras y collares para novias',
                'Joyería para damas de honor',
                'Alfileres y gemelos para el novio'
            ]
        },
        {
            id: 11,
            name: 'Joyería Personalizada',
            subcategorias: [
                'Joyería con iniciales',
                'Joyería con nombres grabados',
                'Joyería con fechas especiales',
                'Joyería con piedras de nacimiento'
            ]
        },
        {
            id: 12,
            name: 'Materiales',
            subcategorias: [
                'Joyería de oro (18k, 14k, etc.)',
                'Joyería de plata',
                'Joyería de platino',
                'Joyería de acero inoxidable',
                'Joyería de cuero'
            ]
        },
        {
            id: 13,
            name: 'Joyería con Piedras Preciosas',
            subcategorias: [
                'Diamantes',
                'Rubíes',
                'Esmeraldas',
                'Zafiros',
                'Ópalos',
                'Perlas'
            ]
        },
        {
            id: 14,
            name: 'Accesorios de Joyería',
            subcategorias: [
                'Cajas de joyería',
                'Limpiadores de joyas',
                'Bolsas o estuches para joyas',
                'Organizadores de joyas'
            ]
        },
        {
            id: 15,
            name: 'Joyería Étnica o Cultural',
            subcategorias: [
                'Joyería hindú',
                'Joyería africana',
                'Joyería árabe',
                'Joyería artesanal'
            ]
        },
        {
            id: 16,
            name: 'Joyería Minimalista',
            subcategorias: [
                'Anillos minimalistas',
                'Pulseras minimalistas',
                'Collares minimalistas',
                'Aretes minimalistas'
            ]
        },
        {
            id: 17,
            name: 'Joyería de Alta Gama/Lujo',
            subcategorias: [
                'Joyería de diseñador',
                'Joyería con diamantes grandes',
                'Joyería hecha a mano',
                'Piezas exclusivas o de colección'
            ]
        }
    ];

    console.log(categorias);


    return (
        <div>


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
                            <Image src="" alt={item.name} className="w-full h-[400px] object-cover" />
                            <div
                                className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ${hoveredItem === item.id ? 'opacity-100' : 'opacity-0'}`}
                                style={{ transition: 'opacity 0.3s' }}
                            >
                                <h3 className="text-2xl font-light mb-2">{item.name}</h3>
                                <p className="text-[#D4AF37] mb-4">${item.subcategorias}</p>
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
