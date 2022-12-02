/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
// import { getCardsThunk, getDetailedCardThunk, switchCardFavoriteThunk } from "./actionCreators";

const toolkitSlice = createSlice({
  name: "calendar",
  initialState: {
    gapsInHistory: {
      1:{
        dates: [1974, 1981],
        events:[
          {year: 1974, info: "Случилось счастье"},
          {year: 1975, info: "Случилось счастье"},
          {year: 1976, info: "Случилось счастье"},
          {year: 1977, info: "Случилось счастье"},
          {year: 1978, info: "Случилось счастье"},
          {year: 1979, info: "Случилось счастье"},
          {year: 1980, info: "Случилось счастье"},
          {year: 1981, info: "Случилось счастье"},
        ] 
      },
      2:{
        dates: [1982, 1989],
        events:[
          {year: 1982, info: "Случилось счастье"},
          {year: 1983, info: "Случилось счастье"},
          {year: 1984, info: "Случилось счастье"},
          {year: 1985, info: "Случилось счастье"},
          {year: 1986, info: "Случилось счастье"},
          {year: 1987, info: "Случилось счастье"},
          {year: 1988, info: "Случилось счастье"},
          {year: 1989, info: "Случилось счастье"},
        ] 
      },
      3: {
        dates: [1990, 1997],
        events:[
          {year: 1990, info: "Случилось счастье"},
          {year: 1991, info: "Случилось счастье"},
          {year: 1992, info: "Случилось счастье"},
          {year: 1993, info: "Случилось счастье"},
          {year: 1994, info: "Случилось счастье"},
          {year: 1995, info: "Случилось счастье"},
          {year: 1996, info: "Случилось счастье"},
          {year: 1997, info: "Случилось счастье"},
        ] 
      },
      4:{
        dates: [1998, 2005],
        events:[
          {year: 1998, info: "Случилось счастье"},
          {year: 1999, info: "Случилось счастье"},
          {year: 2000, info: "Случилось счастье"},
          {year: 2001, info: "Случилось счастье"},
          {year: 2002, info: "Случилось счастье"},
          {year: 2003, info: "Случилось счастье"},
          {year: 2004, info: "Случилось счастье"},
          {year: 2005, info: "Случилось счастье"},

        ] 
      },
      5:{
        dates: [2006, 2013],
        events:[
          {year: 2006, info: "Случилось счастье"},
          {year: 2007, info: "Случилось счастье"},
          {year: 2008, info: "Случилось счастье"},
          {year: 2009, info: "Случилось счастье"},
          {year: 2010, info: "Случилось счастье"},
          {year: 2012, info: "Случилось счастье"},
          {year: 2013, info: "Случилось счастье"},
          {year: 2014, info: "Случилось счастье"},
        ] 
      },
      6:{
        dates: [2015, 2022],
        events:[
          {year: 2015, info: "Случилось счастье"},
          {year: 2016, info: "Случилось счастье"},
          {year: 2017, info: "Случилось счастье"},
          {year: 2018, info: "Случилось счастье"},
          {year: 2019, info: "Случилось счастье"},
          {year: 2020, info: "Случилось счастье"},
          {year: 2021, info: "Случилось счастье"},
          {year: 2022, info: "Случилось счастье"},
        ] 
      },
    },
  },
  reducers: {
    getGaps(state: any, action: any) {
    },
  },
  // extraReducers: {
  //   [getCardsThunk.pending]: (state: any) => {
  //     state.requestInProgress = true
  //   },
  //   [getCardsThunk.fulfilled]: (state: any, action: any) => {
  //     state.cards = action.payload;
  //     state.filteredCards = action.payload;
  //     state.requestInProgress = false
  //   },
  //   [getCardsThunk.rejected]: () => {
  //     console.error("Not response")
  //   },
  //   [getDetailedCardThunk.fulfilled]: (state: any, action: any) => {
  //     state.detailedCard = action.payload
  //   },
  //   [switchCardFavoriteThunk.fulfilled]: (state: any, action: any) => {
  //     state.cards = state.cards.map((item: any) => item.id === action.payload.id ? action.payload : item)
  //     state.filteredCards = state.filteredCards.map((item: any) => item.id === action.payload.id ? action.payload : item)
  //   }
  // }
})

export default toolkitSlice.reducer;
export const { getGaps } = toolkitSlice.actions