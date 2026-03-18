import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name : "appSlice",
    initialState : {
        isSidebarOpen : true //Initially SideBard will be Open
    },
    reducers :{
        toogleSidebar(state){ //Action to toggle the Side Bar
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})


export const {toogleSidebar} = appSlice.actions 

export default appSlice.reducer