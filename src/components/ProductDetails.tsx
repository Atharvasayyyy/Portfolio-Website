import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Product } from '../App';

interface ProductDetailsProps {
  product: Product;
  onAddToList: (product: Product) => void;
}

export function ProductDetails({ product, onAddToList }: ProductDetailsProps) {
  const priceChange = product.priceHistory.length >= 2
    ? product.currentPrice - product.priceHistory[product.priceHistory.length - 2].price
    : 0;

  const lowestPrice = Math.min(...product.priceHistory.map(p => p.price));
  const highestPrice = Math.max(...product.priceHistory.map(p => p.price));
  const avgPrice = product.priceHistory.reduce((sum, p) => sum + p.price, 0) / product.priceHistory.length;

  const isPriceGood = product.currentPrice <= avgPrice;

  return (
    <div className="pb-6">
      {/* Product Image */}
      <div className="relative bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {isPriceGood && (
          <Badge className="absolute top-4 right-4 bg-green-600">
            Good Price
          </Badge>
        )}
      </div>

      <div className="p-6 space-y-6">
        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h2>{product.name}</h2>
              <p className="text-gray-600">{product.brand}</p>
              <Badge variant="outline" className="mt-2">
                {product.category}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-green-600">${product.currentPrice.toFixed(2)}</div>
              {priceChange !== 0 && (
                <div className={`flex items-center gap-1 text-sm ${priceChange > 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {priceChange > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  ${Math.abs(priceChange).toFixed(2)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Price Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-3 bg-green-50 border-green-200">
            <p className="text-xs text-gray-600 mb-1">Lowest</p>
            <p className="text-green-700">${lowestPrice.toFixed(2)}</p>
          </Card>
          <Card className="p-3 bg-blue-50 border-blue-200">
            <p className="text-xs text-gray-600 mb-1">Average</p>
            <p className="text-blue-700">${avgPrice.toFixed(2)}</p>
          </Card>
          <Card className="p-3 bg-orange-50 border-orange-200">
            <p className="text-xs text-gray-600 mb-1">Highest</p>
            <p className="text-orange-700">${highestPrice.toFixed(2)}</p>
          </Card>
        </div>

        {/* Price History Chart */}
        <div>
          <h3 className="mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5" />
            Price History (6 weeks)
          </h3>
          <Card className="p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={product.priceHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis
                  tick={{ fontSize: 10 }}
                  domain={['dataMin - 0.5', 'dataMax + 0.5']}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
                  labelFormatter={(label) => new Date(label).toLocaleDateString()}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#16a34a"
                  strokeWidth={2}
                  dot={{ fill: '#16a34a', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Price Insights */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <p className="flex items-center gap-2 text-sm text-blue-900">
            {isPriceGood ? (
              <>
                <TrendingDown className="w-4 h-4" />
                Current price is {((1 - product.currentPrice / avgPrice) * 100).toFixed(0)}% below average
              </>
            ) : (
              <>
                <TrendingUp className="w-4 h-4" />
                Current price is {((product.currentPrice / avgPrice - 1) * 100).toFixed(0)}% above average
              </>
            )}
          </p>
        </Card>

        {/* Product Details */}
        <div className="border-t pt-4">
          <h3 className="mb-3">Product Information</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Barcode:</span>
              <span>{product.barcode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Brand:</span>
              <span>{product.brand}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category:</span>
              <span>{product.category}</span>
            </div>
          </div>
        </div>

        {/* Add to List Button */}
        <Button
          onClick={() => onAddToList(product)}
          className="w-full bg-green-600 hover:bg-green-700 py-6"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Shopping List
        </Button>
      </div>
    </div>
  );
}
