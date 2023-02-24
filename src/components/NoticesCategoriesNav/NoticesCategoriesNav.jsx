import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLogged } from 'redux/selectors';
import { AnchorElem } from 'styles/Buttons/Anchor/Anchor';

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
  const isLogged = useSelector(getIsLogged);

  const renderLinks = () => {
    if (!Array.isArray(link)) return null;

    return link.map(el => (
      <li style={{ display: 'inline-block', paddingRight: '10px' }} key={el.to}>
        <AnchorElem el={el} />
      </li>
    ));
  };

  const renderAuthLinks = () => {
    if (!isLogged || !Array.isArray(linkAuth)) return null;

    return linkAuth.map(el => (
      <li style={{ display: 'inline-block', paddingRight: '10px' }} key={el.to}>
        <AnchorElem el={el} />
      </li>
    ));
  };

  return (
    <div>
      <ul>
        {renderLinks()}
        {renderAuthLinks()}
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
