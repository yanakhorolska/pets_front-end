import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import {
  useGetNoticeQuery,
  useGetNoticeFavoritesQuery,
  useGetUserNoticesQuery,
} from 'redux/fetchNotice';

import { getIsLogged } from 'redux/selectors';
import { ListBox } from 'pages/NoticesPage/NoticesPage.styled';
import { Loader } from 'components/Loader/Loader';

const NoticesCategoriesList = () => {
  const [usersPets, setUsersPets] = useState(null);
  const [searchParams] = useSearchParams();
  let search = searchParams.get('search');
  if (!search) search = '';

  const isLogged = useSelector(getIsLogged);

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
      case '/notices/own':
        return 'own';
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
      setUsersPets(data.reverse());
      return;
    } else {
      if (!userAddsList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        userAddsList = null;
        setUsersPets(userAddsList);
        return;
      } else {
        const notices = [...userAddsList.data];
        setUsersPets(notices.reverse());
      }
      if (!userFavoriteList) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        userFavoriteList = null;
        setUsersPets(userFavoriteList);
        return;
      } else {
        const notices = [...userFavoriteList.data];
        setUsersPets(notices.reverse());
        console.log(userFavoriteList);

        return;
      }
    }
  }, [category, petsList, userAddsList, userFavoriteList]);

  let pets = [];

  if (usersPets !== null) {
    pets = Object.values(usersPets);
    console.log(pets);
  }
  const visiblePets = pets.filter(pet =>
    pet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* {isLoading ? (
        <Loader styles={{ marginTop: '60px' }} />
      ) : ( */}
      <ListBox>
        {isLoading ? (
          <Loader styles={{ marginTop: '60px' }} />
        ) : (
          <>
            {visiblePets.map(pet => (
              <NoticeCategoryItem id={pet._id} key={pet._id} />
            ))}
          </>
        )}
      </ListBox>
    </>
  );
};

export default NoticesCategoriesList;
