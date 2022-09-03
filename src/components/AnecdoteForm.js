import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const NewAnecdote = (props)=> {

 const dispatch = useDispatch()
      const addAnecdote = (event)=>{
    event.preventDefault()
    const content = event.target.newanecdote.value
    event.target.newanecdote.value = '';
    dispatch(createAnecdote(content))
  }
    return (
      
    <form onSubmit={addAnecdote}>
    <div>
        <input name="newanecdote" />
    </div>
  <button>create</button>
    </form>
    
)
}
export default NewAnecdote