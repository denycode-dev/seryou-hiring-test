import { createSlice } from "@reduxjs/toolkit";

export const localSlice = createSlice({
  name: "localSlice",
  initialState: {
    localFav: JSON.parse(localStorage.getItem("localFav")) || null,
    localBookmark: JSON.parse(localStorage.getItem("localBookmark")) || null,
    showAuth: true
  },
  reducers: {
    setShowAuth: (state, action) => {
        state.showAuth = false
    },
    setFavToLocal: (state, action) => {
      state.localFav = JSON.parse(localStorage.getItem("localFav"));
      if (state.localFav) {
        const index = state.localFav.findIndex((val) => val && val.id && val.id == action.payload.id);
        if (index >= 0) {
          state.localFav.splice(index, 1);
        } else {
          state.localFav.push(action.payload);
        }
        localStorage.setItem("localFav", JSON.stringify(state.localFav));
      } else {
        const payload = [];
        payload.push(action.payload);
        localStorage.setItem("localFav", JSON.stringify(payload));
      }
      state.localFav = JSON.parse(localStorage.getItem("localFav"));
    },
    setBookmarkToLocal: (state, action) => {
        state.localBookmark = JSON.parse(localStorage.getItem("localBookmark"));
        if (state.localBookmark) {
          const index = state.localBookmark.findIndex((val) => val && val.id && val.id == action.payload.id);
          if (index >= 0) {
            state.localBookmark.splice(index, 1);
          } else {
            state.localBookmark.push(action.payload);
          }
          localStorage.setItem("localBookmark", JSON.stringify(state.localBookmark));
        } else {
          const payload = [];
          payload.push(action.payload);
          localStorage.setItem("localBookmark", JSON.stringify(payload));
        }
        state.localBookmark = JSON.parse(localStorage.getItem("localBookmark"));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavToLocal, setBookmarkToLocal, setShowAuth } = localSlice.actions;

export default localSlice.reducer;
