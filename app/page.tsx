'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { CategoryCard, CategoryGrid, Container, Footer, Main, Overlay, ViewCollectionButton } from '@/public/style/style-global'



export default function Home() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <Container>
      <Main>
        <h2>Descubre la Elegancia del Futuro</h2>

        <CategoryGrid>
          <CategoryCard
            onMouseEnter={() => setHoveredCategory('Plata')}
            onMouseLeave={() => setHoveredCategory(null)}
            hovered={hoveredCategory === 'Plata'}
          >
            <img src="https://tse1.mm.bing.net/th?id=OIG3.6ZERYqD8l._fFUROgmYU&pid=ImgGn height=400&width=300" alt="Plata" />
            <Overlay className="overlay">
              <h3>Plata</h3>
              <ChevronRight />
            </Overlay>
          </CategoryCard>

          <CategoryCard
            onMouseEnter={() => setHoveredCategory('Oro')}
            onMouseLeave={() => setHoveredCategory(null)}
            hovered={hoveredCategory === 'Oro'}
          >
            <img src="https://tse3.mm.bing.net/th?id=OIG3.6AXsPjleEzfTCPM2yD.m&pid=ImgGn height=400&width=300" alt="Oro" />
            <Overlay className="overlay">
              <h3>Oro</h3>
              <ChevronRight />
            </Overlay>
          </CategoryCard>

          <CategoryCard
            onMouseEnter={() => setHoveredCategory('Acero')}
            onMouseLeave={() => setHoveredCategory(null)}
            hovered={hoveredCategory === 'Acero'}
          >

            <img src="https://tse3.mm.bing.net/th?id=OIG3.6AXsPjleEzfTCPM2yD.m&pid=ImgGn height=400&width=300" alt="Oro" />
            <Overlay className="overlay">
              <h3>Acero</h3>
              <ChevronRight />
            </Overlay>
          </CategoryCard>
        </CategoryGrid>

        <ViewCollectionButton href="/Coleccion">Ver toda la colección</ViewCollectionButton>
      </Main>

      <Footer>
        <p>&copy; 2024 Luxe Fusion. Todos los derechos reservados.</p>
      </Footer>

    </Container>
  )
}