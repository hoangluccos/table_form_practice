import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/instance";

const initialState = {
  users: null,
  total: null,
  loading: false,
  error: null,
};
export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async (skip, { rejectWithValue }) => {
    try {
      const res = await instance.get(
        `/users?limit=10&skip=${Number(skip) * 10}`
      );
      // console.log("fetch successfully all users", res.data.users);
      return { users: res.data.users, total: res.data.total };
    } catch (error) {
      const err = error;
      return rejectWithValue(err?.message || "Fetch users failed");
    }
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    searchUser: (state, action) => {
      const keyWord = action.payload.trim();
      if (keyWord) {
        state.users = state.users.filter((u) =>
          u.firstName.toLowerCase().includes(keyWord.toLowerCase())
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
export const { searchUser } = userSlice.actions;
