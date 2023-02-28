import { useMemo } from 'react';
// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import {
  useGetNoticeByIdQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} from '../../redux/fetchNotice';
import Icon from 'styles/Buttons/icons/index';
import {
  ModalBox,
  PetPhoto,
  Category,
  ColumnBox,
  PhotoBox,
  Descriptions,
  TitleCard,
  ButtonBox,
  ContactButton,
  AddButton,
  DescriptionItems,
  DescrCategory,
  DescrData,
  DescriptionLink,
  CloseButtonTop,
  CommentBox,
} from './ModalNotice.styled';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ModalNotice = ({ onClose, _id }) => {
  const { t } = useTranslation();
  const { data } = useGetNoticeByIdQuery(_id);
  const [addToFavorite] = useAddToFavoritesMutation();
  const [deleteFromFavorite] = useDeleteFromFavoritesMutation();
  const isLoggedIn = useAuth();

  const favText = useMemo(
    () => (!data ? '' : data.favorite ? t('deleteFrom') : t('addTo')),
    [data, t]
  );

  if (!data) {
    return;
  }

  const {
    title,
    category,
    petName,
    dateOfBirth,
    breed,
    sex,
    location,
    price,
    imageUrl,
    comment,
    email,
    phone,
    favorite,
  } = data;

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      Notify.warning('To add to favorites, please login or register.');
      return;
    }
    if (!favorite) {
      addToFavorite(_id).unwrap();
      return;
    }

    if (favorite) {
      deleteFromFavorite(_id).unwrap();
    }
  };

  const changeTextOfCategory = category => {
    if (category === 'sell') {
      return t('sellUp');
    }
    if (category === 'inGoodHands') {
      return t('inGoodHandsUp');
    }
    if (category === 'lostFound') {
      return t('lostFoundUp');
    }
  };

  const date = new Date(dateOfBirth).toLocaleDateString('en-GB');

  return (
    <>
      <ModalBox>
        <CloseButtonTop onClick={onClose} />

        <ColumnBox>
          <PhotoBox>
            <PetPhoto src={imageUrl} alt="photoPets" />
            <Category>{changeTextOfCategory(category)}</Category>
          </PhotoBox>
          <Descriptions>
            <li>
              <TitleCard>{title}</TitleCard>
            </li>
            <li>
              <DescriptionItems>
                <DescrCategory>{t('name')}:</DescrCategory>
                <DescrData>{petName}</DescrData>
              </DescriptionItems>
            </li>
            <li>
              <DescriptionItems>
                <DescrCategory>{t('birthday')}:</DescrCategory>
                <DescrData>{date}</DescrData>
              </DescriptionItems>
            </li>
            <li>
              <DescriptionItems>
                <DescrCategory>{t('breed')}:</DescrCategory>
                <DescrData>{breed}</DescrData>
              </DescriptionItems>
            </li>
            <li>
              <DescriptionItems>
                <DescrCategory>{t('place')}: </DescrCategory>
                <DescrData>{location}</DescrData>
              </DescriptionItems>
            </li>
            <li>
              <DescriptionItems>
                <DescrCategory>{t('sex')}:</DescrCategory>
                <DescrData>{sex}</DescrData>
              </DescriptionItems>
            </li>
            <li>
              <DescriptionLink href={`mailto:${email}`}>
                <DescrCategory>{t('email')}:</DescrCategory>
                <DescrData>{email}</DescrData>
              </DescriptionLink>
            </li>
            <li>
              <DescriptionLink href={`tel:${phone}`}>
                <DescrCategory>{t('phone')}:</DescrCategory>
                <DescrData>{phone}</DescrData>
              </DescriptionLink>
            </li>
            {category === 'sell' && (
              <li>
                <DescriptionItems>
                  <DescrCategory>{t('price')}:</DescrCategory>
                  <DescrData>{price} $</DescrData>
                </DescriptionItems>
              </li>
            )}
          </Descriptions>
        </ColumnBox>
        <CommentBox>
          <DescrCategory>{t('comments')}:</DescrCategory>
          <DescrData>{comment}</DescrData>
        </CommentBox>
        <ButtonBox>
          <li>
            <a href={`tel:${phone}`}>
              <ContactButton type="button">{t('contact')}</ContactButton>
            </a>
          </li>
          <li>
            <AddButton type="button" onClick={handleFavoriteClick}>
              {favText}
              {<Icon.Heart style={{ fill: '#f59256' }} />}
            </AddButton>
          </li>
          {/* {isLoggedIn ? (
            <li>
              <AddButton type="button" onClick={handleFavoriteClick}>
                {favText}
                {<Icon.Heart style={{ fill: '#f59256' }} />}
              </AddButton>
            </li>
          ) : (
            <li>
              <NavLink to="/login">
                <AddButton type="button">
                  {t('addTo')} {<Icon.Heart style={{ fill: '#f59256' }} />}
                </AddButton>
              </NavLink>
            </li>
          )} */}
        </ButtonBox>
      </ModalBox>
    </>
  );
};

export default ModalNotice;
