import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from 'redux/users/usersOperations';
import { getAllUsers } from 'redux/users/usersSelectors';

import CardItem from 'components/CardItem/CardItem';

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
      <div>
        <label htmlFor="filter">Filter: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="show all">Show All</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </select>
      </div>
      <ul>
        {users
          .filter(filterUsers)
          .slice(0, step)
          .map(user => {
            return <CardItem key={user.id} user={user} />;
          })}
      </ul>
      {step < users.filter(filterUsers).length && (
        <button onClick={handleStepClick}>Load More</button>
      )}
    </>
  );
};

export default CardList;
