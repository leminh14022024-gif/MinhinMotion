import React, { useState } from 'react';
import { MerchItem } from '../types';
import { X, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

interface CartItem extends MerchItem {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail.trim()) return;
    setIsCompleted(true);
    setTimeout(() => {
      onClearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-neutral-950/80 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-neutral-900 border-l border-neutral-800 h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white font-display">Paddock Gear Bag</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 py-6">
          {isCompleted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-display">Order Dispatched!</h4>
              <p className="text-xs text-neutral-300 max-w-xs mx-auto">
                Confirmation & tracking number sent to <strong className="text-white">{customerEmail}</strong>. Hand-packed from the Revhouse Atelier.
              </p>
              <button
                onClick={() => {
                  setIsCompleted(false);
                  setIsCheckingOut(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs rounded-lg"
              >
                Return to Garage
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <ShoppingBag className="w-10 h-10 text-neutral-600 mx-auto" />
              <p className="text-sm text-neutral-400">Your paddock bag is empty.</p>
              <p className="text-xs text-neutral-500">
                Explore the Atelier store for handmade driving essentials and garage tools.
              </p>
            </div>
          ) : isCheckingOut ? (
            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                Express Paddock Checkout
              </div>
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">Enthusiast Email *</label>
                <input
                  type="email"
                  required
                  placeholder="driver@circuit.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1">Shipping Destination</label>
                <input
                  type="text"
                  required
                  defaultValue="400 Speedway Boulevard, Monterey, CA"
                  className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-xs font-mono space-y-1 text-neutral-400">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white">${totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Track Courier Shipping:</span>
                  <span className="text-emerald-400">Complimentary</span>
                </div>
                <div className="flex justify-between font-bold text-white pt-2 border-t border-neutral-800">
                  <span>Total Amount:</span>
                  <span className="text-amber-400">${totalAmount}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="w-1/2 py-2.5 bg-neutral-800 text-neutral-300 hover:text-white rounded-lg text-xs font-medium"
                >
                  Back to Bag
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 rounded-lg text-xs font-bold shadow-md shadow-amber-500/10"
                >
                  Place Order
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-neutral-950 border border-neutral-800 rounded-lg p-3.5 flex items-center justify-between"
                >
                  <div className="flex-1 pr-3">
                    <h5 className="text-xs font-bold text-white font-display">{item.name}</h5>
                    <div className="text-[11px] text-neutral-400 font-mono mt-0.5">${item.price} each</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-neutral-800 rounded bg-neutral-900 text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="px-2 py-0.5 text-neutral-400 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-2 font-mono tabular-nums text-white text-xs">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="px-2 py-0.5 text-neutral-400 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1 text-neutral-500 hover:text-red-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && !isCheckingOut && !isCompleted && (
          <div className="pt-4 border-t border-neutral-800 space-y-3">
            <div className="flex items-center justify-between font-mono">
              <span className="text-xs text-neutral-400">Total Order Value:</span>
              <span className="text-lg font-bold text-amber-400 tabular-nums">${totalAmount}</span>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-all shadow-md shadow-amber-500/10"
            >
              <span>Proceed to Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
