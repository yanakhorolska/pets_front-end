import { useState } from 'react';
import { useGetNoticeByIdQuery } from '../../redux/noticeByIdApi';
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
  Text,
  ButtonBox,
  ContactButton,
  AddButton,
} from './ModalNotice.styled';

const ModalNotice = onClose => {
  const { data, isError, isLoading } = useGetNoticeByIdQuery(
    '63f4d76951b8df42bda200c2'
    // '63f4d89051b8df42bda200d5'
  );
  console.log(data);
  console.log(isLoading);

  if (!data) {
    console.log('empty');
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
    owner,
    email,
    phone,
  } = data;

  return (
    <>
      {isLoading ? (
        <ModalBox>
          <Loader />
        </ModalBox>
      ) : (
        <ModalBox>
          {/* <CloseBox>
            <CloseButton
              onClose={onClose}
              className={null}
              style={{
                position: 'absolute',
                top: 23,
                right: 23,
                width: 34,
                height: 34,
              }}
            />
          </CloseBox> */}
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
                <p>
                  <b>Name:</b> {petName}
                </p>
              </li>
              <li>
                <p>
                  <b>Birthday:</b> {dateOfBirth}
                </p>
              </li>
              <li>
                <p>
                  <b>Breed:</b> {breed}
                </p>
              </li>
              <li>
                <p>
                  <b>Place: </b>
                  {location}
                </p>
              </li>
              <li>
                <p>
                  <b>The sex:</b> {sex}
                </p>
              </li>
              <li>
                <a href="mailto:nowhere@mozilla.org">
                  <b>Email:</b> {email}
                </a>
              </li>
              <li>
                <a href="tel:+49.157.0156">
                  <b>Phone:</b> {phone}
                </a>
              </li>
              {category === 'sell' && (
                <li>
                  <p>
                    <b>Price:</b> {price}
                  </p>
                </li>
              )}
            </Descriptions>
          </ColumnBox>
          <Text>
            <b>Comments:</b> {comment}
          </Text>
          <ButtonBox>
            <li>
              <a href="tel:+49.157.0156">
                <ContactButton type="button">Contact</ContactButton>
              </a>
            </li>
            <li>
              <AddButton type="button">
                Add to {<Icon.Heart style={{ fill: '#f59256' }} />}
              </AddButton>
            </li>
          </ButtonBox>
        </ModalBox>
      )}
    </>
  );
};

export default ModalNotice;
