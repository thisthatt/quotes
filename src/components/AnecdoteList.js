﻿import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
const Anecdotes = ()=>{

const anecdotes = useSelector((state) =>
  state.sort((a, b) => b.votes - a.votes)
);
const dispatch = useDispatch();

const vote = (id) => {
  console.log("vote", id);
  dispatch(addVote(id));
};
return(
    <div> 

    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}

      </div>

)
}

export default Anecdotes;