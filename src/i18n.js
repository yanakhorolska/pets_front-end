import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          titleMain: 'Take good care of your small pets',
          //News
          titleNews: 'News',
          noNews: 'No news found',
          prev: 'Prev',
          next: 'Next',
          back: 'Back',
          readMore: 'Read More',
          search: 'Search',
          // Notices
          noticesTitle: 'Find your favorite pet',
          noticesHeaderTitle: 'Find Pet',
          learnMore: 'Learn more',
          //Friends
          friendsTitle: 'Our Friends',
          phone: 'Phone',
          email: 'Email',
          address: 'Address',
          time: 'Time',
          //Login&Registration
          login: 'Login',
          registration: 'Registration',
          register: 'Register',
          alreadyQuestion: 'Already have an account?',
          dontQuestion: "Don't have an account?",
          password: 'Password',
          confirmPassword: 'Confirm Password',
          name: 'Name',
          city: 'City',
          mobilePhone: 'Mobile phone',
          //Account
          account: 'Аccount',
          myInfo: 'My information',
          myPets: 'My pets',
          birthday: 'Birthday',
          logOut: 'Log out',
          addPet: 'Add pet',
          namePetPlaceholder: 'Type name pet',
          namePet: 'Name pet',
          datePetPlaceholder: 'Type date of birth',
          datePet: 'Date of birth',
          breedPetPlaceholder: 'Type breed',
          breed: 'Breed',
          cancel: 'Cancel',
          comments: 'Comments',
          typeComments: 'Type comments',
          addText: 'Add photo and some comments',
          done: 'Done',
          editPhoto: 'Edit photo',
          sex: 'Sex',
          male: 'Male',
          female: 'Female',
          contact: 'Contact',
          price: 'Price',
          addTitle: 'Title of ad',
          addTextCard: 'This announcement may make someone even happier!',
          lostFound: 'lost/found',
          inGoodHands: 'in good hands',
          location: 'Location',
          typeLocation: 'Type location',
          place: 'Place',
          typePrice: 'Type price',
          sell: 'sell',
          loadImage: "Load the pet's image",
          typeBreed: 'Type breed',
          ddmmyy: 'DD.MM.YYYY',
          titleAddPlaceholder: 'Type title of ad',
          addTo: 'Add to',
          deleteFrom: 'Delete from',
          age: 'Age',
          myAds: 'My Ads',
          myFavAds: 'Favorite ads',
          lostFoundUp: 'Lost/Found',
          inGoodHandsUp: 'In good hands',
          sellUp: 'Sell',
        },
      },
      ua: {
        translation: {
          titleMain: 'Доглядайте за своїми улюбленцями',
          //News
          titleNews: 'Новини',
          noNews: 'Новин не знайдено',
          prev: 'Назад',
          next: 'Далі',
          back: 'Назад',
          readMore: 'Докладніше',
          search: 'Пошук',
          // Notices
          noticesTitle: 'Знайдіть свого вихованця',
          noticesHeaderTitle: 'Пошук вихованця',
          learnMore: 'Докладніше',
          //Friends
          friendsTitle: 'Друзі',
          phone: 'Телефон',
          email: 'Пошта',
          address: 'Адреса',
          time: 'Час',
          //Login&Registration
          login: 'Логін',
          registration: 'Реєстрація',
          register: 'Зареєструватися',
          alreadyQuestion: 'Вже є аккаунт?',
          dontQuestion: 'Немає аккаунта?',
          password: 'Пароль',
          confirmPassword: 'Пiдтвердіть пароль',
          name: "Ім'я",
          city: 'Місто',
          mobilePhone: 'Мобільний телефон',

          //Account
          account: 'Аккаунт',
          myInfo: 'Моя інформація',
          myPets: 'Мої улюбленці',
          place: 'Місце',
          birthday: 'Дата народження',
          logOut: 'Вийти',
          addPet: 'Додати',
          namePetPlaceholder: "Введіть ім'я улюбленця",
          namePet: "Ім'я улюбленця",
          datePetPlaceholder: 'Введіть дату народження',
          datePet: 'Дата народження',
          breedPetPlaceholder: 'Введіть породу',
          breed: 'Порода',
          cancel: 'Відміна',
          comments: 'Коментарі',
          typeComments: 'Введіть коментар',
          addText: 'Додайте фото та коментарі',
          done: 'Готово',
          editPhoto: 'Редагувати',
          sex: 'Стать',
          contact: 'Контакт',
          male: 'Чоловіча',
          female: 'Жіноча',
          location: 'Локація',
          typeLocation: 'Введіть локацію',
          price: 'Ціна',
          typePrice: 'Введіть ціну',
          addTitle: 'Назва оголошення',
          addTextCard: 'Це оголошення зробить когось щасливим!',
          lostFound: 'загублені/знайдені',
          inGoodHands: 'в добрих руках',
          sell: 'продаж',
          loadImage: 'Завантажте фото',
          typeBreed: 'Введіть породу',
          ddmmyy: 'ДД.ММ.РР',
          titleAddPlaceholder: 'Введіть назву оголошення',
          addTo: 'Додати',
          deleteFrom: 'Видалити з',
          age: 'Вік',
          myAds: 'Мої',
          myFavAds: 'Улюблені',
          lostFoundUp: 'Загублені/Знайдені',
          inGoodHandsUp: 'В добрих руках',
          sellUp: 'Продаж',
        },
      },
    },
  });

export default i18n;
