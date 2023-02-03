import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieList: [],
  status: "idle",
  movieDetails: {},
  movieId: "",
  review: [],
};

export const featchMovieList = createAsyncThunk(
  "movie/featchMovieList",
  async (search) => {
    try {
      const res = await fetch(
        "https://imdb-api.tprojects.workers.dev/search?query=" + search
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const featchMovieDetails = createAsyncThunk(
  "movie/featchMovieDetails",
  async (id) => {
    try {
      const res = await fetch(
        "https://imdb-api.tprojects.workers.dev/title/" + id
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const featchMovieRating = createAsyncThunk(
  "movie/featchMovieRating",
  async (id) => {
    try {
      const res = await fetch(
        "https://imdb-api.tprojects.workers.dev/reviews/" + id
      );
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
  },
  extraReducers: {
    [featchMovieList.pending]: (state) => {
      state.status = "loading";
    },
    [featchMovieList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // Add any fetched posts to the array
      state.movieList = action.payload?.results;
    },
    [featchMovieList.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [featchMovieDetails.pending]: (state) => {
      state.status = "loading";
    },
    [featchMovieDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.movieDetails = action.payload;
    },
    [featchMovieDetails.rejected]: (state, action) => {
      state.status = "failed";
    },
    [featchMovieRating.pending]: (state) => {
      state.status = "loading";
    },
    [featchMovieRating.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log(action.payload);
      state.review = action.payload?.reviews;
    },
    [featchMovieRating.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMovieList , setMovieId} = movieSlice.actions;

export default movieSlice.reducer;
