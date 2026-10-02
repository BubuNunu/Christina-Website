import { useParams } from 'react-router-dom';
import PageContainer from '../PageContainer';
import NotFound from './NotFound';
import { CaseStudyBlockView, CaseStudyHeader, FigureImage } from '../caseStudy/CaseStudyBlocks';
import { getProject } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';

const Project = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const content = slug ? caseStudies[slug] : undefined;

  if (!project || !content) {
    return <NotFound />;
  }

  return (
    <>
      <CaseStudyHeader tags={content.tags} title={project.title} summary={project.summary} />
      <PageContainer>
        <FigureImage src={content.hero.src} alt={content.hero.alt || project.title} radius={24} />
      </PageContainer>
      {content.blocks.map((block, index) => (
        <CaseStudyBlockView key={index} block={block} />
      ))}
    </>
  );
};

export default Project;
