import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const LOG = createAsyncThunk(
  "user/LOG",
  async (userDetails, thunkAPI) => {
    try {
      const user = await axios.post(`https://blokchain.onrender.com/login/`, userDetails);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    userDetails:  {},
    isLoading: false,
    isSuccess: false,
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isAuthenticated= false;
      state.userDetails = {};
    },

    logout: (state)=>{
      state.isAuthenticated= false
      state.userDetails={}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LOG.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })

      .addCase(LOG.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.userDetails = action.payload;
      })

      .addCase(LOG.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, reset } = userSlice.actions;
export default userSlice.reducer;
