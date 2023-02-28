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
import { useTranslation } from 'react-i18next';
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useDeleteUserNoticeByIdMutation,
} from '../../redux/fetchNotice';
import { useAuth } from 'hooks/useAuth';
import { HeartButton } from '../../styles/Buttons/HeartButton/HeartButton';
import LearnMoreButtonComponent from '../../components/LearnMoreButton/LearnMoreButton';
import { TrashButton } from 'styles/Buttons/index';
import Icon from 'styles/Buttons/icons/index';
import Notiflix from 'notiflix';

export const NoticeCategoryItem = ({ pet }) => {
  const [addToFavorite] = useAddToFavoritesMutation();
  const [deleteFromFavorite] = useDeleteFromFavoritesMutation();
  const [deleteFromNotises] = useDeleteUserNoticeByIdMutation();
  const isLoggedIn = useAuth();
  const { t } = useTranslation();

  const fav = useMemo(() => {
    if (pet) {
      return pet.favorite;
    }
  }, [pet]);

  if (!pet) {
    return;
  }

  const {
    _id,
    title,
    category,
    dateOfBirth,
    breed,
    location,
    price,
    imageUrl,
    favorite,
    myads,
  } = pet;

  const handleFavoriteClick = () => {
    if (!favorite) {
      addToFavorite(_id).unwrap();
      return;
    }

    if (favorite) {
      deleteFromFavorite(_id).unwrap();
    }
  };

  const onAddToButtonClickLogin = () => {
    Notiflix.Notify.warning('To add to favorites, please login or register.');
  };

  const handleNoticeClick = () => {
    Notiflix.Confirm.show(
      'Аnimal is the best friend!',
      'Are you sure you want to delete this ad??',
      'Yes',
      'No',
      async function okCb() {
        await deleteFromNotises(_id).unwrap();
        return;
      },
      function cancelCb() {
        return;
      },
      {
        width: '250px',
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#F59256',
        titleColor: '#F59256',
        titleFontSize: '22px',
        messageFontSize: '20px',
      }
    );
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
    if (myads === true) {
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
              <NoticeInfoListItemCategory>
                {t('breed')}:
              </NoticeInfoListItemCategory>
              <NoticeInfoListItemData>{breed}</NoticeInfoListItemData>
            </NoticeInfoListItem>
            <NoticeInfoListItem>
              <NoticeInfoListItemCategory>
                {t('place')}:
              </NoticeInfoListItemCategory>
              <NoticeInfoListItemData>{location}</NoticeInfoListItemData>
            </NoticeInfoListItem>
            <NoticeInfoListItem>
              <NoticeInfoListItemCategory>
                {t('age')}:
              </NoticeInfoListItemCategory>
              <NoticeInfoListItemData>
                {timeSinceCurrentDate(dateOfBirth)}
              </NoticeInfoListItemData>
            </NoticeInfoListItem>
            {price ? (
              <NoticeInfoListItem>
                <NoticeInfoListItemCategory>
                  {t('price')}:
                </NoticeInfoListItemCategory>
                <NoticeInfoListItemData>{price} $</NoticeInfoListItemData>
              </NoticeInfoListItem>
            ) : null}
          </NoticeInfoList>
          <LearnBtnWrap>
            <LearnMoreButtonComponent _id={_id} />
            {deleteButton() && <TrashButton onClick={handleNoticeClick} />}
          </LearnBtnWrap>
        </ListInfoWrap>
      </NoticeInfoWrap>
    </NoticeItem>
  );
};
