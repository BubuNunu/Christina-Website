import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import PageContainer from '../PageContainer';

const NotFound = () => (
  <PageContainer sx={{ py: 8 }}>
    <Typography variant="h2" component="h1">
      Page not found
    </Typography>
    <Typography sx={{ mt: 2 }}>
      <Link component={RouterLink} to="/">
        Back to home
      </Link>
    </Typography>
  </PageContainer>
);

export default NotFound;
