import { createSlice } from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        nm:"Hello friend's !! we are cybrom students from bhopal "
    },
    reducers:{
        changeName:(state)=>{
            state.nm="We are cybrom students from bhopal ";
        }
    }
    
})
export const {changeName} = nameSlice.actions;
export default nameSlice.reducer;
