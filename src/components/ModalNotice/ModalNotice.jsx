import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import {
  useGetNoticeByIdQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} from '../../redux/fetchNotice';
import { Loader } from 'components/Loader/Loader';
import { CloseButton } from 'styles/Buttons/index';
import Icon from 'styles/Buttons/icons/index';
import {
  ModalBox,
  CloseBox,
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
} from './ModalNotice.styled';

const ModalNotice = ({ onClose, id }) => {
  const { data, isLoading } = useGetNoticeByIdQuery(id);
  const [addToFavorite] = useAddToFavoritesMutation();
  const [deleteFromFavorite] = useDeleteFromFavoritesMutation();
  const [forFavorite, setForFavorite] = useState(false);
  const isLoggedIn = useAuth();

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
  } = data;

  console.log(data);

  const handleFavoriteClick = async () => {
    if (!forFavorite) {
      setForFavorite(true);
      console.log('favourite add');
      const data = await addToFavorite(id).unwrap();
      console.log(data, 'data');
      return;
    } else {
      setForFavorite(false);
      console.log('favourite add');
      const data = await deleteFromFavorite(id).unwrap();
      console.log(data, 'data');
    }
  };

  const onAddToButtonClickLogin = () => {
    console.log('login');
  };

  return (
    <>
      {isLoading ? (
        <ModalBox>
          <Loader />
        </ModalBox>
      ) : (
        <ModalBox>
          <CloseBox>
            <CloseButton
              onClick={onClose}
              className={null}
              style={{
                position: 'absolute',
                top: 23,
                right: 23,
                width: 34,
                height: 34,
              }}
            />
          </CloseBox>
          <ColumnBox>
            <PhotoBox>
              <PetPhoto src={imageUrl} alt="photoPets" />
              <Category>{category}</Category>
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
                  <DescrData>{dateOfBirth}</DescrData>
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
                <DescriptionLink href="mailto:nowhere@mozilla.org">
                  <DescrCategory>Email:</DescrCategory>
                  <DescrData>{email}</DescrData>
                </DescriptionLink>
              </li>
              <li>
                <DescriptionLink href="tel:+49.157.0156">
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
              <a href="tel:+49.157.0156">
                <ContactButton type="button">Contact</ContactButton>
              </a>
            </li>
            {isLoggedIn ? (
              <li>
                <AddButton type="button" onClick={handleFavoriteClick}>
                  {forFavorite ? 'Delete from' : 'Add to'}
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
