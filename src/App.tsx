import { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import CategoryGrid from './components/CategoryGrid'
import FlashSale from './components/FlashSale'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <HeroBanner />
        <CategoryGrid
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <FlashSale />
        <ProductGrid selectedCategory={selectedCategory} />
      </main>
      <Footer />
    </div>
  )
}