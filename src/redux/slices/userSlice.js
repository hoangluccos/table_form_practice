import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../api/instance";

const initialState = {
  users: null,
  loading: false,
  error: null,
};
export const fetchUserData = createAsyncThunk(
  "users/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get("/users");
      console.log("fetch successfully all users", res.data.users);
      return res.data.users;
    } catch (error) {
      const err = error;
      return rejectWithValue(err?.message || "Fetch users failed");
    }
  }
);
const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
