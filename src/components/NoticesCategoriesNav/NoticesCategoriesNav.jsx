import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { AnchorElem } from 'styles/Buttons/Anchor/Anchor';
import { LinksItem, LinksList } from './NoticesCategoriesNav.styled';

const link = [
  { to: '/notices/lost-found', text: 'Lost/Found' },
  { to: '/notices/for-free', text: 'In good hands' },
  { to: '/notices/sell', text: 'Sell' },
];

const linkAuth = [
  { to: '/notices/favorite', text: 'Favorite ads' },
  { to: '/notices/own', text: 'My ads' },
];

const NoticesCategoriesNav = () => {
  const isLogged = useAuth();

  const renderLinks = () => {
    if (!Array.isArray(link)) return null;

    return link.map(el => (
      <LinksItem style={{ display: 'inline-block' }} key={el.to}>
        <AnchorElem el={el} />
      </LinksItem>
    ));
  };

  const renderAuthLinks = () => {
    if (!isLogged || !Array.isArray(linkAuth)) return null;

    return linkAuth.map(el => (
      <LinksItem style={{ display: 'inline-block' }} key={el.to}>
        <AnchorElem el={el} />
      </LinksItem>
    ));
  };

  return (
    <LinksList>
      {renderLinks()}
      {renderAuthLinks()}
    </LinksList>
  );
};

export default NoticesCategoriesNav;
