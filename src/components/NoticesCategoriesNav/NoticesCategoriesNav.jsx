import React from 'react';
import { AnchorElem } from 'styles/Buttons/Anchor/Anchor';
import { LinksItem, LinksList } from './NoticesCategoriesNav.styled';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/selectors';
import { useTranslation } from 'react-i18next';
const NoticesCategoriesNav = () => {
  const { t } = useTranslation();

  const link = [
    { to: '/notices/lost-found', text: t('lostFoundUp') },
    { to: '/notices/for-free', text: t('inGoodHandsUp') },
    { to: '/notices/sell', text: t('sellUp') },
  ];

  const linkAuth = [
    { to: '/notices/favorite', text: t('myFavAds') },
    { to: '/notices/myNotices', text: t('myAds') },
  ];
  const isLogged = useSelector(getIsLogged);

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
