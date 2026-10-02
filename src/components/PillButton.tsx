import { Button, type ButtonProps } from '@mui/material';

// White rounded "Say Hello" button from the Figma nav and About sections.
const PillButton = (props: ButtonProps & { href?: string; target?: string; rel?: string }) => (
  <Button
    disableElevation
    {...props}
    sx={[
      {
        bgcolor: '#ffffff',
        color: '#000000',
        borderRadius: '50px',
        height: 44,
        px: 3,
        fontSize: 14,
        lineHeight: '20px',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.85)' },
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export default PillButton;
