import type { ReactNode } from 'react';
import { Container, Typography } from '@mui/material';

interface PlaceholderProps {
  title: string;
  children?: ReactNode;
}

// Temporary page body until the Figma design is built in step 2.
const Placeholder = ({ title, children }: PlaceholderProps) => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <Typography variant="h2" component="h1" fontWeight={700}>
      {title}
    </Typography>
    {children}
  </Container>
);

export default Placeholder;
