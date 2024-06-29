import s from "./Profile.module.css";

const Profile = (user) => {
  return (
    <div className={s.wrapper}>
      <div className={s.userCard}>
        <img src={user.image} alt="User avatar" className={s.userAvatar} />
        <p className={s.userName}>{user.name}</p>
        <p className={s.userText}>@{user.tag}</p>
        <p className={s.userLocation}>{user.location}</p>
      </div>

      <ul className={s.userList}>
        <li className={s.userItem}>
          <span className={s.userItemText}>Followers</span>
          <span className={s.userItemNumber}>{user.stats.followers}</span>
        </li>
        <li className={`${s.userItem} ${s.userItemLikes}`}>
          <span className={s.userItemText}>Views</span>
          <span className={s.userItemNumber}>{user.stats.views}</span>
        </li>
        <li className={s.userItem}>
          <span className={s.userItemText}>Likes</span>
          <span className={s.userItemNumber}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
