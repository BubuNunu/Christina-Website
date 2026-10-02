// Files in /public are served under the site's base path (/Sherry-UX-work-website/).
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
