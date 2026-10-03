import { FormEvent, ReactNode, useState } from 'react';
import { Box, Button, InputBase, Typography } from '@mui/material';
import { colors } from '@/theme';
import { passwordHash } from '@/data/password';

// A simple visitor password screen, like Framer's. It only keeps casual
// visitors out: the site files are public on GitHub Pages.
const storageKey = 'site-unlocked';

// cyrb53: small, fast string hash (no crypto.subtle, so it also works on plain http)
export const hashPassword = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
};

const readUnlocked = () => {
  try {
    return localStorage.getItem(storageKey) === passwordHash;
  } catch {
    return false;
  }
};

const LockIcon = () => (
  <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M8 0a5 5 0 0 0-5 5v2.1A3 3 0 0 0 1 10v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5a3 3 0 0 0-2-2.9V5a5 5 0 0 0-5-5Zm3 7H5V5a3 3 0 1 1 6 0v2Z"
    />
  </svg>
);

const PasswordGate = ({ children }: { children: ReactNode }) => {
  const [unlocked, setUnlocked] = useState(() => !passwordHash || readUnlocked());
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (hashPassword(value) === passwordHash) {
      try {
        localStorage.setItem(storageKey, passwordHash);
      } catch {
        // Private browsing: stay unlocked for this visit only
      }
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        bgcolor: colors.background,
      }}
    >
      <Box
        component="form"
        onSubmit={submit}
        sx={{
          width: '100%',
          maxWidth: 320,
          p: '32px',
          borderRadius: '24px',
          bgcolor: '#111111',
          border: `1px solid ${colors.divider}`,
          textAlign: 'center',
        }}
      >
        <Box sx={{ color: colors.text, mb: 1.5 }}>
          <LockIcon />
        </Box>
        <Typography sx={{ fontSize: 14, lineHeight: '20px', color: colors.body, mb: 3 }}>
          Enter password
          <br />
          to access the site.
        </Typography>
        <InputBase
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          inputProps={{ 'aria-label': 'Password', style: { textAlign: 'center' } }}
          sx={{
            width: '100%',
            height: 40,
            px: 1.5,
            borderRadius: '8px',
            bgcolor: colors.chip,
            color: colors.text,
            fontSize: 14,
            border: `1px solid ${error ? '#f28b82' : 'transparent'}`,
            '&.Mui-focused': { borderColor: error ? '#f28b82' : colors.accent },
          }}
        />
        {error && (
          <Typography role="alert" sx={{ fontSize: 13, color: '#f28b82', mt: 1 }}>
            Wrong password, try again.
          </Typography>
        )}
        <Button
          type="submit"
          disabled={!value}
          disableElevation
          variant="contained"
          sx={{
            width: '100%',
            height: 40,
            mt: 1.5,
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 600,
            bgcolor: colors.accent,
            color: '#000000',
            '&.Mui-disabled': { bgcolor: colors.chip, color: colors.muted },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PasswordGate;
