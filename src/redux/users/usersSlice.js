import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, updateUser } from './usersOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const updatedItems = payload.map(item => {
          const storedItem = state.items.find(i => i.id === item.id);
          const isFollowing = storedItem ? storedItem.isFollowing : false;
          return { ...item, isFollowing };
        });
        state.items = updatedItems;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item.id === payload.id);
        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            ...payload,
          };
        }
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
