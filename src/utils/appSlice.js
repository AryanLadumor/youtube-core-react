import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "appSlice",
    initialState : {
        isSidebarOpen : true //Initially SideBard will be Open
    },
    reducers :{
        toogleSidebar(state){ //Action to toggle the Side Bar
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar(state){ //Action to just close Side Bar
            state.isSidebarOpen = false;
        }
    }
})


export const {toogleSidebar , closeSidebar} = appSlice.actions 

export default appSlice.reducer