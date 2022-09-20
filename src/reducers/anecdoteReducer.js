import {createSlice} from '@reduxjs/toolkit'
import { getAll, createNew, addAnecdotevote } from "../services/anecdotes";
//import { changeNotification } from './notificationReducer'
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]
const initialState = [];
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
 
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
//  anecdotesAtStart,
  // initialState: anecdotesAtStart.map(el=> asObject(el)),
  reducers: {
   
  updateVote(state, action) {
      const id = action.payload;
      console.log(id)
      const anecdoteToChange = state.find((el) => el.id === id);
    // const changedAnecdote = Object.assign(anecdoteToChange, {
    //   votes: (anecdoteToChange.votes += 1),
    // });
  const changedAnecdote = {
      ...anecdoteToChange, 
      votes:anecdoteToChange.votes +=1
      }
    
     state.map((el) => el.id !== id ? el : changedAnecdote);
    },
  setAnecdote(state, action){
      return action.payload
    // state.push(action.payload.map(el=>asObject(el)))
    },
  appendAnecdote (state, action){

    state.push(action.payload)
  }
},

});


export const { setAnecdote, appendAnecdote, updateVote } = anecdoteSlice.actions;


export const initializeAnecdotes = () =>{
  return async dispatch => {
    const fetchanecdotes = await getAll()
    dispatch(setAnecdote(fetchanecdotes))

  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content);
    console.log(newAnecdote)
    dispatch(appendAnecdote(newAnecdote));
  };
};
export const addVote = (id) =>{
  return async (dispatch, getState)=>{

    const state = getState()
    console.log('stateis', state.anecdotes, 'id', id)

    let votes = state.anecdotes.find(el => el.id == id).votes
    votes++;

    const newAnecdotevote = await addAnecdotevote(id, votes);
      dispatch(updateVote(id));
  
  }
}

export default anecdoteSlice.reducer;

// export const createAnecdote = (content)=>{
//   return {
//     type: 'NEW',
//     data: {
//       content
//     }
//   }
// }


// export const addVote = (id) =>{
//   return {
//     type: 'VOTE',
//     data: {
//       id
//     }
//   }
// }



// const initialState = anecdotesAtStart.map(asObject)

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//  // console.log('action', action)



// switch(action.type){
//   case 'VOTE':{
//    const id = action.data.id

// const anecdoteToChange = state.find(el => el.id === id)
//     const changedAnecdote = Object.assign(anecdoteToChange, {votes:anecdoteToChange.votes+=1})
  
//      let newState = state.map(el=> el.id !== id ? el : changedAnecdote)
  
//     return newState
//   }
//   case 'NEW':{
//     const newAnecdote = asObject(action.data.content)
    
//     return state.concat(newAnecdote)
//   }
//  default: return state

// }
//   // return state
// }
