'use client'
import ImagenNosotros from '@/public/img/nosotros'
import Link from 'next/link'


export default function NosotrosPage() {
    return (
        <div >


            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-thin text-center mb-12">Sobre Nosotros</h2>

                <div className="max-w-2xl mx-auto ">
                    <ImagenNosotros />

                    <p className="text-lg mb-6">
                        En Luxe Fusion, nos dedicamos a crear joyas únicas que fusionan la elegancia clásica con el diseño futurista. Nuestro equipo de artesanos expertos trabaja con pasión para transformar metales preciosos en obras de arte portátiles.
                    </p>

                    <p className="text-lg mb-6">
                        Fundada en 2010, nuestra misión ha sido siempre ofrecer piezas de joyería que no solo adornen, sino que también cuenten una historia. Cada colección es el resultado de horas de inspiración, diseño meticuloso y artesanía de precisión.
                    </p>

                    <Link
                        href="/contacto"
                        className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors rounded-full"
                    >
                        Contáctanos
                    </Link>
                </div>
            </main>

            <footer className="mt-20 py-6 border-t border-[#333] text-center text-sm text-[#888]">
                <p>&copy; 2024 Luxe Fusion. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}