
import React from 'react';
import { cn } from '@/lib/utils';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  className?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isFeatured = false,
  className,
}: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-white shadow-soft card-hover",
        className
      )}
    >
      {/* Image container */}
      <div className="aspect-[4/5] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/10 group-hover:opacity-100">
          <button className="glass-effect rounded-full p-2 transition-all hover:bg-primary hover:text-white">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="glass-effect rounded-full p-2 transition-all hover:bg-primary hover:text-white">
            <Heart className="h-5 w-5" />
          </button>
        </div>
        
        {/* Labels */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="glass-effect text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              New
            </span>
          )}
          {originalPrice && (
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% Off
            </span>
          )}
          {isFeatured && (
            <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        {category && (
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">
            {category}
          </div>
        )}
        <h3 className="font-medium text-gray-900 mb-1 transition-colors group-hover:text-primary">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-primary-900">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
