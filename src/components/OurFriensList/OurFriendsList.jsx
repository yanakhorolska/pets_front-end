import { FriendsList } from "./OurFriendsListStyled"
import { useGetFriendsQuery } from "../../redux/ourFriendsApi"
import {OurFriendsItem} from "../OurFriendsItem/OurFriendsItem"
export const OurFriendsList = () => {

    const {  data, isError, isLoading } = useGetFriendsQuery();
  
    return (

        <>
            {isLoading ? <div> Loading ... </div> : null}  
            {!isLoading && !isError && data.length > 0 ?
                <FriendsList>
                    {data.map((friendsData) =>
                    (<OurFriendsItem key={friendsData._id}
                        friendsData={friendsData} />)
                       )}
            
        </FriendsList> : null }
            
        </>
    
     )
 }