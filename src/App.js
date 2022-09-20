
import {useEffect} from 'react'
import NewAnecdote from './components/AnecdoteForm'
import Anecdotes from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Anecdotefilter'
import {useDispatch} from 'react-redux'
import {getAll} from './services/anecdotes'
import {initializeAnecdotes} from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    
    getAll().then((anecdotes) => dispatch(initializeAnecdotes(anecdotes)));
  },[dispatch])


  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  );
} 

export default App