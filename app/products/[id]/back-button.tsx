'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 10px;
`;

export default function BackButton() {
  const router = useRouter();

  return <Button onClick={() => router.push('/products')}>zurück</Button>;
}
