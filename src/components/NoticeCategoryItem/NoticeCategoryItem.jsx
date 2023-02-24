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
} from './NoticeCategoryItemStyled';
import {
  useGetNoticeByIdQuery,
  // useAddToFavoritesMutation,
  // useDeleteFromFavoritesMutation,
} from '../../redux/fetchNotice';
import { HeartButton } from '../../styles/Buttons/HeartButton/HeartButton';
// import { TrashBtn } from 'styles/Buttons/TrashButton/TrashButton.styled';
import LearnMoreButtonComponent from '../../components/LearnMoreButton/LearnMoreButton';

export const NoticeCategoryItem = ({ id }) => {
  const { data } = useGetNoticeByIdQuery(id);

  if (!data) {
    return;
  }

  const { title, category, dateOfBirth, breed, location, price, imageUrl } =
    data;

  const changeTextOfCategory = (category) => {
    if (category === "sell") {
      return "Sell"
    }
    if (category === "inGoodHands") {
      return "In good hands"
    }
     if (category === "lostFound") {
      return "Lost & Found"
    }
  }


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

  return (
    <NoticeItem>
      <ImgWrap>
        <NoticeImg src={imageUrl} alt={title} />
        <CategoryTag> {changeTextOfCategory(category)}</CategoryTag>
        <HeartBtnWrap>
          <HeartButton />
        </HeartBtnWrap>
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
              <NoticeInfoListItemData>{timeSinceCurrentDate(dateOfBirth)}</NoticeInfoListItemData>
            </NoticeInfoListItem>
            {price ? (
              <NoticeInfoListItem>
                <NoticeInfoListItemCategory>Price:</NoticeInfoListItemCategory>
                <NoticeInfoListItemData>{price}</NoticeInfoListItemData>
              </NoticeInfoListItem>
            ) : null}
          </NoticeInfoList>
          <LearnBtnWrap>
            <LearnMoreButtonComponent id={id} />
          </LearnBtnWrap>
          {/* {<TrashBtn>Delete</TrashBtn>} */}
        </ListInfoWrap>
      </NoticeInfoWrap>
    </NoticeItem>
  );
};
