import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useGetNoticeQuery } from 'redux/fetchNotice';

const NoticesCategoriesList = () => {
  const [searchParams] = useSearchParams();
  let search = searchParams.get('search');
  if (!search) search = '';

  const { pathname } = useLocation();
  const renderCategory = () => {
    switch (pathname) {
      case '/notices/sell':
        return 'sell';
      case '/notices/lost-found':
        return 'lost-found';
      case '/notices/for-free':
        return 'inGoodHands';
      case '/notices/favorite':
        return 'favorite';
      case '/notices/own':
        return 'own';
      default:
        return '';
    }
  };
  const category = renderCategory();

  let { data: petsList } = useGetNoticeQuery({ category, search });

  //дата.мап і відправити кожен елемент масиву

  if (petsList !== undefined) {
    const pets = Object.entries(petsList);
    console.log(pets.length);
    pets.map(pet => <NoticeCategoryItem key={pet[1]._id} pet={pet} />);
    return pets.map(pet => (
      <NoticeCategoryItem
        breed={pet[1].breed}
        location={pet[1].location}
        age={pet[1].age.months}
        price={pet[1].price}
        category={pet[1].category}
        key={pet[1].id}
      />
    ));
  }
};

export default NoticesCategoriesList;
