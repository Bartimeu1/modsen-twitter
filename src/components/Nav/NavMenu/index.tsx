import { useLocation } from 'react-router-dom';

import { navLinks } from './config';
import { LinkText, NavigationLink, StyledNavMenu } from './styled';
import { INavMenuProps } from './types';

export const NavMenu = (props: INavMenuProps) => {
  const { onLinkClick } = props;

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <StyledNavMenu>
      {navLinks.map(({ id, name, Icon, href }) => (
        <NavigationLink
          key={id}
          to={href}
          onClick={onLinkClick}
          $isTarget={currentPath.includes(href)}
        >
          <Icon />
          <LinkText>{name}</LinkText>
        </NavigationLink>
      ))}
    </StyledNavMenu>
  );
};
