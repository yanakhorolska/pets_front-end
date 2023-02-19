// import React from 'react';
// import { useLocation, useSearchParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// // import NoticeCategoryItem from 'components/Notices/NoticeCategoryItem';

// import {
//   useGetNoticeQuery,
//   useGetNoticeFavoritesQuery,
//   useGetUserNoticesQuery,
// } from 'redux/fetchNotice';
// import { useGetCurrentUserQuery } from 'redux/fetchUser';
// import { getIsLogged } from 'redux/selectors';

// const NoticesCategoriesList = () => {
//   const [pets, setPets] = useState(null);
//   const [searchParams] = useSearchParams();
//   let search = searchParams.get('search');
//   if (!search) search = '';

//   const { pathname } = useLocation();

//   const isLogged = useSelector(getIsLogged);

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
//         return 'sell';
//     }
//   };
//   const category = renderCategory();

//   let { refetch } = useGetCurrentUserQuery(isLogged, { skip: !isLogged });

//   let { data: petsList } = useGetNoticeQuery({ category, search });

//   let { data: favoritesList } = useGetNoticeFavoritesQuery(isLogged, {
//     skip: !isLogged,
//   });

//   let { data: userNoticesList } = useGetUserNoticesQuery(isLogged, {
//     skip: !isLogged,
//   });

//   useEffect(() => {
//     if (petsList || favoritesList || userNoticesList) {
//       if (
//         category === 'sell' ||
//         category === 'lost-found' ||
//         category === 'inGoodHands'
//       ) {
//         if (!petsList) {
//           petsList = null;
//           setPets(petsList);
//           return;
//         }
//         const data = [...petsList.data];
//         setPets(data.reverse());
//         return;
//       } else if (category === 'favorite') {
//         if (!favoritesList) {
//           favoritesList = null;
//           setPets(favoritesList);
//           return;
//         }
//         const favorites = [...favoritesList.favorites];
//         setPets(favorites.reverse());
//         return;
//       } else {
//         if (!userNoticesList) {
//           userNoticesList = null;
//           setPets(userNoticesList);
//           return;
//         }
//         const notices = [...userNoticesList.notices];
//         setPets(notices.reverse());
//         return;
//       }
//     } else {
//       return;
//     }
//   }, [category, petsList, favoritesList, userNoticesList]);

//   return (
//     <div>
//       {pets && pets.length !== 0 ? (
//         <ul>
//           {pets.map(
//             ({
//               _id,
//               name,
//               owner,
//               comments = 'There is no comments',
//               sex,
//               category,
//               petImage,
//               title,
//               breed,
//               location,
//               dateOfBirth,
//               price,
//             }) => {
//               return (
//                 <NoticeCategoryItem
//                   key={_id}
//                   _id={_id}
//                   name={name}
//                   owner={owner}
//                   sex={sex}
//                   comments={comments}
//                   category={category}
//                   imageUrl={petImage}
//                   title={title}
//                   breed={breed}
//                   place={location}
//                   price={price}
//                   age={dateOfBirth}
//                   refetchUser={refetch}
//                   isLogged={getIsLogged}
//                 />
//               );
//             }
//           )}
//         </ul>
//       ) : (
//         <p>There are no advertisements in this category</p>
//       )}
//     </div>
//   );
// };

// export default NoticesCategoriesList;
