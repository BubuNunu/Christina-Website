import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import PageContainer from '../PageContainer';
import NotFound from './NotFound';
import { CaseStudyBlockView, CaseStudyHeader, FigureImage } from '../caseStudy/CaseStudyBlocks';
import { getProject } from '@/data/projects';
import { caseStudies } from '@/data/caseStudies';
import { asset } from '@/utils/asset';
import { keepMuted } from '@/utils/video';

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
        {content.heroVideo ? (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              minHeight: 200,
              borderRadius: '24px',
              overflow: 'hidden',
              bgcolor: '#000000',
            }}
          >
            <Box
              component="iframe"
              src={`https://www.youtube.com/embed/${content.heroVideo.youtubeId}?playsinline=1&rel=0`}
              title={content.heroVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              sx={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', border: 0 }}
            />
          </Box>
        ) : project.coverVideo ? (
          <Box
            component="video"
            ref={keepMuted}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={asset(project.image)}
            aria-label={content.hero.alt || project.title}
            data-autoplay-cover-video
            sx={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '1228 / 696', borderRadius: '24px' }}
          >
            <source src={asset(`${project.coverVideo}.webm`)} type="video/webm" />
            <source src={asset(`${project.coverVideo}.mp4`)} type="video/mp4" />
          </Box>
        ) : (
          <FigureImage src={content.hero.src} alt={content.hero.alt || project.title} radius={24} />
        )}
      </PageContainer>
      {content.blocks.map((block, index) => (
        <CaseStudyBlockView key={index} block={block} />
      ))}
    </>
  );
};

export default Project;

