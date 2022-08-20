import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
  name: "posts",
  initialState: {
    quoteList: [],
  },
  reducers: {
    fetchAllQuotes(state, action) {
      state.quoteList = action.payload.items;
    },
    createQuote(state, action) {
      state.quoteList.push(action.payload);
    },
    deleteQuote(state, action) {
      const newItems = state.quoteList.filter(
        (item) => item.id !== action.payload
      );
      state.quoteList = [...newItems];
    },
  },
});

export const quotesActions = quotesSlice.actions;

export default quotesSlice.reducer;
