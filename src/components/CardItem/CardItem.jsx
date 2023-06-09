import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { updateUser } from 'redux/users/usersOperations';

import logo from '../../images/logo.png';

import {
  Item,
  ImgLogo,
  ImgBackground,
  Container,
  ContainerAvatar,
  ImgAvatar,
  ContainerInfo,
  Button,
} from './CardItem.styled';

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
    <Item key={user.id}>
      <ImgBackground>
        <ImgLogo src={logo} alt="logo" width={76} height={22} />
      </ImgBackground>
      <Container>
        <ContainerAvatar>
          <ImgAvatar
            src={`${user.avatar}`}
            alt={user.user}
            width={62}
            height={62}
          />
        </ContainerAvatar>
      </Container>
      <ContainerInfo>
        <p>{user.tweets} TWEETS</p>
        <p>{user.followers.toLocaleString('en-US')} FOLLOWERS</p>
      </ContainerInfo>
      <Button
        type="button"
        value={user.isFollowing}
        onClick={() => handleFollowClick(user)}
      >
        {user.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Item>
  );
};

CardItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool,
  }).isRequired,
};

export default CardItem;
