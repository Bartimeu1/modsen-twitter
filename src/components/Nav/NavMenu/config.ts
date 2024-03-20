import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  urls,
} from '@root/constants';

export const navLinks = [
  { id: 1, Icon: HomeIcon, name: 'Home', href: urls.home },
  { id: 2, Icon: ExploreIcon, name: 'Explore', href: '#' },
  { id: 3, Icon: NotificationsIcon, name: 'Notifications', href: '#' },
  { id: 4, Icon: MessagesIcon, name: 'Messages', href: '#' },
  { id: 5, Icon: BookmarksIcon, name: 'Bookmarks', href: '#' },
  { id: 6, Icon: ListsIcon, name: 'Lists', href: '#' },
  { id: 7, Icon: ProfileIcon, name: 'Profile', href: urls.profile },
  { id: 8, Icon: MoreIcon, name: 'More', href: '#' },
];
