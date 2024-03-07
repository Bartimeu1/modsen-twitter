import { useLocation } from 'react-router-dom';

import { StyledNavMenu, NavigationLink } from './styled';

import { navLinks } from './config';

export const NavMenu = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledNavMenu>
      {navLinks.map(({ id, name, Icon, href }) => (
        <NavigationLink key={id} to={href} $isTarget={href === currentPath}>
          <Icon />
          {name}
        </NavigationLink>
      ))}
    </StyledNavMenu>
  );
};
