import type { ElementType, ReactNode } from 'react';
import { Box, type SxProps, type Theme } from '@mui/material';
import { contentMaxWidth } from '@/theme';

interface PageContainerProps {
  children: ReactNode;
  component?: ElementType;
  id?: string;
  sx?: SxProps<Theme>;
}

// Centers content at the Figma content width (1280px) with responsive side gutters.
const PageContainer = ({ children, component = 'div', id, sx }: PageContainerProps) => (
  <Box
    component={component}
    id={id}
    sx={[
      { width: '100%', maxWidth: contentMaxWidth + 160, mx: 'auto', px: { xs: 2, sm: 4, md: 10 } },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    {children}
  </Box>
);

export default PageContainer;
