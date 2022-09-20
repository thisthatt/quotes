import axios from 'axios'

const baseURL = 'http://127.0.0.1:3001/anecdotes'

const getAll = async ()=>{
    const response = await axios.get(baseURL)
    return response.data
}

const createNew = async (content) =>{
    
    const newEntry = {content, votes: 0}
    
    const response = await axios.post(baseURL, newEntry)
    console.log(response.data)
    return response.data
}

const addAnecdotevote = async (id, votes) =>{
    
    const votedAnecdote = await axios.patch(`${baseURL}/${id}`, {votes: votes})
    
    return votedAnecdote.data;
}
export { getAll, createNew, addAnecdotevote };