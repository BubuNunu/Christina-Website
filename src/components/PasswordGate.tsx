import { FormEvent, ReactNode, useState } from 'react';
import { Box, Button, InputBase, Typography } from '@mui/material';
import { colors } from '@/theme';
import { passwordHash, passwordIterations, passwordSalt } from '@/data/password';

// Visitor password screen. Only a salted, slow hash of the password is stored
// (src/data/password.ts), so reading the code doesn't reveal the password.
// The site's files themselves are still public on GitHub Pages.
const storageKey = 'site-unlocked';

// The browser's crypto tools only work over https, so send http visitors there.
if (typeof window !== 'undefined' && !window.isSecureContext && location.protocol === 'http:') {
  location.replace(location.href.replace(/^http:/, 'https:'));
}

const toHex = (buf: ArrayBuffer) =>
  Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');

// PBKDF2-SHA256, the same settings used to make passwordHash (see src/data/password.ts)
export const hashPassword = async (password: string) => {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, [
    'deriveBits',
  ]);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt: new TextEncoder().encode(passwordSalt), iterations: passwordIterations },
    key,
    256,
  );
  return toHex(bits);
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
  const [checking, setChecking] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setChecking(true);
    const ok = (await hashPassword(value)) === passwordHash;
    setChecking(false);
    if (ok) {
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
          disabled={!value || checking}
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
