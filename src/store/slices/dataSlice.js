import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";
const api = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;
const now = dayjs(new Date()).format("YYYY-MM-DD");
const lastMonth = dayjs(new Date()).subtract(1, "month").format("YYYY-MM-DD");

export const getNowPlaying = createAsyncThunk(
  "dataSlice/getNowPlaying",
  async () => {
    const response = await axios.get(
      `${api}discover/movie?api_key=${key}&release_date.gte=${lastMonth}&release_date.lte=${now}&include_adult=false&include_video=false&language=en-US&with_release_type=2|3`
    );
    return response.data;
  }
);

export const getTopRated = createAsyncThunk(
  "dataSlice/getTopRated",
  async () => {
    const response = await axios.get(
      `${api}discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
    );
    return response.data;
  }
);

export const getMovieDetail = createAsyncThunk(
    "dataSlice/getMovieDetail",
    async (id) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
      );
      return response.data;
    }
  );

  export const getSimilarList = createAsyncThunk(
    "dataSlice/getSimilarList",
    async (id) => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${key}`
      );
      console.log(response.data)
      return response.data;
    }
  );

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    nowPlayList: null,
    topRatedList: null,
    movieDetail: null,
    similarList: null,
    loadNowPlay: false,
    loadTopRated: false,
    loadMovieDetail: false,
    loadSimilar: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNowPlaying.pending, (state, action) => {
        state.loadNowPlay = true;
      })
      .addCase(getNowPlaying.fulfilled, (state, action) => {
        state.nowPlayList = action.payload;
        state.loadNowPlay = false;
      })
      .addCase(getTopRated.pending, (state, action) => {
        state.loadTopRated = true;
      })
      .addCase(getTopRated.fulfilled, (state, action) => {
        state.topRatedList = action.payload;
        state.loadTopRated = false;
      })
      .addCase(getMovieDetail.pending, (state, action) => {
        state.loadMovieDetail = true;
        state.movieDetail = null
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
        state.loadMovieDetail = false;
      })
      .addCase(getSimilarList.pending, (state, action) => {
        state.loadSimilar = true;
      })
      .addCase(getSimilarList.fulfilled, (state, action) => {
        state.similarList = action.payload;
        state.loadSimilar = false;
      })
  },
});

// Action creators are generated for each case reducer function
export const {} = dataSlice.actions;

export default dataSlice.reducer;
