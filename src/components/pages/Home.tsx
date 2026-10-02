import { Link as RouterLink } from 'react-router-dom';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import Placeholder from './Placeholder';
import { projects } from '@/data/projects';

const Home = () => (
  <Placeholder title="Building AI products from zero to scale">
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} key={project.slug}>
          <Card>
            <CardActionArea component={RouterLink} to={`/projects/${project.slug}`}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography color="text.secondary">{project.summary}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Placeholder>
);

export default Home;
