import React from 'react';
import {
  useGetUserPetsQuery,
  useRemovePetByIdMutation,
} from '../../redux/fetchUser';
import moment from 'moment';
import {
  PetBox,
  PetPhoto,
  PetList,
  PetDescripton,
  Span,
  Button,
  Cat,
} from './PetsList.styled';
import Icon from '../../styles/Buttons/icons/index';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { useTranslation } from 'react-i18next';

const PetsList = () => {
  const { t } = useTranslation();
  const [removePet] = useRemovePetByIdMutation();
  let { data, isLoading } = useGetUserPetsQuery();

  const convertDate = date => {
    return moment(date).format('DD.MM.YYYY');
  };

  const onClick = idPet => {
    Notiflix.Confirm.show(
      'I am your friend!',
      'Are you sure you want to delete my card??',
      'Yes',
      'No',
      async function okCb() {
        await removePet(idPet).unwrap();
      },
      function cancelCb() {
        return;
      },
      {
        width: '250px',
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#F59256',
        titleColor: '#F59256',
        titleFontSize: '24px',
        messageFontSize: '20px',
      }
    );
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {data.length > 0 ? (
            data.map(pet => (
              <PetBox key={pet.id}>
                <PetPhoto src={pet.avatarURL} alt="Pet Foto" />

                <Button type="submit" onClick={() => onClick(pet.id)}>
                  <Icon.Trash style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
                </Button>
                <PetList>
                  <li>
                    <PetDescripton>
                      <Span> {t('name')}:</Span> {pet.nickname}
                    </PetDescripton>
                  </li>
                  <li>
                    <PetDescripton>
                      <Span> {t('datePet')}:</Span>
                      {convertDate(pet.birthday)}
                    </PetDescripton>
                  </li>
                  <li>
                    <PetDescripton>
                      <Span> {t('breed')}:</Span> {pet.breed}
                    </PetDescripton>
                  </li>
                  <li>
                    <PetDescripton>
                      <Span> {t('comments')}:</Span>
                      {pet.comment}
                    </PetDescripton>
                  </li>
                </PetList>
              </PetBox>
            ))
          ) : (
            <PetBox>
              <Cat src={require('../../images/bgs/cards.JPG')} alt={'Card'} />
            </PetBox>
          )}
        </>
      )}
    </div>
    // )}
    // </>
  );
};

export default PetsList;