import { useLocation } from 'react-router-dom';

import { navLinks } from './config';
import { NavigationLink,StyledNavMenu } from './styled';

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
