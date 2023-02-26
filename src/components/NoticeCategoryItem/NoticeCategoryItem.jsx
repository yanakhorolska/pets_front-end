import { useMemo } from 'react';
import {
  NoticeItem,
  ImgWrap,
  NoticeImg,
  CategoryTag,
  HeartBtnWrap,
  NoticeInfoWrap,
  NoticeTitle,
  ListInfoWrap,
  NoticeInfoList,
  NoticeInfoListItem,
  NoticeInfoListItemCategory,
  NoticeInfoListItemData,
  LearnBtnWrap,
  SmallHeartBox,
} from './NoticeCategoryItemStyled';
import {
  useGetNoticeByIdQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useDeleteUserNoticeByIdMutation,
} from '../../redux/fetchNotice';
import { useAuth } from 'hooks/useAuth';
import { useUser } from 'hooks/useUser';
import { HeartButton } from '../../styles/Buttons/HeartButton/HeartButton';
import LearnMoreButtonComponent from '../../components/LearnMoreButton/LearnMoreButton';
import { TrashButton } from 'styles/Buttons/index';
import Icon from 'styles/Buttons/icons/index';
import Notiflix from 'notiflix';

export const NoticeCategoryItem = ({ id }) => {
  const { data } = useGetNoticeByIdQuery(id);
  const [addToFavorite] = useAddToFavoritesMutation();
  const [deleteFromFavorite] = useDeleteFromFavoritesMutation();
  const [deleteFromNotises] = useDeleteUserNoticeByIdMutation();
  const { isLoggedIn } = useAuth();
  const { userData } = useUser();

  const fav = useMemo(() => {
    if (data) {
      return data.favorite;
    }
  }, [data]);

  if (!data) {
    return;
  }

  const {
    title,
    category,
    dateOfBirth,
    breed,
    location,
    price,
    imageUrl,
    favorite,
    email,
  } = data;

  const handleFavoriteClick = () => {
    if (!favorite) {
      addToFavorite(id).unwrap();
      return;
    }

    if (favorite) {
      deleteFromFavorite(id).unwrap();
    }
  };

  const onAddToButtonClickLogin = () => {
    Notiflix.Notify.warning('Please login to add', {
      background: '#000000',
      textColor: '#fff',
      childClassName: 'notiflix-notify-warning',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-exclamation-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: '#31ee8657',
    });
  };

  const handleNoticeClick = () => {
    deleteFromNotises(id).unwrap();
    return;
  };

  const changeTextOfCategory = category => {
    if (category === 'sell') {
      return 'Sell';
    }
    if (category === 'inGoodHands') {
      return 'In good hands';
    }
    if (category === 'lostFound') {
      return 'Lost & Found';
    }
  };

  function timeSinceCurrentDate(age) {
    const currentDate = new Date();
    const inputDate = new Date(age);
    const delta = currentDate - inputDate;

    const years = Math.floor(delta / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(delta / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor(delta / (24 * 60 * 60 * 1000));

    if (years > 0) {
      return `${years} years `;
    } else if (months > 0) {
      return `${months} months `;
    } else {
      return `${days} days `;
    }
  }

  const deleteButton = () => {
    if (userData.email === email) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <NoticeItem>
      <ImgWrap>
        <NoticeImg src={imageUrl} alt={title} />
        <CategoryTag>{changeTextOfCategory(category)}</CategoryTag>
        <HeartBtnWrap>
          {isLoggedIn ? (
            <HeartButton type="button" onClick={handleFavoriteClick} />
          ) : (
            <HeartButton type="button" onClick={onAddToButtonClickLogin} />
          )}
        </HeartBtnWrap>
        {fav && (
          <SmallHeartBox>
            <Icon.SmallHeart
              style={{ fill: '#f59256' }}
              onClick={handleFavoriteClick}
            />
          </SmallHeartBox>
        )}
      </ImgWrap>
      <NoticeInfoWrap>
        <NoticeTitle>{title}</NoticeTitle>
        <ListInfoWrap>
          <NoticeInfoList>
            <NoticeInfoListItem>
              <NoticeInfoListItemCategory>Breed:</NoticeInfoListItemCategory>
              <NoticeInfoListItemData>{breed}</NoticeInfoListItemData>
            </NoticeInfoListItem>
            <NoticeInfoListItem>
              <NoticeInfoListItemCategory>Place:</NoticeInfoListItemCategory>
              <NoticeInfoListItemData>{location}</NoticeInfoListItemData>
            </NoticeInfoListItem>
            <NoticeInfoListItem>
              <NoticeInfoListItemCategory>Age:</NoticeInfoListItemCategory>
              <NoticeInfoListItemData>
                {timeSinceCurrentDate(dateOfBirth)}
              </NoticeInfoListItemData>
            </NoticeInfoListItem>
            {price ? (
              <NoticeInfoListItem>
                <NoticeInfoListItemCategory>Price:</NoticeInfoListItemCategory>
                <NoticeInfoListItemData>{price} $</NoticeInfoListItemData>
              </NoticeInfoListItem>
            ) : null}
          </NoticeInfoList>
          <LearnBtnWrap>
            <LearnMoreButtonComponent id={id} />
            {deleteButton() && <TrashButton onClick={handleNoticeClick} />}
          </LearnBtnWrap>
        </ListInfoWrap>
      </NoticeInfoWrap>
    </NoticeItem>
  );
};
