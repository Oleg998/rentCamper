import { createSlice } from "@reduxjs/toolkit";
 

const initialState={
    items:[],
    isLoading:false,
    error:null
}

const campersSlice=createSlice({
    name:"campers",
    initialState,
    reducers:{
        fetchCampersLoading:(state)=>{
             state.isLoading=true
        },

        fetchCampersSuccess: (state , {payload})=>{
            state.isLoading=false;
            state.items=payload

        },

        fetchCampersError: (state , {payload})=>{
            state.isLoading=false;
            state.error=payload
        },

        
        getCamper:(state , {payload})=> [...state, payload],
    }
})

export const {getCamper , fetchCampersLoading, fetchCampersSuccess,fetchCampersError}=campersSlice.actions;
export default campersSlice.reducer