import PropTypes from 'prop-types'; 
import { FriendSection, FriendListItem, Status, Avatar, Name } from "./FriendList.styled";

export default function FriendList({friends}) {
    return (<FriendSection>
            {friends.map(({ id, isOnline, avatar, name }) => {
              return (<FriendListItem key={id}>            
                        <Status isOnline={isOnline}></Status>
                        <Avatar src={avatar} alt={name} width="48" />
                        <Name>{name}</Name>            
                      </FriendListItem>)})}
            </FriendSection>)
};

FriendList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};