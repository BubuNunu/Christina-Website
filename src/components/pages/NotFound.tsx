import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import Placeholder from './Placeholder';

const NotFound = () => (
  <Placeholder title="Page not found">
    <Typography sx={{ mt: 2 }}>
      <Link component={RouterLink} to="/">
        Back to home
      </Link>
    </Typography>
  </Placeholder>
);

export default NotFound;
