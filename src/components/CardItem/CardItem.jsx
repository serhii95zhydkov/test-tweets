import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersOperations';

const CardItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleFollowClick = async user => {
    const { followers, isFollowing } = user;
    const action = isFollowing ? -1 : 1;
    const updatedUser = {
      ...user,
      followers: followers + action,
      isFollowing: !isFollowing,
    };
    await dispatch(updateUser(updatedUser));
  };

  return (
    <li key={user.id}>
      <img src={`${user.avatar}`} alt={user.user} />
      <div>
        <p>{user.tweets} tweets</p>
        <p>{user.followers.toLocaleString('en-US')} followers</p>
        <button type="button" onClick={() => handleFollowClick(user)}>
          {user.isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};

export default CardItem;
