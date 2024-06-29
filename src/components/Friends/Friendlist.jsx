import FriendListItem from "./FriendListItem";
import s from "./Friendlist.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <li key={friend.id} className="">
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
