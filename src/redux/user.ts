import { createSlice } from "@reduxjs/toolkit";

type user =  {
  id:number
  username :string
  name:string
  email:string
  avatar:string
  profileSetupStep:number
} | null

type LiveSession =  {
  id:number
  title:string
  status:string
  netTokens:number
} | null

const initialState = {
  user: <user> null ,
  token: <string | null> null,
  liveSession: <LiveSession> null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData:(state,action) => {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    setUserInfo:(state,action) => {
      state.user = action.payload
    },
    setLiveSession:(state,action) => {
      state.liveSession = action.payload
    },
    logOut:(state) => { 
      state.user = null
      state.token = null
      state.liveSession = null
    }
  },
});

export const { setUserData , logOut ,setUserInfo, setLiveSession} = userSlice.actions;

export default userSlice.reducer;