import { Button } from './ui/button';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { ShoppingCart, Plus, Minus, Trash2, Package } from 'lucide-react';
import type { ShoppingListItem } from '../App';

interface ShoppingListProps {
  items: ShoppingListItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onToggleCheck: (itemId: string) => void;
  onRemoveItem: (itemId: string) => void;
}

export function ShoppingList({
  items,
  onUpdateQuantity,
  onToggleCheck,
  onRemoveItem,
}: ShoppingListProps) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.product.currentPrice * item.quantity), 0);
  const checkedItems = items.filter(item => item.checked).length;

  if (items.length === 0) {
    return (
      <div className="p-8 text-center">
        <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
        <h3 className="text-gray-600 mb-2">Your shopping list is empty</h3>
        <p className="text-sm text-gray-500">
          Scan or search for products to add them to your list
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Summary Card */}
      <Card className="p-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-green-100 text-sm">Total Items</p>
            <p className="text-2xl">{totalItems}</p>
          </div>
          <div className="text-right">
            <p className="text-green-100 text-sm">Estimated Total</p>
            <p className="text-2xl">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-green-500">
          <Package className="w-4 h-4" />
          <p className="text-sm text-green-100">
            {checkedItems} of {items.length} items checked
          </p>
        </div>
      </Card>

      {/* Shopping List Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <Card
            key={item.id}
            className={`p-4 transition-all ${item.checked ? 'bg-gray-50 opacity-75' : ''}`}
          >
            <div className="flex gap-3">
              {/* Checkbox */}
              <div className="flex items-start pt-1">
                <Checkbox
                  checked={item.checked}
                  onCheckedChange={() => onToggleCheck(item.id)}
                  id={`item-${item.id}`}
                />
              </div>

              {/* Product Image */}
              <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <label
                  htmlFor={`item-${item.id}`}
                  className={`cursor-pointer block ${item.checked ? 'line-through text-gray-500' : ''}`}
                >
                  <p className="truncate">{item.product.name}</p>
                  <p className="text-sm text-gray-500">{item.product.brand}</p>
                </label>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="h-7 w-7 p-0"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="text-sm min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="h-7 w-7 p-0"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  <span className="text-sm text-gray-500 ml-2">
                    × ${item.product.currentPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Price and Delete */}
              <div className="flex flex-col items-end justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
                <div className="text-right">
                  <p className={item.checked ? 'line-through text-gray-500' : 'text-green-700'}>
                    ${(item.product.currentPrice * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
