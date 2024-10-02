


export default function ContactoPage() {
    return (
        <div >


            <main className="container mx-auto px-4 py-12">
                <h2 className="text-4xl font-thin text-center mb-12">Contáctanos</h2>


                <div className="max-w-md mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium mb-2">Nombre</label>
                            <input type="text" id="nombre" name="nombre" className="w-full px-3 py-2 bg-[#1a1a1a] rounded-md" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-[#1a1a1a] rounded-md" required />
                        </div>
                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium mb-2">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" rows={4} className="w-full px-3 py-2 bg-[#1a1a1a] rounded-md" required></textarea>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 bg-[#D4AF37] text-black hover:bg-[#B08F26] transition-colors rounded-full">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </main>

            <footer className="mt-20 py-6 border-t border-[#333] text-center text-sm text-[#888]">
                <p>&copy; 2024 Luxe Fusion. Todos los derechos reservados.</p>
            </footer>
        </div>
    )
}