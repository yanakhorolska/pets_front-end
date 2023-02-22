// --- НЕ ВИДАЛЯТИ ДО ДЕПЛОЯ --- //

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { getIsLogged } from 'redux/selectors';
// import { AnchorElem } from 'styles/Buttons/Anchor/Anchor';

// const link = [
//   { to: '/notices/lost-found', text: 'Lost/Found' },
//   { to: '/notices/for-free', text: 'In good hands' },
//   { to: '/notices/sell', text: 'Sell' },
// ];

// // перебрати масив, витягнути слово

// // якщо об'єкт.категорія === заносим в масив і виводимо
// // якщо не рівність - не виводимо

// const linkAuth = [
//   { to: '/notices/favorite', text: 'Favorite ads' },
//   { to: '/notices/own', text: 'My ads' },
// ];

// const NoticesCategoriesNav = () => {
//   const isLogged = useSelector(getIsLogged);
//   //   const location = useLocation();

//   //повішати на лішку функцію, яка буде шукати категорію
//   //і так ще 2 функції по категоріям

//   return (
//     <div>
//       <ul>
//         {link.map(el => (
//           <li style={{ display: 'inline-block' }} key={el.to}>
//             <AnchorElem el={el} />
//           </li>
//         ))}
//         {isLogged &&
//           linkAuth.map(el => (
//             <li key={el.to}>
//               <NavLink to={el.to}>
//                 <span>{el.text}</span>
//               </NavLink>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default NoticesCategoriesNav;

// ===  var2 (всеодно летить 400) === //

import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <li key={el.to}>
        <NavLink to={el.to}>
          <span>{el.text}</span>
        </NavLink>
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
