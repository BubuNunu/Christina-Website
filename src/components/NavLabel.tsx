// Header label that reserves its bold width, so hovering (bold) doesn't shift neighbours.
const NavLabel = ({ children }: { children: string }) => (
  <span className="nav-label" data-label={children}>
    {children}
  </span>
);

export default NavLabel;
