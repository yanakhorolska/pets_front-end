
import {
  FriendsItem,
  ItemTitle,
  FriendsItemBox,
  FriendsImgBox,
  FriendsImage,
  ContactsList,
  ContactsWrap,
    ContactsLink,
  NoInfo,
  Wrap
} from './OurFriendsItemStyled';
import { WorkTimePopUp } from "../WorkTimePopUp/WorkTimePopUp"

export const OurFriendsItem = ({ friendsData }) => {
    const { title, url, addressUrl, imageUrl,
        address, phone, email, workDays } =
    friendsData;

  return (
    <FriendsItem>
      <ItemTitle href={url} target="_blank" rel="noreferrer noopener">
        {title}
          </ItemTitle>
          <FriendsItemBox>
              <FriendsImgBox>
                  <FriendsImage src={imageUrl || "https://via.placeholder.com/120?text=OurFriend"}
                      alt="Friend logotype"
                      width="110" /> 
              </FriendsImgBox> 
              <ContactsList>
                  <Wrap>
                      <ContactsWrap >Time:</ContactsWrap>
            {!workDays || workDays.length === 0 ? <NoInfo>-------------</NoInfo> : 
              <WorkTimePopUp workDays={workDays} />} 
                  </Wrap>
                  <div>
                      <ContactsWrap >Address:</ContactsWrap>
                      {addressUrl && address ? (
              <ContactsLink
                href={addressUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                {address}
              </ContactsLink>
                      ) : null}
                      
                      {!addressUrl && address ? address : null}
                       {!addressUrl && !address ? (
              <NoInfo>-------------</NoInfo>
            ) : null}
                  </div>

                  <div>
                      <ContactsWrap>Email:</ContactsWrap>
                       {email ? (
              <ContactsLink href={`mailto:${email}`}>{email}</ContactsLink>
            ) : (
              <NoInfo>-------------</NoInfo>
            )}
                  </div>

                  <div>
                      <ContactsWrap >Phone:</ContactsWrap>
                      {phone ? (
              <ContactsLink href={`tel:${phone}`}>{phone}</ContactsLink>
            ) : (
              <NoInfo>-------------</NoInfo>
            )}
                  </div> 
              </ContactsList>
</FriendsItemBox>
    </FriendsItem>
  );
};
