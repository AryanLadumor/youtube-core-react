import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name : "appSlice",
    initialState : {
        isSidebarOpen : true
    },
    reducers :{
        toogleSidebar(state){
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
})


export const {toogleSidebar} = appSlice.actions 

export default appSlice.reducer