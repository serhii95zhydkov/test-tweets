import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/users/usersOperations';

import logo from '../../images/logo.png';
import background from '../../images/background.png';

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
      <ImgLogo src={logo} alt="logo" width={76} height={22} />
      <ImgBackground
        src={background}
        alt="background"
        width={308}
        height={168}
      />
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

export default CardItem;
