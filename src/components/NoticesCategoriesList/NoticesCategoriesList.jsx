import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import {
  useGetNoticeQuery,
  useGetNoticeFavoritesQuery,
  useGetUserNoticesQuery,
} from 'redux/fetchNotice';

import { ListBox } from 'pages/NoticesPage/NoticesPage.styled';
import { Loader } from 'components/Loader/Loader';
import {
  SearchPuppyImg,
  SearchPuppyWrap,
  SearchPuppyText,
} from 'components/CustomComponents/searchPuppy/SearchPuppyStyled';
import { useAuth } from 'hooks/useAuth';

const NoticesCategoriesList = () => {
  const [usersPets, setUsersPets] = useState(null);
  const [searchParams] = useSearchParams();
  let search = searchParams.get('search');
  if (!search) search = '';

  const isLogged = useAuth();

  const { pathname } = useLocation();
  const renderCategory = () => {
    switch (pathname) {
      case '/notices/sell':
        return 'sell';
      case '/notices/lost-found':
        return 'lostFound';
      case '/notices/for-free':
        return 'inGoodHands';
      case '/notices/favorite':
        return 'favorite';
      case '/notices/myNotices':
        return 'myNotices';
      default:
        return 'sell';
    }
  };

  const category = renderCategory();

  let { data: petsList, isLoading } = useGetNoticeQuery({ category, search });

  let { data: userAddsList } = useGetUserNoticesQuery(isLogged, {
    skip: !isLogged,
  });
  let { data: userFavoriteList } = useGetNoticeFavoritesQuery(isLogged, {
    skip: !isLogged,
  });

  useEffect(() => {
    if (
      category === 'sell' ||
      category === 'lostFound' ||
      category === 'inGoodHands'
    ) {
      if (!petsList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        petsList = null;
        setUsersPets(petsList);
        return;
      }
      const data = [...petsList];
      setUsersPets(data);
      return;
    } else if (category === 'myNotices') {
      if (!userAddsList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        userAddsList = null;
        setUsersPets(userAddsList);
        return;
      }
      const notices = [...userAddsList.data];
      setUsersPets(notices);
      return;
    } else if (category === 'favorite') {
      if (!userFavoriteList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        userFavoriteList = null;
        setUsersPets(userFavoriteList);
        return;
      }
      const notices = [...userFavoriteList.data];
      setUsersPets(notices);
      return;
    } else {
      return;
    }
  }, [category, petsList, userAddsList, userFavoriteList]);

  let pets = [];

  if (usersPets !== null) {
    pets = Object.values(usersPets);
    if (category === 'myNotices')
      pets = pets.map(el => ({ ...el, myads: true }));
  }

  const visiblePets = pets.filter(pet =>
    pet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ListBox>
        {isLoading ? (
          <Loader styles={{ marginTop: '60px' }} />
        ) : (
          <>
            {visiblePets.length > 0 ? (
              visiblePets.map(pet => (
                <NoticeCategoryItem pet={pet} key={pet._id} />
              ))
            ) : (
              <SearchPuppyWrap>
                <div>
                  <SearchPuppyText>No matches</SearchPuppyText>
                </div>
                <SearchPuppyImg />
              </SearchPuppyWrap>
            )}
          </>
        )}
      </ListBox>
    </>
  );
};

export default NoticesCategoriesList;
