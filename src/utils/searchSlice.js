import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name : "searchSlice",
    initialState : {
            //empty object
    },
    reducers : {
        cacheResults(state , action)  {
             Object.assign(state , action.payload)  // data will come like {searchInputValue : [searchSuggestion]}
             //sequence matter because the returned object will be 1st argument or go for
            //return {...state , ...action.payload} 
        }
    }
})
export const {cacheResults} = searchSlice.actions
export default searchSlice.reducer


//structure of cache:
//TC to search in array = O(n)
//TC to search in Objecy = O(1) 
//new Map() new optimised way

