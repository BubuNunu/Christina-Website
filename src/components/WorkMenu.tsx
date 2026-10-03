import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, ButtonBase, Menu, MenuItem, type MenuProps, type SxProps, type Theme } from '@mui/material';
import { projects } from '@/data/projects';
import { colors } from '@/theme';
import NavLabel from './NavLabel';

// "Work" header item: a dropdown listing the six case studies from Home.
const WorkMenu = ({ sx, active }: { sx?: SxProps<Theme>; active?: boolean }) => {
  const [anchor, setAnchor] = useState<MenuProps['anchorEl']>(null);
  const open = Boolean(anchor);
  const close = () => setAnchor(null);

  return (
    <>
      <ButtonBase
        id="work-menu-button"
        aria-controls={open ? 'work-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-current={active ? 'page' : undefined}
        onClick={(event) => setAnchor(event.currentTarget)}
        disableRipple
        sx={[
          { gap: '4px', fontFamily: 'inherit' },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        <NavLabel>Work</NavLabel>
        <Box
          component="svg"
          viewBox="0 0 12 12"
          aria-hidden
          sx={{ width: 10, height: 10, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </Box>
      </ButtonBase>
      <Menu
        id="work-menu"
        anchorEl={anchor}
        open={open}
        onClose={close}
        disableScrollLock
        MenuListProps={{ 'aria-labelledby': 'work-menu-button' }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              bgcolor: '#1a1a1a',
              backgroundImage: 'none',
              border: `1px solid ${colors.divider}`,
              borderRadius: '16px',
              minWidth: 280,
            },
          },
        }}
      >
        {projects.map((project) => (
          <MenuItem
            key={project.slug}
            component={RouterLink}
            to={`/projects/${project.slug}`}
            onClick={close}
            sx={{
              fontSize: 14,
              lineHeight: '20px',
              py: 1.25,
              mx: 1,
              borderRadius: '10px',
              transition: 'background-color 0.2s ease, color 0.2s ease',
              '&:hover, &.Mui-focusVisible': { color: '#ffffff', bgcolor: 'rgba(255, 255, 255, 0.08)' },
            }}
          >
            {project.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default WorkMenu;
