import { createSlice } from "@reduxjs/toolkit";
import data from "../../Components/Data/data.json"


const userSlice=createSlice({
    name:"user",
    initialState:{
        user:{
           ai_data:data
        }
    },
    reducers:{

    }
})


export default userSlice.reducer;