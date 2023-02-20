import numWords from 'num-words';
import {
  NoticeItem,
  NoticeImg,
  NoticeInfoBox,
  NoticeInfoList,
  NoticeInfoListItem,
  NoticeInfoListItemCategory,
  NoticeInfoListItemData,
  CategoryTag,
  FavButton,
} from './NoticeCategoryItemStyled';
import {HeartButton} from "../../styles/Buttons/HeartButton/HeartButton"
import { LearnMoreBtn } from "../../styles/Buttons/LearnMoreButton/LearnMoreButton"
import {TrashBtn} from "../../styles/Buttons/TrashButton/TrashButton"
export const NoticeCategoryItem = props => {
  const {
    _id,
    name,
    owner,
    sex,
    comments,
    category,
    imageUrl,
    title,
    breed,
    place,
    price,
    age,
    refetchUser,
    isLogged,
  } = props;


 
    
  return (
    <NoticeItem>
          <NoticeImg src={imageUrl} alt={title} />
      <NoticeInfoBox>
              <h4>{title }</h4>
        <NoticeInfoList>
          <NoticeInfoListItem>
            <NoticeInfoListItemCategory>Breed:</NoticeInfoListItemCategory>
                      <NoticeInfoListItemData>{breed }</NoticeInfoListItemData>
          </NoticeInfoListItem>
          <NoticeInfoListItem>
            <NoticeInfoListItemCategory>Place:</NoticeInfoListItemCategory>
                      <NoticeInfoListItemData>{place }</NoticeInfoListItemData>
          </NoticeInfoListItem>
          <NoticeInfoListItem>
            <NoticeInfoListItemCategory>Age:</NoticeInfoListItemCategory>
                      <NoticeInfoListItemData>{age}</NoticeInfoListItemData>
          </NoticeInfoListItem>
                  { price ? <NoticeInfoListItem>
                      <NoticeInfoListItemCategory>Price:</NoticeInfoListItemCategory>
                      <NoticeInfoListItemData>{price}</NoticeInfoListItemData>
                  </NoticeInfoListItem> :  null}
        </NoticeInfoList>
              <LearnMoreBtn>Learn More</LearnMoreBtn>
              { /* {<TrashBtn>Delete 
              </TrashBtn>} */}
      </NoticeInfoBox>
      <CategoryTag>
              <p>{category}</p>
      </CategoryTag>
      <HeartButton/>
    </NoticeItem>
  );
};
