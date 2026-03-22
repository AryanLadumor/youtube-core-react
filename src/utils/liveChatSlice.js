import { createSlice } from "@reduxjs/toolkit";
import { OFFCHAT_LIVE_CHAT } from "./constants";

const liveChatSlice = createSlice({
    name : "liveChatSlice",
    initialState : {
        messages : []
    },
    reducers : {
        addMessage(state,action){
            state.messages.splice( OFFCHAT_LIVE_CHAT, 1) // making only 200 messages in the Chat container 
            state.messages.unshift(action.payload) //putting chat into list
        }
    }

})

export const {addMessage} = liveChatSlice.actions

export default liveChatSlice.reducer