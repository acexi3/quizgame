import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}  // This corresponds to an empty object as specified
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []  // Initialize with an empty array as specified
      };
    },
    addQuizIdToTopic: (state, action) => {
      
      const { topicId, quizId } = action.payload;
      if (!state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      } else {
        console.error(`Topic with id ${topicId} not found`);
      }
    }
  }
});

// Action creators
export const { addTopic, addQuizIdToTopic } = topicsSlice.actions;
// Reducer
export const topicsReducer = topicsSlice.reducer;
// Selector
export const selectTopics = (state) => state.topics.topics;