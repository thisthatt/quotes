import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { showNotification } from "../reducers/notificationReducer";
import {connect} from 'react-redux'

const Anecdotes = ()=>{
const dispatch = useDispatch();

const anecdotes = useSelector(
  //(state) => state.anecdotes
  state => state.anecdotes.slice().sort((a, b) => b.votes - a.votes)
);
console.log(anecdotes)


const vote = (id) => {
  console.log("vote", id);
  dispatch(addVote(id));

  //console.log(anecdotes.find(el=> el.id==id))
  const notificationmsg = anecdotes.find(el => el.id === id)
 dispatch(showNotification(`You voted for "${notificationmsg.content}"`));
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