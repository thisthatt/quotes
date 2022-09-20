import {filterChange} from "../reducers/FilterReducer"
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { connect } from 'react-redux'

const Filter = () => {
  const [search, setSearch] = useState('')
  
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    // input-field value is in variable event.target.value
    const filterValue = event.target.value
    //setSearch()
    console.log(event.target.value)
    dispatch(filterChange(filterValue));
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterChange
}


const ConnectFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectFilter