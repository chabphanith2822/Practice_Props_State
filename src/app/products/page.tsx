import FoodPandaCardComponent from "@/components/FoodPandaCardComponent";
import { ProductList } from "@/lib/products";

export default function ProductsPage() {
  return (
    <main className="grid min-h-screen content-center items-center gap-4 bg-gray-50 p-6 sm:grid-cols-2">
      {ProductList.map((products) => (
        <FoodPandaCardComponent key={products.name} {...products} />
      ))}
    </main>
  );
}