import type { Product } from '@/app/lib/types';
import { notFound } from 'next/navigation';

export async function fetchProducts(filter?: string): Promise<Product[]> {
  let url = 'http://localhost:8080/products';

  if (filter) {
    url += `?name=${filter}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Could not fetch the data');
  }

  const products = await response.json();
  return products;
}

export async function fetchProductById(id: string): Promise<Product> {
  let url = 'http://localhost:8080/products/' + id;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Could not fetch the data');
  }

  const products = await response.json();

  if (!products.id) {
    notFound();
  }

  return products;
}
