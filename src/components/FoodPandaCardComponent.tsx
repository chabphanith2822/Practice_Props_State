"use client";

import { ProductType } from "@/lib/products";

type CardProps = ProductType & {
  qty: number;
  onAdd: () => void;
};

export default function ProductCardComponent({ qty, onAdd, ...props }: CardProps) {
  return (
    <article className="flex w-full items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h2 className="truncate text-base font-bold text-gray-900">
          {props.name}
        </h2>

        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-pink-600">
            ចាប់ពី $ {props.price.toFixed(2)}
          </span>
          {props.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              $ {props.oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        <p className="line-clamp-2 text-sm text-gray-500">{props.desc}</p>

        {props.isPopular && (
          <span className="pt-1 text-xs font-medium text-red-500">
            🔥 ពេញនិយម
          </span>
        )}
      </div>

      <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
        <img
          src={props.image}
          alt={props.name}
          className="h-full w-full rounded-xl object-cover"
        />

        <button
          onClick={onAdd}
          aria-label="បន្ថែមទៅកន្ត្រក"
          className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-2xl leading-none text-gray-800 shadow-md ring-1 ring-gray-200 transition hover:bg-gray-100 active:scale-90"
        >
          +
        </button>

        {qty > 0 && (
          <span className="absolute -left-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-pink-600 px-1.5 text-xs font-bold text-white">
            {qty}
          </span>
        )}
      </div>
    </article>
  );
}