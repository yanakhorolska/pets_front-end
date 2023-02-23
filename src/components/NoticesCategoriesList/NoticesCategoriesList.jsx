// --- НЕ ВИДАЛЯТИ ДО ДЕПЛОЯ --- //

// import React from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
// import { useGetNoticeQuery } from 'redux/fetchNotice';

// const NoticesCategoriesList = () => {
//   const [searchParams] = useSearchParams();
//   let search = searchParams.get('search');
//   if (!search) search = '';

//   const { pathname } = useLocation();
//   const renderCategory = () => {
//     switch (pathname) {
//       case '/notices/sell':
//         return 'sell';
//       case '/notices/lost-found':
//         return 'lost-found';
//       case '/notices/for-free':
//         return 'inGoodHands';
//       case '/notices/favorite':
//         return 'favorite';
//       case '/notices/own':
//         return 'own';
//       default:
//         return '';
//     }
//   };

//   // при кліку на кнопку ще раз перебрати масив, і обрати елементи, у яких категорія = селл

//   // перебрати масив, витягнути слово

//   // якщо об'єкт.категорія === заносим в масив і виводимо
//   // якщо не рівність - не виводимо

//   // const petsForSale = pets.filter((pet.category = cell));

//   const category = renderCategory();

//   let { data: petsList } = useGetNoticeQuery({ category, search });

//   //витягнути селл з масиву

//   // const petsForSale = pets.filter(pet => (pet.category = sell));

//   if (petsList !== undefined) {
//     const pets = Object.entries(petsList);
//     console.log(pets.length);
//     pets.map(pet => <NoticeCategoryItem key={pet[1]._id} pet={pet} />);
//     return pets.map(pet => (
//       <NoticeCategoryItem
//         breed={pet[1].breed}
//         location={pet[1].location}
//         age={pet[1].age.months}
//         price={pet[1].price}
//         category={pet[1].category}
//         key={pet[1].id}
//       />
//     ));
//   }
// };

// //   let { data: petsList } = useGetNoticeQuery({ category, search });

// //   // фильтруем список животных по выбранной категории
// //   let pets = [];
// //   if (category === 'sell') {
// //     pets = petsList.filter(pet => pet.category === 'sell');
// //   } else if (category === 'lost-found') {
// //     pets = petsList.filter(pet => pet.category === 'lost-found');
// //   } else if (category === 'inGoodHands') {
// //     pets = petsList.filter(pet => pet.category === 'inGoodHands');
// //   } else {
// //     pets = petsList;
// //   }

// //   return pets.map(pet => (
// //     <NoticeCategoryItem
// //       breed={pet.breed}
// //       location={pet.location}
// //       age={pet.age.months}
// //       price={pet.price}
// //       category={pet.category}
// //       key={pet.id}
// //     />
// //   ));
// // };

// export default NoticesCategoriesList;

// === ===  var2 (всеодно летить 400, але після редагування ендпойнтів взагалі не працює... хулєра(( ))) === ===//

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
        return 'category/sell';
      case '/notices/lost-found':
        return 'category/lostFound';
      case '/notices/for-free':
        return 'category/inGoodHands';
      case '/favorite':
        return 'favorite';
      case '/own':
        return 'own';
      default:
        return 'category/sell';
    }
  };

  const category = renderCategory();
  console.log(category);

  const { data: petsList } = useGetNoticeQuery({ category, search });

  // фільтруємо тварин по категоріям
  let pets = [];
  if (Array.isArray(petsList)) {
    if (category === 'sell') {
      pets = petsList.filter(pet => pet.category === 'sell');
    } else if (category === 'lost-found') {
      pets = petsList.filter(pet => pet.category === 'lostFound');
    } else if (category === 'inGoodHands') {
      pets = petsList.filter(pet => pet.category === 'inGoodHands');
    } else {
      pets = petsList;
    }
  }
  // якщо пошук !== '' кинути масив який фільтрую

  return (
    <>
      {Array.isArray(pets) &&
        pets.map(pet => (
          <NoticeCategoryItem
            _id={pet._id}
            breed={pet.breed}
            location={pet.location}
            age={pet.age.months}
            price={pet.price}
            category={pet.category}
            key={pet.id}
          />
        ))}
    </>
  );
};

export default NoticesCategoriesList;

// === a це варіант з юзефектом === //

// import React, { useEffect } from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { NoticeCategoryItem } from 'components/NoticeCategoryItem/NoticeCategoryItem';
// import { useGetNoticeQuery } from 'redux/fetchNotice';

// const NoticesCategoriesList = () => {
//   const [searchParams] = useSearchParams();
//   let search = searchParams.get('search');
//   if (!search) search = '';

//   const { pathname } = useLocation();

//   const renderCategory = () => {
//     switch (pathname) {
//       case '/sell':
//         return 'sell';
//       case '/lost-found':
//         return 'lost-found';
//       case '/for-free':
//         return 'inGoodHands';
//       case '/favorite':
//         return 'favorite';
//       case '/own':
//         return 'own';
//       default:
//         return '';
//     }
//   };

//   const category = renderCategory();

//   // Запит до сервера за списком тварин зі змінною категорією
//   const { data: petsList, refetch } = useGetNoticeQuery({ category, search });

//   // Оновлюємо компонент при зміні категорії в pathname
//   useEffect(() => {
//     refetch();
//   }, [pathname, refetch]);

//   // фільтруємо тварин по категоріям
//   let pets = [];
//   if (Array.isArray(petsList)) {
//     if (category === 'sell') {
//       pets = petsList.filter(pet => pet.category === 'sell');
//     } else if (category === 'lost-found') {
//       pets = petsList.filter(pet => pet.category === 'lost-found');
//     } else if (category === 'inGoodHands') {
//       pets = petsList.filter(pet => pet.category === 'inGoodHands');
//     } else {
//       pets = petsList;
//     }
//   }

//   return (
//     <>
//       {Array.isArray(pets) &&
//         pets.map(pet => (
//           <NoticeCategoryItem
//             _id={pet._id}
//             breed={pet.breed}
//             location={pet.location}
//             age={pet.age.months}
//             price={pet.price}
//             category={pet.category}
//             key={pet.id}
//           />
//         ))}
//     </>
//   );
// };

// export default NoticesCategoriesList;
