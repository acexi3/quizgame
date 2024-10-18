import { configureStore } from "@reduxjs/toolkit";
// import reducers 
import { topicsReducer } from "../features/topics/topicsSlice"; 
import { quizzesReducer } from "../features/quizzes/quizzesSlice";
import { cardsReducer } from "../features/cards/cardSlice"; 

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
