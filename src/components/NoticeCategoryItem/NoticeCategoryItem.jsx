import {
  NoticeItem,
  NoticeImg,
  NoticeInfoBox,
  NoticeInfoList,
  NoticeInfoListItem,
  NoticeInfoListItemCategory,
  NoticeInfoListItemData,
  CategoryTag,
} from './NoticeCategoryItemStyled';
import { HeartButton } from '../../styles/Buttons/HeartButton/HeartButton';
import { TrashBtn } from 'styles/Buttons/TrashButton/TrashButton.styled';
import { LearnMoreButtonComponent } from '../../components/LearnMoreButton/LearnMoreButton';
export const NoticeCategoryItem = props => {
  const {
    _id,
    // petName,
    // owner,
    // sex,
    // comment,
    category,
    imageUrl,
    title,
    breed,
    location,
    price,
    age,
    // refetchUser,
    // isLogged,
  } = props;

  return (
    <NoticeItem>
      <NoticeImg src={imageUrl} alt={title} />
      <NoticeInfoBox>
        <h4>{title}</h4>
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
            <NoticeInfoListItemData>{age}</NoticeInfoListItemData>
          </NoticeInfoListItem>
          {price ? (
            <NoticeInfoListItem>
              <NoticeInfoListItemCategory>Price:</NoticeInfoListItemCategory>
              <NoticeInfoListItemData>{price}</NoticeInfoListItemData>
            </NoticeInfoListItem>
          ) : null}
        </NoticeInfoList>
        <LearnMoreButtonComponent id={_id}>Learn More</LearnMoreButtonComponent>
        {/* {<TrashBtn>Delete</TrashBtn>} */}
      </NoticeInfoBox>
      <CategoryTag>
        <p>{category}</p>
      </CategoryTag>
      <HeartButton />
    </NoticeItem>
  );
};
