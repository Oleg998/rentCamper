import * as campersApi from '../../api/campers-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars=createAsyncThunk(
    "campers/fetchAll", async(_,thunkApi)=>{
        try {
         const data=await campersApi.requestCampers()
         return data;
        }
        catch(error){
            return thunkApi.rejectWithValue(error.massage);
        }
    }
)