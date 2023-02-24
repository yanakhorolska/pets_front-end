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

  return (
    <NoticeItem>
      <ImgWrap>
        <NoticeImg src={imageUrl} alt={title} />
        <CategoryTag> {category}</CategoryTag>
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
              <NoticeInfoListItemData>{dateOfBirth}</NoticeInfoListItemData>
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
