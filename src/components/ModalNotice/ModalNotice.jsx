import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import {
  useGetNoticeByIdQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} from '../../redux/fetchNotice';
import { Loader } from 'components/Loader/Loader';
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
} from './ModalNotice.styled';

const ModalNotice = ({ onClose, id }) => {
  const { data, isLoading } = useGetNoticeByIdQuery(id);
  const [addToFavorite] = useAddToFavoritesMutation();
  const [deleteFromFavorite] = useDeleteFromFavoritesMutation();
  // const [forFavorite, setForFavorite] = useState(false);
  //const [favText, setFavText] = useState('Add to');
  const { isLoggedIn } = useAuth();

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

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  let favText = '';
  console.log(data);
  favorite ? (favText = 'Delete from') : (favText = 'Add to');

  const handleFavoriteClick = async () => {
    if (!favorite) {
      console.log('favourite add');
      const data = await addToFavorite(id).unwrap();
      console.log(data, 'data add');
      favText = 'Add to';
      return;
    }

    if (favorite) {
      console.log('favourite delete');
      const data = await deleteFromFavorite(id).unwrap();
      console.log(data, 'data delete');
      favText = 'Delete from';
    }
  };

  const onAddToButtonClickLogin = () => {
    console.log('login');
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

  const date = new Date(dateOfBirth).toLocaleDateString('en-GB');

  return (
    <>
      {isLoading ? (
        <ModalBox>
          <Loader />
        </ModalBox>
      ) : (
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
                  <DescrCategory>Name:</DescrCategory>
                  <DescrData>{petName}</DescrData>
                </DescriptionItems>
              </li>
              <li>
                <DescriptionItems>
                  <DescrCategory>Birthday:</DescrCategory>
                  <DescrData>{date}</DescrData>
                </DescriptionItems>
              </li>
              <li>
                <DescriptionItems>
                  <DescrCategory>Breed:</DescrCategory>
                  <DescrData>{breed}</DescrData>
                </DescriptionItems>
              </li>
              <li>
                <DescriptionItems>
                  <DescrCategory>Place: </DescrCategory>
                  <DescrData>{location}</DescrData>
                </DescriptionItems>
              </li>
              <li>
                <DescriptionItems>
                  <DescrCategory>The sex:</DescrCategory>
                  <DescrData>{sex}</DescrData>
                </DescriptionItems>
              </li>
              <li>
                <DescriptionLink href={`mailto:${email}`}>
                  <DescrCategory>Email:</DescrCategory>
                  <DescrData>{email}</DescrData>
                </DescriptionLink>
              </li>
              <li>
                <DescriptionLink href={`tel:${phone}`}>
                  <DescrCategory>Phone:</DescrCategory>
                  <DescrData>{phone}</DescrData>
                </DescriptionLink>
              </li>
              {category === 'sell' && (
                <li>
                  <DescriptionItems>
                    <DescrCategory>Price:</DescrCategory>
                    <DescrData>{price}</DescrData>
                  </DescriptionItems>
                </li>
              )}
            </Descriptions>
          </ColumnBox>
          <p>
            <DescrCategory>Comments:</DescrCategory>
            <DescrData>{comment}</DescrData>
          </p>
          <ButtonBox>
            <li>
              <a href={`tel:${phone}`}>
                <ContactButton type="button">Contact</ContactButton>
              </a>
            </li>
            {isLoggedIn ? (
              <li>
                <AddButton type="button" onClick={handleFavoriteClick}>
                  {favText}
                  {<Icon.Heart style={{ fill: '#f59256' }} />}
                </AddButton>
              </li>
            ) : (
              <li>
                <NavLink to="/login">
                  <AddButton type="button" onClick={onAddToButtonClickLogin}>
                    Add to {<Icon.Heart style={{ fill: '#f59256' }} />}
                  </AddButton>
                </NavLink>
              </li>
            )}
          </ButtonBox>
        </ModalBox>
      )}
    </>
  );
};

export default ModalNotice;
