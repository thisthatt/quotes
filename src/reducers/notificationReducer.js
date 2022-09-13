import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice ({
    name:'notification',
    initialState:'test',
    reducers:{
        changeNotification(state,action){
            const content = action.payload
            console.log(state)
            state = content
            return state
        }
    }
})


export const {changeNotification} =  notificationSlice.actions

export default notificationSlice.reducer