"use client";

import { useState } from "react";
import FoodPandaCardComponent from "@/components/FoodPandaCardComponent";
import { ProductList } from "@/lib/products";

export default function ProductsPage() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const addToCart = (name: string) =>
    setCart((prev) => ({ ...prev, [name]: (prev[name] ?? 0) + 1 }));

  const cartItems = ProductList.filter((p) => (cart[p.name] ?? 0) > 0);
  const total = cartItems.reduce(
    (sum, p) => sum + p.price * (cart[p.name] ?? 0),
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* មុខម្ហូបទាំងអស់ */}
      <div className="grid gap-4 sm:grid-cols-2">
        {ProductList.map((p) => (
          <FoodPandaCardComponent
            key={p.name}
            {...p}
            qty={cart[p.name] ?? 0}
            onAdd={() => addToCart(p.name)}
          />
        ))}
      </div>

      {/* Cart ខាងក្រោម */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-base font-bold text-gray-900">
          កន្ត្រក ({cartItems.reduce((s, p) => s + cart[p.name], 0)})
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-sm text-gray-500">មិនទាន់មានទំនិញ</p>
        ) : (
          <ul className="flex flex-col gap-1 text-sm text-gray-700">
            {cartItems.map((p) => (
              <li key={p.name} className="flex justify-between">
                <span>
                  {p.name} × {cart[p.name]}
                </span>
                <span>$ {(p.price * cart[p.name]).toFixed(2)}</span>
              </li>
            ))}
            <li className="mt-2 flex justify-between border-t pt-2 font-bold text-pink-600">
              <span>សរុប</span>
              <span>$ {total.toFixed(2)}</span>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
}