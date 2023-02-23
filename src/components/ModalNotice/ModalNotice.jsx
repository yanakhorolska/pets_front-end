// import { useState } from 'react';
import { useGetNoticeByIdQuery } from '../../redux/noticeByIdApi';
import { useAddToFavoritesMutation } from '../../redux/fetchNotice';
import { Loader } from 'components/Loader/Loader';
import { CloseButton } from 'styles/Buttons/index';
import Icon from 'styles/Buttons/icons/index';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';

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

const ModalNotice = ({ onClose, id, owner }) => {
  const isLoggedIn = useAuth();
  const { data, isLoading } = useGetNoticeByIdQuery(id);
  const [addToFavorite] = useAddToFavoritesMutation(owner);
  console.log(data);

  if (!data) {
    console.log('empty');
    return;
  }
  // console.log(owner, 'owner');

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

  const handleFavoriteClick = async () => {
    console.log('favourite');
    const data = await addToFavorite(owner).unwrap();
    console.log(data, 'data');
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
                  Add to {<Icon.Heart style={{ fill: '#f59256' }} />}
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
