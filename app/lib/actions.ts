'use server';

import { signIn } from '@/auth';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function addToCart(formData: FormData) {
  const cartExists = cookies().has('cart');

  if (!cartExists) {
    const response = await fetch('http://localhost:8080/carts/', {
      method: 'POST',
    });
    const { id } = await response.json();

    cookies().set('cart', id);
  }

  const cartId = cookies().get('cart')!.value;

  const data = {
    productId: formData.get('product'),
    amount: formData.get('amount'),
  };

  const url = `http://localhost:8080/carts/items/${cartId}`;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  revalidatePath('/products');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  console.log(formData);
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}
