import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"gpt",
    initialState:{
        GPTSearch:false,
    },
    reducers:{
        ToggleGPTSearchView:(state,action)=>{
             state.GPTSearch=!state.GPTSearch;
        },

    }
});
export const {ToggleGPTSearchView}=GptSlice.actions;
export default GptSlice.reducer;