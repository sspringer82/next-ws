import { Product } from '@/app/lib/types';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:8080/products');

  if (!response.ok) {
    throw new Error('Could not fetch the data');
  }

  const products = await response.json();
  return products;
}
