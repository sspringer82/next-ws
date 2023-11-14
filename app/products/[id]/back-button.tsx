'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// const Button = styled.button`
//   border: 1px solid black;
//   border-radius: 5px;
//   padding: 2px 10px;
// `;

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => router.push('/products')}
      startIcon={<ArrowBackIosIcon />}
    >
      zurück
    </Button>
  );
}
