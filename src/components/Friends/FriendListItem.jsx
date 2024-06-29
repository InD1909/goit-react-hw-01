import s from "./Friendlist.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.friendName}>{name}</p>
      <p
        className={`${clsx(isOnline === true ? s.online : s.offline)} ${
          s.friendStatus
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
