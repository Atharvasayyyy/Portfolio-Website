import { useState } from 'react';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Search, TrendingDown, TrendingUp } from 'lucide-react';
import type { Product } from '../App';

interface ProductSearchProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

export function ProductSearch({ products, onProductSelect }: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const getPriceChange = (product: Product) => {
    if (product.priceHistory.length < 2) return 0;
    return product.currentPrice - product.priceHistory[product.priceHistory.length - 2].price;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        <Badge
          variant={selectedCategory === null ? 'default' : 'outline'}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-sm text-gray-600">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
      </p>

      {/* Product Grid */}
      <div className="space-y-3">
        {filteredProducts.map((product) => {
          const priceChange = getPriceChange(product);
          const avgPrice = product.priceHistory.reduce((sum, p) => sum + p.price, 0) / product.priceHistory.length;
          const isPriceGood = product.currentPrice <= avgPrice;

          return (
            <Card
              key={product.id}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onProductSelect(product)}
            >
              <div className="flex gap-3">
                {/* Product Image */}
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="truncate">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.brand}</p>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-green-600">${product.currentPrice.toFixed(2)}</p>
                      {priceChange !== 0 && (
                        <div className={`flex items-center gap-1 text-xs ${priceChange > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {priceChange > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          ${Math.abs(priceChange).toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Price Status */}
                  {isPriceGood && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-green-700">
                      <TrendingDown className="w-3 h-3" />
                      Good price - below average
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500">No products found</p>
            <p className="text-sm text-gray-400 mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}
