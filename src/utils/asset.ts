// Files in /public are served under the site's base path (see vite.config.ts).
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
