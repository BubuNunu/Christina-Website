// React sets `muted` only as a property, but iPhone Safari checks the attribute before it
// lets a video autoplay. Use as `ref` on every silent looping video.
export const keepMuted = (video: HTMLVideoElement | null) => {
  if (!video) return;
  video.defaultMuted = true;
  video.muted = true;
  video.setAttribute('muted', '');
};
