import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUsers } from 'redux/users/usersOperations';
import { getAllUsers } from 'redux/users/usersSelectors';

import CardItem from 'components/CardItem/CardItem';

import {
  List,
  Button,
  Container,
  ContainerDrop,
  Label,
  Select,
} from './CardList.styled';

import { MdArrowBackIos } from 'react-icons/md';

const CardList = () => {
  const users = useSelector(getAllUsers);
  const [step, setStep] = useState(3);
  const [filter, setFilter] = useState('show all');

  const limit = 3;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleStepClick = () => {
    setStep(prevState => prevState + limit);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const filterUsers = user => {
    if (filter === 'show all') {
      return true;
    } else if (filter === 'follow') {
      return !user.isFollowing;
    } else if (filter === 'followings') {
      return user.isFollowing;
    }
    return false;
  };

  return (
    <>
      <Container>
        <Link to="/">
          <Button>
            <MdArrowBackIos />
            BACK
          </Button>
        </Link>
        <ContainerDrop>
          <Label htmlFor="filter">FILTER: </Label>
          <Select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="show all">show All</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </Select>
        </ContainerDrop>
      </Container>
      <List>
        {users
          .filter(filterUsers)
          .slice(0, step)
          .map(user => {
            return <CardItem key={user.id} user={user} />;
          })}
      </List>
      {step < users.filter(filterUsers).length && (
        <Button onClick={handleStepClick}>LOAD MORE</Button>
      )}
    </>
  );
};

export default CardList;
