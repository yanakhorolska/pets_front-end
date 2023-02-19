
import {
  FriendsItem,
  ItemTitle,
  FriendsItemBox,
  FriendsImgBox,
  FriendsImage,
  ContactsList,
  ContactsWrap,
    ContactsLink,
  NoInfo
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
                  <div>
                      <ContactsWrap component="span">Time:</ContactsWrap>
            {!workDays || workDays.length === 0 ? <NoInfo component="span">No information</NoInfo> : 
              <WorkTimePopUp workDays={workDays} />} 
                  </div>
                  <div>
                      <ContactsWrap component="span">Address:</ContactsWrap>
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
              <NoInfo  component= "span">No information</NoInfo>
            ) : null}
                  </div>

                  <div>
                      <ContactsWrap component="span">Email:</ContactsWrap>
                       {email ? (
              <ContactsLink href={`mailto:${email}`}>{email}</ContactsLink>
            ) : (
              <NoInfo component= "span">No information</NoInfo>
            )}
                  </div>

                  <div>
                      <ContactsWrap component="span">Phone:</ContactsWrap>
                      {phone ? (
              <ContactsLink href={`tel:${phone}`}>{phone}</ContactsLink>
            ) : (
              <NoInfo component= "span">No information</NoInfo>
            )}
                  </div> 
              </ContactsList>
</FriendsItemBox>
    </FriendsItem>
  );
};
