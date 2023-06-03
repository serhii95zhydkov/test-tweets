import * as api from '../../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.getUsers();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
  async ({ id, followers, isFollowing }, { rejectWithValue }) => {
    try {
      const result = await api.updateUserById({ id, followers });
      return { ...result, isFollowing };
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
