import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Placeholder from './Placeholder';
import NotFound from './NotFound';
import { getProject } from '@/data/projects';

const Project = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Placeholder title={project.title}>
      <Typography color="text.secondary" sx={{ mt: 2 }}>
        {project.summary}
      </Typography>
    </Placeholder>
  );
};

export default Project;
