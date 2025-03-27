
import React, { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import RevealAnimation from '@/components/ui/RevealAnimation';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Sample product data
const products = [
  {
    id: '1',
    name: 'Premium Athletic Sneakers',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Footwear',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Casual Canvas Shoes',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Footwear',
  },
  {
    id: '3',
    name: 'Designer Dress Shoes',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Footwear',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Urban Street Sneakers',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Footwear',
    isNew: true,
  },
  {
    id: '5',
    name: 'Premium Graphic T-Shirt',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
  },
  {
    id: '6',
    name: 'Designer Denim Jeans',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
  },
  {
    id: '7',
    name: 'Slim Fit Blazer',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Urban Joggers',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Clothing',
    isNew: true,
  },
];

// Categories
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Footwear', name: 'Footwear' },
  { id: 'Clothing', name: 'Clothing' },
  { id: 'featured', name: 'Featured' },
  { id: 'new', name: 'New Arrivals' },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = products.filter((product) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'featured') return product.isFeatured;
    if (activeCategory === 'new') return product.isNew;
    return product.category === activeCategory;
  });

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <RevealAnimation>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Collection
            </span>
            <h2 className="text-4xl font-bold mb-4">Premium Products</h2>
            <p className="text-gray-600">
              Discover our curated collection of high-quality footwear and apparel. From casual to formal, we have everything you need to elevate your style.
            </p>
          </div>
        </RevealAnimation>

        {/* Categories Tabs */}
        <RevealAnimation delay={200}>
          <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-10 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </RevealAnimation>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <RevealAnimation key={product.id} delay={100 * index} direction="up">
              <ProductCard {...product} />
            </RevealAnimation>
          ))}
        </div>

        {/* View All Button */}
        <RevealAnimation delay={400}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="button-shine bg-white text-primary border border-primary px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-primary hover:text-white transition-colors shadow-lg shadow-primary/5"
            >
              View All Products
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ProductsSection;
