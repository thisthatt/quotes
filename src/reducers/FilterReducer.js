import { createSlice } from "@reduxjs/toolkit";


let initialState='';
const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducer:{
        setFilter(action,state){
            state.filter = action.data.filter
            return state 
        }


    }



})

export const filterChange = filter => {
    return {
        type: 'FILTER',
        data:{
            filter
        }
    }
}




export const { setFilter } = filterSlice.actions
export default filterSlice.reducer


