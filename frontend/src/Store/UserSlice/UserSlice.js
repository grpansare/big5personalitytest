import { createSlice}  from '@reduxjs/toolkit'
const initialState={
    currentUser:null,
    userAnswers:[]
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            console.log(action.payload);
            
            state.currentUser=action.payload;
          
        },
        getUser:(state)=>{
            return  state.currentUser;
        },
        Logout:(state)=>{
              
            state.currentUser=null
           
        },
        setUserAnswers:(state,action)=>{
              state.userAnswers=action.payload
        }
    }
})

export const {setUser,getUser,Logout,setUserAnswers}=userSlice.actions
export default userSlice.reducer

