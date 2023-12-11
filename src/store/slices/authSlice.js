import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api = import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_API_KEY

export const getRequestToken = createAsyncThunk("authSlice/getRequestToken", async () => {
  const response = await axios.post(`${api}auth/request_token?api_key=${key}`);
  return response.data;
});
export const getAccessToken = createAsyncThunk("authSlice/getAccessToken", async (payload) => {
  const response = await axios.post(`${api}auth/access_token?request_token=${payload}`);
  return response.data;
});

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    reqToken: "",
    account: "",
    isLoading: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRequestToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getRequestToken.fulfilled, (state, action) => {
        state.reqToken = action.payload.request_token;
        state.isLoading = false;
      })
      .addCase(getAccessToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAccessToken.fulfilled, (state, action) => {
        state.account = action.payload;
        state.isLoading = false;
      })
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
