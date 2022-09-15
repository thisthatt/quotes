import { createSlice } from "@reduxjs/toolkit";
import { addVote } from '../reducers/anecdoteReducer'
const initialState = ''

export const showNotification = (message, timeTimeout = 3000) => {
  return (dispatch) => {
    let timeoutReset;
    clearTimeout(timeoutReset);
    dispatch(addNotification(message));
    
    timeoutReset = setTimeout(
      () => dispatch(removeNotification()),
      timeTimeout
    );
  };
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification(state, action) {
      const content = action.payload;
      
      state = content;
      return state;
    },
    removeNotification(state, action){
        state = initialState;
        return state
    }
  },
//   extraReducers: (builder) => {
//     builder.addCase(addVote, (state, action) => 
//     state = 'Vote entered!');
//   },

});


export const {addNotification, removeNotification} =  notificationSlice.actions

export default notificationSlice.reducer

