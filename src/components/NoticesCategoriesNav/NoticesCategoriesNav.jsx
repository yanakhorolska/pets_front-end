import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLogged } from 'redux/selectors';

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
  //   const location = useLocation();

  return (
    <div>
      <ul>
        {link.map(el => (
          <li key={el.to}>
            <NavLink to={el.to}>
              <span>{el.text}</span>
            </NavLink>
          </li>
        ))}
        {isLogged &&
          linkAuth.map(el => (
            <li key={el.to}>
              <NavLink to={el.to}>
                <span>{el.text}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
